import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import {Helmet} from "react-helmet";
import _ from "underscore";
import { BeatLoader, RotateLoader } from 'react-spinners';
import { Collapse } from 'antd';
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,

  FacebookIcon,
  EmailIcon,
  WhatsappIcon
} from "react-share";
import { reduxForm, Field, propTypes as reduxFormPropTypes } from "redux-form";

import { getSession, saveCartSession } from '../../utils/session_utils'
import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"

import './style.local.css';

// Stores and stores actions importation
import { singleProductCStoreActions } from "./store";
import { navBarCartCStoreActions } from "../Snippets/MiddleNavBar/store";
import urls from '../../routes/urls'


const { Panel } = Collapse;


export default
@withTranslation()
@connect((state, props) => ({
  singleProductCStore: state.singleProductCStore,
}))
@reduxForm({ form: "addToCartForm", enableReinitialize: true })
class SingleProduct extends React.Component {

  UNSAFE_componentWillMount(){
    var slug = this.props.match.params.slug

    this.props.dispatch(singleProductCStoreActions.setProductSlug(slug))
    this._fetchSingleProduct(slug)
    this.props.change('quantity', this.props.singleProductCStore.quantity);
  }


  _fetchSingleProduct(slug){
    const { variety_id } = this.props.singleProductCStore

    window.axios
    .get(`/apis/products/${slug}/`)
    .then(response => {
      var product = response.data 
      // console.log("Product single fetched!!!!!!!!!!!!", product)
      this.props.dispatch(singleProductCStoreActions.setSingleProduct(product))
      this.props.dispatch(singleProductCStoreActions.setStockQuantity(product.varieties[variety_id].quantity))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
        window.location.href = `${urls.NOTFOUND}`;
      }  
    )
  }


  _handleAddToCart(formValues){
    console.log("Product added to cart!!!!!!!!!!!!", formValues.quantity)
    // Call api to adding cart item on cart now
    this.props.dispatch(singleProductCStoreActions.setLoading(true))

    const { stock_quantity, single_product, variety_id , product_slug } = this.props.singleProductCStore
    var result = stock_quantity - formValues.quantity

    this.props.dispatch(singleProductCStoreActions.setStockQuantity(result))

    if (result < 0){
      this.props.change('quantity', 0);
    } else {

      var cart_item = {
        cart : getSession().cart_id,
        variety : single_product.varieties[variety_id].id,
        quantity : formValues.quantity,
        line_total : single_product.price * formValues.quantity,
      }

      window.axios
      .post(`/apis/cart/add_item/`, { data : cart_item})
      .then(response => {
        // Toggle state of navbar to true an set time out to reback to false after 3000 
        this.props.dispatch(singleProductCStoreActions.setLoading(false))
        this.props.dispatch(singleProductCStoreActions.setNavCartToggler(true))

        // updating cart session there
        this.update_cart_session(getSession().cart_id)

        // Toggle cart navbar dropdown
        setTimeout(()=> {
          this.props.dispatch(singleProductCStoreActions.setNavCartToggler(false))
        }, 2000)      
      })
      .catch(err => {
        this.props.dispatch(singleProductCStoreActions.setLoading(false))
        console.error("Error when adding item to cart")
      })

      this.props.change('quantity', 1);
      // Updating product list because the quantity of product variety decrease
      this._fetchSingleProduct(product_slug)
    }
  }


  update_cart_session(cart_id){
    window.axios
    .get(`/apis/core/session/carts/update/${cart_id}/`)
      .then(response => {
        // console.log('Upadting session cart', response.data)
        var products = response.data.products
        var total_price = response.data.cart_price
        var total_items = response.data.cart_quantity

        var cart_session = {
          products: products,
          total_price: total_price,
          total_items: total_items
        }

        saveCartSession(JSON.stringify(cart_session))
        this.props.dispatch(navBarCartCStoreActions.setItem(total_items))

      })
      .catch(err => {
        console.error('Error on updating cart session', err)
      })
  }


  _handleAddToWhishList(){
    console.log("Product added to whishlist!!!!!!!!!!!!")
  }

  _handleAddQuantity(){
    console.log("Augmentation!!!!!!!!!!!!")
    var qty = this.props.singleProductCStore.quantity + 1
    
    this.props.change('quantity', qty);
    this.props.dispatch(singleProductCStoreActions.setProductQuantity(qty))
  }

