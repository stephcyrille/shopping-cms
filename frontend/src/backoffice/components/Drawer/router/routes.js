import React from "react";
import { Switch, Route } from "react-router-dom";
// import URl constants
import urls from "./urls";

import AllCatalog from "app-js/backoffice/components/Catalog/AllCatalog/index.js";


const Routes = props => {
  const { path } = props;
  console.log('Path from props', path, `${path}${urls.CATALOG}` )

  return (
    <div id="dashboard-route">
      <Switch>
        {/* add component of the dashborad route */}
        <Route path={`${path}${urls.CATALOG}`} component={AllCatalog} />

      </Switch>
    </div>
  );
};

export default Routes;
