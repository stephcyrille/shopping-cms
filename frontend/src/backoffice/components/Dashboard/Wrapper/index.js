import React from "react";
import { connect } from "react-redux";
import Sidebar from "../SideBar";
import NavBar from "../Navbar";
import IsMobile from "./utils/isMobile";
import { NavLink } from "react-router-dom";
import Routes from "../routes/routes";
import urls from "../routes/urls";
import styles from "./styles.local.scss";
import CSSModules from "react-css-modules";

import _ from "underscore";
import { Collapse } from "antd";
import "antd/dist/antd.css";


import { dashboardWrapperCStoreActions } from './store'
const { Panel } = Collapse;



export default
@connect((state, props) => ({
  dashboardWrapperCStore: state.dashboardWrapperCStore
}))
@CSSModules(styles, { allowMultiple: true })
class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    //dispatch wether it is mobile or wide screen
    this.props.dispatch(
      dashboardWrapperCStoreActions.setSidebarOpen(!IsMobile())
    );
  }


  onSetSidebarOpen = () => {
    //close and open side bar according to the value of sidebarOpen
    const sidebarOpen = !this.props.dashboardWrapperCStore.sidebarOpen;
    this.props.dispatch(
      dashboardWrapperCStoreActions.setSidebarOpen(sidebarOpen)
    );
  };

  /**
   *  Definit si le menu est visible cote admin
   **/

  isAdminVisible = () => {};

  callback = key => {
    console.log(key);
  };

  render() {
    const { path } = this.props;
    const {
      sidebarOpen,
    } = this.props.dashboardWrapperCStore;
    

    return (
      <div className={styles.side_bar}>
        {/* ref: https://github.com/balloob/react-sidebar */}
        <Sidebar
          sidebar={
            <div className={styles.content}>
              <div className={styles.menu_header}>
                <img
                  className="logo logo-dark"
                  src="/static/images/logo.jpg"
                  alt="Logo Shopping CMS"
                />
              </div>
              
              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.CATALOG}`}
                className={styles.menu_item}
              >
                {'Catalogues'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>
              
              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.CATEGORY}`}
                className={styles.menu_item}
              >
                {'Categories'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>

              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.GROUP}`}
                className={styles.menu_item}
              >
                {'Type de produit'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>
              
              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.COLLECTION}`}
                className={styles.menu_item}
              >
                {'Collection'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>
             
              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.SIZE}`}
                className={styles.menu_item}
              >
                {'Tailles'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>
             
              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.COLOR}`}
                className={styles.menu_item}
              >
                {'Couleurs'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>
              
              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.PRODUCT}`}
                className={styles.menu_item}
              >
                {'Produits'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>
              
              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.ARTICLE}`}
                className={styles.menu_item}
              >
                {'Articles magazine'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>
              
              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.MAINMENUPIC}`}
                className={styles.menu_item}
              >
                {'Photos mega menu'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>

              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.SEO}`}
                className={styles.menu_item}
              >
                {"SEO"}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>

              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.HOMEBANNER}`}
                className={styles.menu_item}
              >
                {"Bannière"}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>
            </div>
          }
          open={sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{
            sidebar: {
              background: "white",
              width: "33vh"
            }
          }}
          shadow={true}
          transitions={true}
          touch={true}
          touchHandleWidth={50}
          dragToggleDistance={20}
          docked={IsMobile() ? false : sidebarOpen}
        >
          {/*Nav Bar */}
          <NavBar openSideBar={() => this.onSetSidebarOpen()} />
          {/*DashBoard item contain */}
          <div styleName={"dashboard_contain"} style={{ padding: 20 }}>
            <Routes path={path} />
          </div>
        </Sidebar>
      </div>
    );
  }
}
