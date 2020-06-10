import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import urls from '../.././../routes/urls'
import './style.local.css';
import { getSession } from '../../../utils/session_utils'
import { navBarCartCStoreActions } from './store'



@connect((state, props) => ({
  navBarCartCStore: state.navBarCartCStore,
}))
class MiddleNavbar extends React.Component {
  componentWillMount(){
    if(getSession()){
      this.update_cart_session(getSession().cart_id)
    }
  }


  update_cart_session(cart_id) {
    window.axios
    .get(`/apis/core/session/carts/update/${cart_id}/`)
      .then(response => {
        console.log('Upadting session cart', response.data)
        var products = response.data.products
        var total_items = response.data.cart_quantity
        
        this.props.dispatch(navBarCartCStoreActions.setItem(total_items))
      })
      .catch(err => {
        console.error('Error on updating cart session', err)
      })
  }


  render() {
    const { item_quantity } = this.props.navBarCartCStore
    

    return (
      <div className="header-middle">
        <div className="container">
          <div className="row" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className="col-md-4 clearfix">
              <div className="logo pull-left">
                <a href={`${urls.HOME}`}><img className="img-fluid" width="120px" src="/static/images/logo.jpg" alt="" /></a>
              </div>
              <div className="btn-group pull-right clearfix">
                {/* <div className="btn-group">
                  <button type="button" className="btn btn-outline-secondary dropdown-toggle usa" data-toggle="dropdown">
                    USA
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu middle-nav">
                    <li><a href="">Canada</a></li>
                    <li><a href="">UK</a></li>
                  </ul>
                </div> */}
                
                {/* <div className="btn-group">
                  <button type="button" className="btn btn-outline-secondary dropdown-toggle usa" data-toggle="dropdown">
                    DOLLAR
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu middle-nav">
                    <li><a href="">Canadian Dollar</a></li>
                    <li><a href="">Pound</a></li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="open_day_wrapper">
                <span className="open_day_title">Heures d'ouverture</span> <br />
                <span className="open_day">Lundi à Vendredi: 8h - 20h</span> <br />
                <span className="open_day">Samedi: 8h - 20h</span> <br />
              </div>
            </div>
            <div className="col-md-4 clearfix shop-menu-clear">
            { !this.props.showNav ?
              (<div className="shop-menu clearfix pull-right">
                <ul className="nav navbar-nav">
                  <li><a href=""><i className="far fa-heart fa-2x"></i> <span className="heart-custom-badge badge badge-secondary">{0}</span></a></li>
                  {/* <li><a href="checkout.html"><i className="fa fa-crosshairs"></i> Checkout</a></li> */}
                  <li className="dropdown">
                    <a href={`${urls.CART}`} className="nav-link">
                    {/* <a href="#" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" className="dropdown-toggle nav-link"> */}
                      <i className="fa fa-shopping-cart fa-2x"></i> <span className="custom-badge badge badge-secondary">{item_quantity}</span> 
                    </a>
                    {/* <div className="dropdown-menu cart-dropdown-wrapper" style={{ zIndex: "2000" }}>
                      <div class="table-responsive cart_info">
                        <table class="table table-condensed">
                          <thead>
                            <tr class="cart_menu">
                              <td class="image">Item</td>
                              <td class="description"></td>
                              <td class="price">Price</td>
                              <td class="quantity">Quantity</td>
                              <td class="total">Total</td>
                              <td></td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="cart_product">
                                <a href=""><img src="/static/images/pic.jpg" alt="" /></a>
                              </td>
                              <td class="cart_description">
                                <h4><a href="">Colorblock Scuba</a></h4>
                                <p>Web ID: 1089772</p>
                              </td>
                              <td class="cart_price">
                                <p>$59</p>
                              </td>
                              <td class="cart_quantity">
                                <div class="cart_quantity_button">
                                  <a class="cart_quantity_up" href=""> + </a>
                                  <input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2"/>
                                  <a class="cart_quantity_down" href=""> - </a>
                                </div>
                              </td>
                              <td class="cart_total">
                                <p class="cart_total_price">$59</p>
                              </td>
                              <td class="cart_delete">
                                <a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div> */}
                  </li>
                  {/* <li><a href="login.html"><i className="fa fa-lock"></i> Login</a></li> */}
                  <li><a href={`${urls.LOGIN}`}><i className="fa fa-user fa-2x"></i> </a></li>
                </ul>
              </div>):null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(MiddleNavbar);
