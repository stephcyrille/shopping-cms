import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import './style.local.css';



@connect((state, props) => ({}))
class MegaNavbar extends React.Component {


  render() {

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div className="container">
            {/* <div className="navbar-brand"><a id="pramuimge-logo" title="Pramukh IME" href="https://www.pramukhime.com"><img src="https://www.pramukhime.com/wp-content/uploads/images/pramukhime-logo.png" alt="Pramukh IME home page"/></a></div> */}
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#main-nav-1" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="navbar-collapse collapse" id="main-nav-1">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown position-static"><a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">{ 'A la une' }</a>
                        <div className="dropdown-menu w-100 top-auto">
                            <div className="container">
                                <div className="row w-100">
                                    <div className="text-center col-sm-4">
                                        <h3 className="border border-top-0 border-right-0 border-left-0">For Individuals</h3>
                                        <a href="https://www.pramukhime.com/windows-application" className="dropdown-item">Windows Application</a>
                                        <a title="Windows Application" href="https://www.pramukhime.com/windows-application" className="dropdown-item">Windows Application</a>
                                        <a title="Android App" href="https://www.pramukhime.com/android-app" className="dropdown-item">Android App</a>
                                        <a title="FireFox Extension" href="https://www.pramukhime.com/firefox-extension" className="dropdown-item">FireFox Extension</a>
                                    </div>
                                    <div className="text-center col-sm-4">
                                        <h3 className="border border-top-0 border-right-0 border-left-0">For Website Owners</h3>
                                        <a title="WordPress Plugin" href="https://www.pramukhime.com/wordpress-plugin" className="dropdown-item">WordPress Plugin</a>
                                        <a title="Drupal Module" href="https://www.pramukhime.com/drupal-module" className="dropdown-item">Drupal Module</a>
                                        <a title="Joomla Extension" href="https://www.pramukhime.com/joomla-extension" className="dropdown-item">Joomla Extension</a>
                                    </div>
                                    <div className="text-center col-sm-4">
                                        <h3 className="border border-top-0 border-right-0 border-left-0">For Developers</h3>
                                        <a title="JavaScript Library" href="https://www.pramukhime.com/javascript-library" className="dropdown-item">JavaScript Library</a>
                                        <a title="TinyMCE Plugin" href="https://www.pramukhime.com/tinymce-plugin" className="dropdown-item">TinyMCE Plugin</a>
                                        <a title="CKEditor Plugin" href="https://www.pramukhime.com/ckeditor-plugin" className="dropdown-item">CKEditor Plugin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><a title={'Designers'} href="https://www.pramukhime.com/blog" className="nav-link">{'Designers'}</a>
                    </li>
                    <li className="nav-item"><a title={'Catalogue'} href="https://www.pramukhime.com/blog" className="nav-link">{'Catalogue'}</a>
                    </li>
                    <li className="nav-item"><a title={'Chaussures'} href="https://www.pramukhime.com/blog" className="nav-link">{'Chaussures'}</a>
                    </li>
                    <li className="nav-item"><a title={'Sacs'} href="https://www.pramukhime.com/blog" className="nav-link">{'Sacs'}</a>
                    </li>
                    <li className="nav-item"><a title={'Accessoires'} href="https://www.pramukhime.com/blog" className="nav-link">{'Accessoires'}</a>
                    </li>
                    <li className="nav-item"><a title={'Bijoux'} href="https://www.pramukhime.com/blog" className="nav-link">{'Bijoux'}</a>
                    </li>
                    <li className="nav-item"><a title={'Lingerie'} href="https://www.pramukhime.com/blog" className="nav-link">{'Lingerie'}</a>
                    </li>
                    <li className="nav-item"><a title={'Beauté'} href="https://www.pramukhime.com/blog" className="nav-link">{'Beauté'}</a>
                    </li>
                    <li className="nav-item"><a title={'Quoi porter'} href="https://www.pramukhime.com/blog" className="nav-link">{'Quoi porter'}</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item dropdown">
                        <a title="My Account" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link">My Account</a>
                        <ul className="dropdown-menu">
                            <li className="nav-item">
                                <a title="Login / Register" href="https://www.pramukhime.com/my-account" className="dropdown-item">Login / Register</a>
                            </li>
                            <li className="nav-item">
                                <a title="Account details" href="https://www.pramukhime.com/my-account/edit-account/" className="dropdown-item">Account details</a>
                            </li>
                            <li className="nav-item">
                                <a title="Orders" href="https://www.pramukhime.com/my-account/orders/" className="dropdown-item">Orders</a>
                            </li>
                        </ul>
                    </li> */}
                    <li className="nav-item">
                      <div className="search_box pull-right">
                        <input type="text" placeholder="Search"/>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}

export default withTranslation()(MegaNavbar);
