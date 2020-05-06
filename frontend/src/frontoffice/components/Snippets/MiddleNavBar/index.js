import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import './style.local.css';



@connect((state, props) => ({}))
class MiddleNavbar extends React.Component {


  render() {

    return (
      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-4 clearfix">
              <div className="logo pull-left">
                <a href="index.html"><img src="/static/images/logo.png" alt="" /></a>
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
                  <li><a href=""><i className="fa fa-user"></i> Account</a></li>
                  <li><a href=""><i className="fa fa-star"></i> Wishlist</a></li>
                  <li><a href="checkout.html"><i className="fa fa-crosshairs"></i> Checkout</a></li>
                  <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> Cart</a></li>
                  <li><a href="login.html"><i className="fa fa-lock"></i> Login</a></li>
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
