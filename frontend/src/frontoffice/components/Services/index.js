import React from "react";
import { connect } from "react-redux";
import {Helmet} from "react-helmet";
import { PulseLoader } from 'react-spinners';
import _ from "underscore";

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Drawer from "app-js/frontoffice/components/Snippets/Drawer/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"
import MyBox from "./MyBox"

// import appConfig from '../../config/index'



export default
@connect((state, props) => ({
}))
class Service extends React.Component {

  constructor(props){
    super(props)
  }


  render() {
    // const { loading } = this.props.homeCStore
    // Mock loading, it's set to false by default. So no explicit ation trigered
    const loading = false

    const baseUrl = window.location.pathname
    const pagetitle = "OH! My Box | Shop"
    const description = "Ma description du site"
    const siteImage = "/static/images/logo.png"

    return (
      //<!-- Document Wrapper -->
      <div className="">
        { loading ? ( 
            <div className='home-loading'>
              <div className='reverse-spinner'>
                <PulseLoader
                  color={'#FE980F'} 
                  loading={loading} 
                />
              </div>
            </div>)
          : ''
        }
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
        
        <div className="drawer_menu">
          <Drawer />
        </div>
        
        <section>
            <MyBox />
        </section>
        
        <Footer />
      </div>
    );
  }
}
