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

import PersistentDrawer from "app-js/backoffice/components/Drawer/index.js";
import NotFound from "app-js/frontoffice/components/404/index"


@withRouter
class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path={urls.DASHBOARD} component={PersistentDrawer} />
        <Redirect to={urls.DASHBOARD} />
      </Switch>
    );
  }
}
export default Routes;