  _handleRemoveQuantity(){
    console.log("Decrease!!!!!!!!!!!!")
    if(this.props.singleProductCStore.quantity > 1 ){
      var qty = this.props.singleProductCStore.quantity - 1
      
      this.props.change('quantity', qty);
      this.props.dispatch(singleProductCStoreActions.setProductQuantity(qty))
    }
  }

  _handleChangeVariety(id, quantity){
    this.props.dispatch(singleProductCStoreActions.setThumbnailPictureKey(0))
    this.props.dispatch(singleProductCStoreActions.setPicLoading(true))
    setTimeout(()=> {
      this.props.dispatch(singleProductCStoreActions.setPicLoading(false))
      // console.log("BBBBBBBBBAAAAAAAAAAMMMMMMMMMMMMMMMMMMMMMMMMM", id)
      this.props.dispatch(singleProductCStoreActions.setVarietyID(id))
    }, 2000)
    this.props.dispatch(singleProductCStoreActions.setStockQuantity(quantity))
    this.props.change('quantity', 1);
    this.props.dispatch(singleProductCStoreActions.setProductQuantity(1))
    console.log("Stock quantity ",quantity)
  }

  _handleChangeVarietyImage(key){
    console.log("Image changed! key is: ", key)
    this.props.dispatch(singleProductCStoreActions.setThumbnailPictureKey(key))
  }


