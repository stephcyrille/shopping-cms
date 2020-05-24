import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";
import { PulseLoader } from 'react-spinners';
import _ from "underscore";

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"

import { cartCStoreActions } from './store'
import './style.local.css';
import { getSession } from '../../utils/session_utils'



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
    })
    .catch(
      error => {
        console.error("Errrorr", error)
        this.props.dispatch(cartCStoreActions.setLoading(false))
      }  
    )
  }


  _handleRemoveItem(id){
    console.log('Remove cart item with id', id)
  }



  render() {
    const { loading, cart } = this.props.cartCStore
    const delevery_price = 2000
    const baseUrl = "https://google.com"
    const pagetitle = "Cart | Shop"
    const description = "Votre panier d'achat"
    const siteImage = "/static/images/logo.png"

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

        <Navbar />
    
        <section className="cart-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2">
              </div>
              {/* Cart product list */}
              <div className="col-sm-6">
                <div className="row">
                  <h3 className="" style={{ textTransform: 'uppercase', paddingBottom: '20px' }}>Panier</h3>
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
                          <div className="col-sm-2 picture-box">
                            <div className="cart_item-img-wrapper">
                              <a href={`/shop/products/${val.slug}`} className="">
                                <img className="img-fluid" src={ val.pictures ? val.pictures[0] : null } />
                              </a>
                            </div>
                          </div>
                          <div className="col-sm-3 cart-description-text">
                            <h6 className="">
                              <a href={`/shop/products/${val.slug}`} className="">
                                { val.title }
                              </a>
                            </h6>
                            <p className="">{ val.color }</p>
                          </div>
                          <div className="col-sm-2 cart-description-text">
                            <h6 className="">{ val.size }</h6>
                          </div>
                          <div className="col-sm-2 cart-description-text">
                            <h6 className="">{ val.selected_quantity }</h6>
                          </div>
                          <div className="col-sm-2 cart-description-text">
                            <h6 className="">{ val.line_total } FCFA</h6>  
                          </div>
                          <div className="col-sm-1">
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
                    }) : null
                }

              </div>

              {/* Bill Price informations and checkout way details */}
              <div className="col-sm-4">
                <div className="row">
                  <div className="checkout-button">
                    <a
                      href="#"
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
                          <div className="col-sm-6"><h6 className="">Sous total</h6></div>
                          <div className="col-sm-6"><p className="">{ cart ? cart.cart_price : 0 } FCFA</p></div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6"><h6 className="">Livraison</h6></div>
                          <div className="col-sm-6"><p className="">{ delevery_price } FCFA</p></div>
                        </div>
                      </div>
                      <div className="row line-total">
                        <div className="col-sm-6"><h5 className="">Montant Total</h5></div>
                        <div className="col-sm-6"><h5 className="price-total">{ cart ? cart.cart_price + delevery_price : 0 }</h5></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="checkout-button">
                    <a 
                      href="#"
                      className="btn btn-outline-secondary"
                    >
                      Continuer vos achats
                    </a>
                  </div>
                </div>
                
                <br />

                <div className="row">
                  <div className="checkout-button">
                    <a
                      href="#"
                      className="btn btn-secondary"
                    >
                      Procéder au payment
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
