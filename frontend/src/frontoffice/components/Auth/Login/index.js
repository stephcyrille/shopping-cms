import React from "react";
import { connect } from "react-redux";
import {Helmet} from "react-helmet";

import { withStyles } from '@material-ui/core/styles';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"
import LoginForm from "./LoginForm/index"

import './style.local.css'





export default
@connect((state, props) => ({}))
class LoginPage extends React.Component {


  render(){
    const baseUrl = "https://google.com"
    const pagetitle = "Login | Shop"
    const description = "Ma description du site"
    const siteImage = "/static/images/logo.png"
    

  	return (
  		<div className="">
  			<Helmet>
            <meta charSet="utf-8" />
            <title>{pagetitle}</title>
            <link rel="canonical" href={baseUrl} />
            <meta property="og:url" content={baseUrl} />
            {/* <meta property="og:type" content={props.type} /> */}
            <meta property="og:title" content={pagetitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={siteImage} />
        </Helmet>

        <Navbar topNav={true} middleNav={true} megaNav={true} />

        <section className="">
          <LoginForm /> 
        </section>

        <Footer /> 
  		</div>
  	)
  }
}
