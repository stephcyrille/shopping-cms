import React from "react";
import { Switch, Route } from "react-router-dom";
// import URL constants
import urls from "./urls";

// Components importation
import AllCatalog from "app-js/backoffice/components/Catalog/All/index.js";
import AllCategory from "app-js/backoffice/components/Category/All/index.js";
import AllGroup from "app-js/backoffice/components/Group/All/index.js";
import AllSize from "app-js/backoffice/components/Size/All/index.js";
import AllColor from "app-js/backoffice/components/Color/All/index.js";
import AllProduct from "app-js/backoffice/components/Product/All/index.js";
import AddProduct from "app-js/backoffice/components/Product/Add/index.js";
import AddArticle from "app-js/backoffice/components/Article/Add/index.js";
import AllArticle from "app-js/backoffice/components/Article/All/index.js";
import AllMenuPicture from "app-js/backoffice/components/MainMenuPic/All";
import AddMenuPicture from "app-js/backoffice/components/MainMenuPic/Add";
import SEO from "app-js/backoffice/components/SEO";
import HomeBanner from "app-js/backoffice/components/HomeBanner/All";

const Routes = props => {
  const { path } = props;
 
  console.log("Routes Path props", path);
  
  return (
    <div id="dashboard-route">
      <Switch>
        <Route path={`${path}${urls.CATALOG}`} component={AllCatalog} />
        <Route path={`${path}${urls.CATEGORY}`} component={AllCategory} />
        <Route path={`${path}${urls.GROUP}`} component={AllGroup} />
        <Route path={`${path}${urls.SIZE}`} component={AllSize} />
        <Route path={`${path}${urls.COLOR}`} component={AllColor} />
        <Route path={`${path}${urls.PRODUCT}`} component={AllProduct} />
        <Route path={`${path}${urls.ADDPRODUCT}`} component={AddProduct} />
        <Route path={`${path}${urls.ARTICLE}`} component={AllArticle} />
        <Route path={`${path}${urls.ADDARTICLE}`} component={AddArticle} />
        <Route path={`${path}${urls.MAINMENUPIC}`} component={AllMenuPicture} />
        <Route path={`${path}${urls.ADDMAINMENUPIC}`} component={AddMenuPicture} />
        <Route path={`${path}${urls.SEO}`} component={SEO} />
        <Route path={`${path}${urls.HOMEBANNER}`} component={HomeBanner} />
      </Switch>
    </div>
  );
};

export default Routes;
