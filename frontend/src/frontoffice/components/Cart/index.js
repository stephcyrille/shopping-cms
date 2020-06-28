import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";
import { PulseLoader } from 'react-spinners';
import _ from "underscore";

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"
import Drawer from "app-js/frontoffice/components/Snippets/Drawer/index"

import { cartCStoreActions } from './store'
import { navBarCartCStoreActions } from '../Snippets/MiddleNavBar/store'
import './style.local.css';
import { getSession, saveCartSession } from '../../utils/session_utils'
import urls from '../../routes/urls'



export default
@withTranslation()
@connect((state, props) => ({
  cartCStore: state.cartCStore,
}))
class Cart extends React.Component {

  componentDidMount(){
    var cart_id = getSession().cart_id
    this._fetchCartItems(cart_id)
  }

  _fetchCartItems(cart_id){
    this.props.dispatch(cartCStoreActions.setLoading(true))

    window.axios
    .get(`/apis/cart/${cart_id}/`)
    .then(response => {
      var cart = response.data
      
      this.props.dispatch(cartCStoreActions.setLoading(false))
      this.props.dispatch(cartCStoreActions.setCart(cart))
      this.props.dispatch(cartCStoreActions.setCartSubTotal(cart.total))
      this.props.dispatch(cartCStoreActions.setCartTotal(cart.total + cart.delivery_price))
      this.props.dispatch(cartCStoreActions.setCartDeliveryPrice(cart.delivery_price))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
        this.props.dispatch(cartCStoreActions.setLoading(false))
      }  
    )
  }


  _handleRemoveItem(cart_item_id){
    console.log('Remove cart item with id', cart_item_id)
     var body = {
      cart_id : getSession().cart_id,
      cart_item_id: cart_item_id
     }

    window.axios
    .post(`/apis/cart/item/delete/`, { body })
    .then(response => {
      // var res = response.data
      
      // Updating cart items list
      var cart_id = getSession().cart_id
      this._fetchCartItems(cart_id)

      this.update_cart_session(getSession().cart_id)
    })
    .catch(
      error => {
        console.error("Errrorr", error)
      }  
    )
  }


  update_cart_session(cart_id){
    console.log('===================PAAAAAAAAAAAAAMMMMMMMMMMMMMMMMMMMMMMMMMM')
    window.axios
    .get(`/apis/core/session/carts/update/${cart_id}/`)
      .then(response => {
        console.log('Upadting session cart', response.data)
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
        
        console.log('===================POOOOOOOOO')


      })
      .catch(err => {
        console.error('Error on updating cart session', err)
      })
  }



  render() {
    const { loading, cart } = this.props.cartCStore
    const delevery_price = 2000
    const baseUrl = "https://google.com"
    const pagetitle = "Cart | Shop"
    const description = "Votre panier d'achat"
    const siteImage = "/static/images/logo.png"
    
    var cart_sub_total = this.props.cartCStore.cart_sub_total
    var cart_delivery_price = this.props.cartCStore.cart_delivery_price
    var cart_total = this.props.cartCStore.cart_total
    


    return (
      //<!-- Document Wrapper -->
      <div className="home">
        { loading ? ( 
            <div className='home-loading'>
              <div className='reverse-spinner'>
                <PulseLoader
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

        <div className="drawer_menu">
          <Drawer />
        </div>
    
        <section className="cart-wrapper">
          <div className="container">
            <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
              {/* Cart product list */}
              <div className="col-sm-8">
                <div className="row">
                  <h3 className="cart_main_title">Panier</h3>
                </div>

                <div className="row cart-header">
                  <div className="col-sm-2">
                    <h6 className="">Produit</h6>
                  </div>
                  <div className="col-sm-3">
                    <h6 className="">Description</h6>
                  </div>
                  <div className="col-sm-2">
                    <h6 className="">Taille</h6>
                  </div>
                  <div className="col-sm-2">
                    <h6 className="">Qté</h6>
                  </div>
                  <div className="col-sm-2">
                    <h6 className="">prix</h6>
                  </div>
                  <div className="col-sm-1"></div>
                </div>

                { !_.isEmpty(cart.cart_items) ? 
                  cart.cart_items
                    .map((val, key) => {
                      return (
                        <div className="row" key={key}>
                          {/* product picture box */}
                          <div className="col-4 col-sm-2 picture-box">
                            <div className="cart_item-img-wrapper">
                              <a href={`/shop/products/${val.slug}`} className="">
                                <img className="img-fluid" src={ val.pictures ? val.pictures[0] : null } />
                              </a>
                            </div>
                          </div>
                          <div className="col-8 col-sm-3 cart-description-text">
                            <h6 className="">
                              <a href={`/shop/products/${val.slug}`} className="">
                                { val.title }
                              </a>
                            </h6>
                            <p className="">{ val.color }</p>
                            <div className="cart-size-mobile">
                              <h6 className="">{ val.size }</h6>
                              <button
                                type="button" 
                                className="btn btn-outline-secondary btn-sm"
                                onClick={this._handleRemoveItem.bind(this, val.id)}
                              >
                                Retirer le produit
                              </button>
                            </div>
                          </div>
                          <div className="col-sm-2 cart-description-text-hide">
                            <h6 className="">{ val.size }</h6>
                          </div>
                          <div className="col-sm-2 cart-description-text-hide">
                            <h6 className="">{ val.selected_quantity }</h6>
                          </div>
                          <div className="col-sm-2 cart-description-text-hide">
                            <h6 className="">{ val.line_total } FCFA</h6>  
                          </div>
                          <div className="col-sm-1 delete-item">
                            <button
                              type="button" 
                              className="btn btn-link"
                              onClick={this._handleRemoveItem.bind(this, val.id)}
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </div>
                        </div>
                      )
                    }) : 
                    <h5 className="text-center" style={{ padding: 20 }}>Votre panier est encore vide</h5>
                }

              </div>

              {/* Bill Price informations and checkout way details */}
              <div className="col-sm-4">
                <div className="row">
                  <div className="checkout-button">
                    <a
                      href={`${urls.CHECKOUT}`}
                      className="btn btn-secondary"
                    >
                      Procéder au payment
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="bill-info-wrapper">
                    <div className="bill-info">
                      <h5 className="">Sommaire</h5>
                      <br />
                      <div className="total-group">
                        <div className="row">
                          <div className="col-6 col-sm-6"><h6 className="">Sous total</h6></div>
                          <div className="col-6 col-sm-6"><p className="">{ cart_sub_total } FCFA</p></div>
                        </div>
                        <div className="row">
                          <div className="col-6 col-sm-6"><h6 className="">Livraison</h6></div>
                          <div className="col-6 col-sm-6"><p className="">{ cart_sub_total == 0 ? 0 : cart_delivery_price } FCFA</p></div>
                        </div>
                      </div>
                      <div className="row line-total">
                        <div className="col-6 col-sm-6"><h5 className="">Montant Total</h5></div>
                        <div className="col-6 col-sm-6"><h5 className="price-total">{ cart_sub_total == 0 ? 0 : cart_total } FCFA</h5></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="checkout-button">
                    <a
                      href="#"
                      className="btn btn-secondary"
                    >
                      Commander en tant box
                    </a>
                  </div>
                </div>

                <br />
                
                <div className="row">
                  <div className="checkout-button continue_shop">
                    <a 
                      href={`${urls.HOME}`}
                      className="btn btn-outline-secondary"
                    >
                      Continuer vos achats
                    </a>
                  </div>
                </div>
                


              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}
