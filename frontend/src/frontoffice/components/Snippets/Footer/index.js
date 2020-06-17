import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import './style.local.css';



@connect((state, props) => ({}))
class Footer extends React.Component {

  render() {
    return (
      <footer id="footer">
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-sm-2 footer_item_one">
                <div className="single-widget">
                  <h2>Service</h2>
                  <ul className="nav nav-pills nav-stacked custom">
                    <li><a href="#">Online Help</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Change Location</a></li>
                    <li><a href="#">FAQ’s</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 footer_item">
                <div className="single-widget">
                  <h2>Quock Shop</h2>
                  <ul className="nav nav-pills nav-stacked custom">
                    <li><a href="#">T-Shirt</a></li>
                    <li><a href="#">Mens</a></li>
                    <li><a href="#">Womens</a></li>
                    <li><a href="#">Gift Cards</a></li>
                    <li><a href="#">Shoes</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 footer_item">
                <div className="single-widget">
                  <h2>Policies</h2>
                  <ul className="nav nav-pills nav-stacked custom">
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privecy Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Billing System</a></li>
                    <li><a href="#">Ticket System</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 footer_item">
                <div className="single-widget">
                  <h2>About Shopper</h2>
                  <ul className="nav nav-pills nav-stacked custom">
                    <li><a href="#">Company Information</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Store Location</a></li>
                    <li><a href="#">Affillate Program</a></li>
                    <li><a href="#">Copyright</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 offset-sm-1 footer_item">
                <div className="single-widget">
                  <h2>About Shopper</h2>
                  <form action="#" className="searchform">
                    <input type="text" placeholder="Your email address" />
                    <button type="submit" className="btn btn-default"><i className="fas fa-paper-plane"></i></button>
                    <p>Get the most recent updates from <br />our site and be updated your self...</p>
                  </form>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p>Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>
              </div>
              <div className="col-sm-6">
                <p className="design">Designed by <span><a target="_blank" href="http://www.#.com">#</a></span></p>
              </div>
            </div>
          </div>
        </div>
        
      </footer>
      
    );
  }
}

export default withTranslation()(Footer);
