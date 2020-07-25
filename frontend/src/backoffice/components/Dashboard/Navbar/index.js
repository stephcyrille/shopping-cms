import React from "react";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import styles from "./styles.local.scss";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import { Link } from "react-router-dom";

export default
@connect((state, props) => ({
}))
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.shoppingCms = "Shopping CMS"
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  _handleLogout = () => {}

  _goToHome = () => {
    // window.location.href = url2.HOME;
  };



  render() {
    const username = "Stephcyrille"

    return (
      <div className={styles.nav_bar}>
        <Navbar light expand="md">
          <div className="d-flex align-items-center">
            <span
              className={`fas fa-bars ${styles.awesome}`}
              onClick={() => this.props.openSideBar()}
            />
            <NavbarBrand>
              <span className={styles.nav_bar_title}>
                {this.shoppingCms}
              </span>
            </NavbarBrand>
          </div>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="d-flex align-items-center">
                
              </NavItem>

              <div
                className={`d-flex align-items-center ${styles.collapse_wrapper}`}
              >
                <UncontrolledDropdown nav inNavbar>
                  <DropdownMenu className={styles.dropdown_wrapper} right>
                    {/*<Link to={url.LOGIN} className={styles.menu_item}>
                      {"username"}
                    </Link>*/}
                    <a
                      className={styles.menu_item}
                      onClick={this._goToHome.bind(this)}
                    >
                      Voir le site
                    </a>
                    {/* <Link to={url.RESET_PASSWORD} className={styles.menu_item}> 
                    </Link> */}
                    <a
                      className={styles.menu_item}
                      onClick={this._handleLogout.bind(this)}
                    >
                      Deconnexion
                    </a>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
