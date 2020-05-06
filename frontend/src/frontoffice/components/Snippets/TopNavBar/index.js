import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import './style.local.css';



@connect((state, props) => ({}))
class TopNavbar extends React.Component {


  render() {

    return (
      <div className="header_top">
        <div className="container">
          <div className="row" style={{ marginLeft: "0px", marginRight: "0px" }}>
            <div className="col-sm-6">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li><a href="#"><i className="fa fa-phone"></i> +2 95 01 88 821</a></li>
                  <li><a href="#"><i className="fa fa-envelope"></i> info@domain.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="social-icons pull-right">
                <ul className="nav navbar-nav">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(TopNavbar);
