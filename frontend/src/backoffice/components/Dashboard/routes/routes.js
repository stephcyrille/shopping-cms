import React from "react";
import { Switch, Route } from "react-router-dom";
// import URL constants
import urls from "./urls";

// Components importation
import AllCatalog from "app-js/backoffice/components/Catalog/All";
import AddCatalog from "app-js/backoffice/components/Catalog/Add";
import AllCategory from "app-js/backoffice/components/Category/All";
import AddCategory from "app-js/backoffice/components/Category/Add";
import AllGroup from "app-js/backoffice/components/Group/All";
import AllSize from "app-js/backoffice/components/Size/All";
import AllColor from "app-js/backoffice/components/Color/All";
import AddColor from "app-js/backoffice/components/Color/Add";
import AllProduct from "app-js/backoffice/components/Product/All";
import AddProduct from "app-js/backoffice/components/Product/Add";
import AddArticle from "app-js/backoffice/components/Article/Add";
import AllArticle from "app-js/backoffice/components/Article/All";
import AllMenuPicture from "app-js/backoffice/components/MainMenuPic/All";
import AddMenuPicture from "app-js/backoffice/components/MainMenuPic/Add";
import SEO from "app-js/backoffice/components/SEO/All";
import AddSEO from "app-js/backoffice/components/SEO/Add";
import HomeBanner from "app-js/backoffice/components/HomeBanner/All";
import AddHomeBanner from "app-js/backoffice/components/HomeBanner/Add";

const Routes = props => {
  const { path } = props;
 
  console.log("Routes Path props", path);
  
  return (
    <div id="dashboard-route">
      <Switch>
        <Route path={`${path}${urls.CATALOG}`} component={AllCatalog} />
        <Route path={`${path}${urls.ADDCATALOG}`} component={AddCatalog} />
        <Route path={`${path}${urls.CATEGORY}`} component={AllCategory} />
        <Route path={`${path}${urls.ADDCATEGORY}`} component={AddCategory} />
        <Route path={`${path}${urls.GROUP}`} component={AllGroup} />
        <Route path={`${path}${urls.SIZE}`} component={AllSize} />
        <Route path={`${path}${urls.COLOR}`} component={AllColor} />
        <Route path={`${path}${urls.ADDCOLOR}`} component={AddColor} />
        <Route path={`${path}${urls.PRODUCT}`} component={AllProduct} />
        <Route path={`${path}${urls.ADDPRODUCT}`} component={AddProduct} />
        <Route path={`${path}${urls.ARTICLE}`} component={AllArticle} />
        <Route path={`${path}${urls.ADDARTICLE}`} component={AddArticle} />
        <Route path={`${path}${urls.MAINMENUPIC}`} component={AllMenuPicture} />
        <Route path={`${path}${urls.ADDMAINMENUPIC}`} component={AddMenuPicture} />
        <Route path={`${path}${urls.SEO}`} component={SEO} />
        <Route path={`${path}${urls.ADDSEO}`} component={AddSEO} />
        <Route path={`${path}${urls.HOMEBANNER}`} component={HomeBanner} />
        <Route path={`${path}${urls.ADDHOMEBANNER}`} component={AddHomeBanner} />
      </Switch>
    </div>
  );
};

export default Routes;
