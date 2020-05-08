import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import './style.local.css';



@connect((state, props) => ({}))
class FeatureHome extends React.Component {

  render() {
    return (
      <div className="features_items">
        <h2 className="title text-center">Features Items</h2>
        <div className="row">
          <div className="col-sm-4">
            <div className="product-image-wrapper">
              <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="/static/images/product1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                  </div>
                  <div className="product-overlay">
                    <div className="overlay-content">
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                    </div>
                  </div>
              </div>
              <div className="choose">
                <ul className="nav nav-pills nav-justified">
                  <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart"></i></a></li>
                  <li><a href="#" data-toggle="tooltip" data-placement="top" title="compare with other product"><i className="fa fa-exchange-alt"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img src="/static/images/product2.jpg" alt="" />
                  <h2>$56</h2>
                  <p>Easy Polo Black Edition</p>
                  <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="choose">
                <ul className="nav nav-pills nav-justified">
                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                  <li><a href="#"><i className="fa fa-exchange-alt"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img src="/static/images/product3.jpg" alt="" />
                  <h2>$56</h2>
                  <p>Easy Polo Black Edition</p>
                  <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="choose">
                <ul className="nav nav-pills nav-justified">
                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                  <li><a href="#"><i className="fa fa-exchange-alt"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img src="/static/images/product4.jpg" alt="" />
                  <h2>$56</h2>
                  <p>Easy Polo Black Edition</p>
                  <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                  </div>
                </div>
                <img src="/static/images/new.png" className="new" alt="" />
              </div>
              <div className="choose">
                <ul className="nav nav-pills nav-justified">
                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                  <li><a href="#"><i className="fa fa-exchange-alt"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img src="/static/images/product5.jpg" alt="" />
                  <h2>$56</h2>
                  <p>Easy Polo Black Edition</p>
                  <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                  </div>
                </div>
                <img src="/static/images/sale.png" className="new" alt="" />
              </div>
              <div className="choose">
                <ul className="nav nav-pills nav-justified">
                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                  <li><a href="#"><i className="fa fa-exchange-alt"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img src="/static/images/product6.jpg" alt="" />
                  <h2>$56</h2>
                  <p>Easy Polo Black Edition</p>
                  <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="choose">
                <ul className="nav nav-pills nav-justified">
                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                  <li><a href="#"><i className="fa fa-exchange-alt"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(FeatureHome);
