import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import urls from '../.././../routes/urls'
import './style.local.css';



@connect((state, props) => ({
  navBarCartCStore: state.navBarCartCStore,
}))
class MiddleNavbar extends React.Component {


  render() {
    const { item_quantity } = this.props.navBarCartCStore
    

    return (
      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-4 clearfix">
              <div className="logo pull-left">
                <a href={`${urls.HOME}`}><img src="/static/images/logo.png" alt="" /></a>
              </div>
              <div className="btn-group pull-right clearfix">
                <div className="btn-group">
                  <button type="button" className="btn btn-outline-secondary dropdown-toggle usa" data-toggle="dropdown">
                    USA
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu middle-nav">
                    <li><a href="">Canada</a></li>
                    <li><a href="">UK</a></li>
                  </ul>
                </div>
                
                <div className="btn-group">
                  <button type="button" className="btn btn-outline-secondary dropdown-toggle usa" data-toggle="dropdown">
                    DOLLAR
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu middle-nav">
                    <li><a href="">Canadian Dollar</a></li>
                    <li><a href="">Pound</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8 clearfix shop-menu-clear">
              <div className="shop-menu clearfix pull-right">
                <ul className="nav navbar-nav">
                  <li><a href=""><i className="fa fa-star"></i> Wishlist</a></li>
                  {/* <li><a href="checkout.html"><i className="fa fa-crosshairs"></i> Checkout</a></li> */}
                  <li className="dropdown">
                    <a href="#" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" className="dropdown-toggle nav-link">
                      <i className="fa fa-shopping-cart"></i> <span className="badge badge-secondary">{item_quantity}</span> 
                    </a>
                    <div className="dropdown-menu cart-dropdown-wrapper" style={{ zIndex: "2000" }}>
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
                    </div>
                  </li>
                  {/* <li><a href="login.html"><i className="fa fa-lock"></i> Login</a></li> */}
                  <li><a href=""><i className="fa fa-user"></i> Profile</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(MiddleNavbar);
