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
                {'Catalogue'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>
              
              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.CATEGORY}`}
                className={styles.menu_item}
              >
                {'Categorie'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>
             
              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.GROUP}`}
                className={styles.menu_item}
              >
                {'Groupe'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>
             
              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.SIZE}`}
                className={styles.menu_item}
              >
                {'Taille'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>
             
              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.COLOR}`}
                className={styles.menu_item}
              >
                {'Couleur'}
                <div className={styles.count_item}>
                  {0}
                </div>
              </NavLink>

              <Collapse onChange={this.callback} expandIconPosition={"right"}>
                <Panel
                  header={"Produits"}
                  key="1"
                >
                  <NavLink
                    activeClassName={styles.active}
                    to={`${path}${urls.PRODUCT}`}
                    className={styles.menu_item}
                  >
                    {"Tous"}
                  </NavLink>

                  <NavLink
                    activeClassName={styles.active}
                    to={`${path}${urls.ADDPRODUCT}`}
                    className={styles.menu_item}
                  >
                    {"Ajouter"}
                  </NavLink>
                </Panel>
              </Collapse>

              <Collapse onChange={this.callback} expandIconPosition={"right"}>
                <Panel
                  header={"Article"}
                  key="1"
                >
                  <NavLink
                    activeClassName={styles.active}
                    to={`${path}${urls.ARTICLE}`}
                    className={styles.menu_item}
                  >
                    {"Tous"}
                  </NavLink>

                  <NavLink
                    activeClassName={styles.active}
                    to={`${path}${urls.ADDARTICLE}`}
                    className={styles.menu_item}
                  >
                    {"Ajouter"}
                  </NavLink>
                </Panel>
              </Collapse>

              <Collapse onChange={this.callback} expandIconPosition={"right"}>
                <Panel
                  header={"Photos Menu"}
                  key="1"
                >
                  <NavLink
                    activeClassName={styles.active}
                    to={`${path}${urls.MAINMENUPIC}`}
                    className={styles.menu_item}
                  >
                    {"Tous"}
                  </NavLink>

                  <NavLink
                    activeClassName={styles.active}
                    to={`${path}${urls.ADDMAINMENUPIC}`}
                    className={styles.menu_item}
                  >
                    {"Ajouter"}
                  </NavLink>
                </Panel>
              </Collapse>

              <NavLink
                activeClassName={styles.active}
                to={`${path}${urls.SEO}`}
                className={styles.menu_item}
              >
                {"SEO"}
              </NavLink>

              <Collapse onChange={this.callback} expandIconPosition={"right"}>
                <Panel
                  header={"Banière accueil"}
                  key="1"
                >
                  <NavLink
                    activeClassName={styles.active}
                    to={`${path}${urls.HOMEBANNER}`}
                    className={styles.menu_item}
                  >
                    {"Tous"}
                  </NavLink>

                  {/* <NavLink
                    activeClassName={styles.active}
                    to={`${path}${urls.ADDMAINMENUPIC}`}
                    className={styles.menu_item}
                  >
                    {"Ajouter"}
                  </NavLink> */}
                </Panel>
              </Collapse>
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
