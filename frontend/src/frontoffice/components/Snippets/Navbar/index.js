import React from "react";
import { connect } from "react-redux";

import TopNavbar from '../TopNavBar/index';
import MiddleNavbar from '../MiddleNavBar/index';
import HomeMenu from '../HomeMenu/index';
import './style.local.css';


export default
@connect((state, props) => ({}))
class Navbar extends React.Component {


  render() {
    var appName = "My App"

    return (
      <header id="header">
        <TopNavbar />
        <MiddleNavbar />
        <HomeMenu />
      </header>
    )
  }
}
