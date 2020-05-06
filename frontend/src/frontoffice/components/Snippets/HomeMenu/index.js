import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import './style.local.css';



@connect((state, props) => ({}))
class HomeMenu extends React.Component {


  render() {

    return (
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
            </div>
            <div className="col-sm-3">
              <div className="search_box pull-right">
                <input type="text" placeholder="Search"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(HomeMenu);