  render() {
    const { t, i18n } = this.props
    const { quantity, stock_quantity, loading, single_product, variety_id, pic_loading, thumbnail_picture_key } = this.props.singleProductCStore

    const baseUrl = "https://google.com"
    const pagetitle = "Single Product | Shop"
    const description = "Mon produit est Ok"
    const siteImage = "/static/images/logo.png"



    return (
      //<!-- Document Wrapper -->
      <div className="single-product">

        { loading ? ( 
            <div className='sweet-loading'>
              <div className='reverse-spinner'>
                <BeatLoader
                  color={'#FE980F'} 
                  loading={loading} 
                />
              </div>
            </div>)
          : ''
        }


        <Helmet>
            <meta charSet="utf-8" />
            <title>{pagetitle}</title>
            <link rel="canonical" href={baseUrl} />
            <meta property="og:url" content={baseUrl} />
            {/* <meta property="og:type" content={props.type} /> */}
            <meta property="og:title" content={pagetitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={siteImage} />
        </Helmet>


        <Navbar topNav={true} middleNav={true} megaNav={true} />
        
        <div className="container">
          <div className="row">
          <div className="col-xs-12 col-sm-12">
            {
              single_product ?
            (
            <div className="product-details">
              <div className="row">
                <div className="col-sm-2">
                  { !_.isEmpty(single_product.varieties) ? 
                        single_product.varieties[variety_id] ? (single_product.varieties[variety_id].pictures)
                          .map((val, key) => {
                            return (
                              <div className="variety_thumnail" key={key} onClick={ this._handleChangeVarietyImage.bind(this, key) }>
                                <div className={`variety_thumnail_opak ${ key==thumbnail_picture_key ? 'active' : 0 }`} key={key}>
                                </div>
                                <img className="" src={val} alt="" />
                              </div>
                            )
                          }) : null : null
                      }
                </div>
                <div className="col-sm-5">
                  <div className="view-product">
                    <div className="row">
                      { pic_loading ? ( 
                            <div className='spin'>
                              <RotateLoader
                                color={'#FE980F'} 
                                loading={pic_loading} 
                              />
                            </div>)
                        : ''
                      }

                      {/* IMAGE PREVISUALISATION VIEWER */}
                      <div className="single_product_img">
                        {/* Here the variety id must be set on picture */}
                        {/* <img className="" src={single_product.varieties ? single_product.varieties[variety_id].pictures[0] : null } alt="" /> */}
                        <img className="" src={single_product.varieties ? single_product.varieties[variety_id].pictures[thumbnail_picture_key] : null } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="product-information">
                    <img src="images/product-details/new.jpg" className="newarrival" alt="" />
                    <h2 className="display-4">{ single_product.title }</h2>
                    <p>{'Ref: ' + single_product.ref }</p>

                    <h5 className="price-row">{ single_product.price + ' FCFA' }</h5>

                    <div className="row product-size" style={{ marginLeft: "0px", marginRight: "0px" }}>
                      <div className="col-sm-6" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <h6>Selectionner la taille</h6>
                        <p className="size">
                        { !_.isEmpty(single_product.varieties) ? 
                          (single_product.varieties)
                            .map((val, key) => {
                              return (
                                <a href="#" key={key}>{val.size.name} &nbsp;</a>
                              )
                            }) : null
                        }
                        </p>
                      </div>
                      <div className="col-sm-6 link-size" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <a href="#" className="btn btn-link">Tableau tailles</a>
                      </div>
                    </div>
                    
                    <form>
                      <div className="row color-and-qty" style={{ marginLeft: "0px", marginRight: "0px" }}>
                        <div className="col-sm-6 variety-color" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                          <div className="">
                            { !_.isEmpty(single_product.varieties) ? 
                              (single_product.varieties)
                                .map((val, key) => {
                                  return (
                                    <div key={key} style={{ display: "inline-block" }}>
                                      <a 
                                        className="" 
                                        onClick={this._handleChangeVariety.bind(this, key, val.quantity)}
                                        style={{ 
                                                  width: "10px", 
                                                  height: "10px", 
                                                  backgroundColor: val.color.code, 
                                                  color: val.color.code, 
                                                  padding: "5px", 
                                                  marginRight: "5px",
                                                  border: `2px solid ${val.code}`,
                                                  borderRadius: "5px"
                                        }}
                                        data-toggle="tooltip" data-placement="bottom" title={val.color.name}
                                      >
                                        00
                                      </a>
                                    </div>
                                  )
                                }) : null
                            }
                          </div>
                        </div>

                        <div className="col-sm-6 cart_quantity_wrapper" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                          <div className="cart_quantity_button">
                            <button 
                              type="button" 
                              className="btn btn-light plusMinus" 
                              onClick={this._handleRemoveQuantity.bind(this)}
                              disabled={ quantity == 1 || stock_quantity < 1 ?true:false }
                            >
                              - 
                            </button>
                            <Field 
                              className="cart_quantity_input"   
                              component="input"
                              type="text" 
                              name="quantity" 
                              size="2" 
                            />
                            <button 
                              type="button" 
                              className="btn btn-light plusMinus" 
                              onClick={this._handleAddQuantity.bind(this)}
                              disabled={ quantity >= stock_quantity ?true:false }
                            > 
                              + 
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="row whishlist-and-cart" style={{ marginLeft: "0px", marginRight: "0px" }}>
                        <div className="col-sm-2 add-to-wishlist-wrapper" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                          <button 
                            type="button" 
                            className="btn btn-outline-secondary wishbutton"
                            onClick={this._handleAddToWhishList.bind(this)}
                          >
                            <i className="fa fa-heart"></i>
                          </button>
                        </div>
                        <div className="col-sm-10 add-to-cart-wrapper" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                          <button 
                            type="button" 
                            className="btn btn-fefault cart full-cart"
                            onClick={this.props.handleSubmit(this._handleAddToCart.bind(this))}
                            disabled={ stock_quantity < 1 ?true:false }
                          >
                            <i className="fa fa-shopping-cart"></i>
                            Add to cart
                          </button>
                        </div>
                        <div style={{ paddingTop: "20px" }}>
                          <FacebookShareButton url={`https://github.com/stephcyrille`}>
                            <FacebookIcon size={32} round={true} />
                          </FacebookShareButton>
                          &nbsp;&nbsp;
                          <EmailShareButton url={`https://github.com/stephcyrille`}>
                            <EmailIcon size={32} round={true} />
                          </EmailShareButton>
                          &nbsp;&nbsp;
                          <WhatsappShareButton url={`https://github.com/stephcyrille`}>
                            <WhatsappIcon size={32} round={true} />
                          </WhatsappShareButton>
                        </div>
                      </div>
                    </form>
                    
                    <div className="row description-resume">
                      <div className="col-sm-12">
                        <Collapse
                          bordered={false}
                          showArrow={false}
                          activeKey="1"
                          expandIconPosition="right"
                        >
                          <Panel header="Description" key="1">
                            {single_product.description}
                          </Panel>
                        </Collapse>
                      </div>
                    </div>

                  </div>
                </div>
                
                {/* The same Items block */}
              </div>
            </div>  
            ):null
            
            }

          </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
