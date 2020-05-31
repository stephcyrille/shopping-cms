import React from "react";
import { connect } from "react-redux";

import TopNavbar from '../TopNavBar/index';
import MiddleNavbar from '../MiddleNavBar/index';
import HomeMenu from '../HomeMenu/index';
import MegaNavbar from '../MegaNavBar/index';
import './style.local.css';


export default
@connect((state, props) => ({}))
class Navbar extends React.Component {


  render() {

    return (
      <header id="header">
        { this.props.topNav? <TopNavbar /> : null }
        { this.props.middleNav? <MiddleNavbar showNav={this.props.middleRightShow} /> : null }
        { this.props.megaNav? <MegaNavbar /> : null }
        {/* <HomeMenu /> */}
      </header>
    )
  }
}
