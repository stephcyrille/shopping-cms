import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
//import url
import urls from "./urls";


import Home from "app-js/frontoffice/components/Home/index.js";
import SingleProduct from "app-js/frontoffice/components/SingleProduct/index.js";
import Cart from "app-js/frontoffice/components/Cart/index.js";
import Checkout from "app-js/frontoffice/components/Checkout/index.js";
import NotFound from "app-js/frontoffice/components/404/index"


@withRouter
class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path={urls.HOME} component={Home} />
        <Route exact path={urls.SINGLE_PRODUCT} component={SingleProduct} />
        <Route exact path={urls.CART} component={Cart} />
        <Route exact path={urls.CHECKOUT} component={Checkout} />
        <Route exact path={urls.NOTFOUND} component={NotFound} />
        <Redirect to={urls.NOTFOUND} />
      </Switch>
    );
  }
}
export default Routes;
