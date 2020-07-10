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
import LoginPage from "app-js/frontoffice/components/Auth/Login/index.js";
import RegistrationPage from "app-js/frontoffice/components/Auth/Registration/index";
import NotFound from "app-js/frontoffice/components/404/index"
import AllProducts from "app-js/frontoffice/components/AllProducts/index"
import Editorial from "app-js/frontoffice/components/Editorial/index"


@withRouter
class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path={urls.HOME} component={Home} />
        <Route path={urls.SINGLE_PRODUCT} component={SingleProduct} />
        <Route path={urls.EDITORIAL} component={Editorial} />
        
        <Route path={urls.CART} component={Cart} />
        <Route path={urls.CHECKOUT} component={Checkout} />
        <Route path={urls.REGISTRATION} component={RegistrationPage} />
        <Route path={urls.LOGIN} component={LoginPage} />

        <Route path={urls.NEWS_PRODUCTS} component={AllProducts} />
        <Route path={urls.DESIGNER} component={AllProducts} />
        <Route path={urls.CLOTHING} component={AllProducts} />
        <Route path={urls.SHOE} component={AllProducts} />
        <Route path={urls.BAG} component={AllProducts} />
        <Route path={urls.ACCESSORIE} component={AllProducts} />
        <Route path={urls.JEWELLRIE} component={AllProducts} />
        <Route path={urls.LINGERIE} component={AllProducts} />
        <Route path={urls.BEAUTY} component={AllProducts} />
        <Route path={urls.TO_WARE} component={AllProducts} />

        <Route path={urls.ALL_PRODUCT} component={AllProducts} />
        <Route path={urls.SERVICE} component={NotFound} />
        <Route path={urls.NOTFOUND} component={NotFound} />
        <Redirect to={urls.NOTFOUND} />
      </Switch>
    );
  }
}
export default Routes;