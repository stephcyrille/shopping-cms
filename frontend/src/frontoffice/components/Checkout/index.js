import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";
import { PulseLoader } from 'react-spinners';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"
import StepComponent from './Stepper/index'

import './style.local.css';
import { getSession } from '../../utils/session_utils'



export default
@withTranslation()
@connect((state, props) => ({
    checkoutCStore: state.checkoutCStore,
}))
class Checkout extends React.Component {

  componentDidMount(){
    var cart_id = getSession().cart_id
  }



  render() {
    const { loading } = this.props.checkoutCStore
    const baseUrl = "https://google.com"
    const pagetitle = "Checkout | Shop"
    const description = "Commande d'achat"
    const siteImage = "/static/images/logo.png"
    
    


    return (
      //<!-- Document Wrapper -->
      <div className="home">
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

        <Navbar topNav={true} middleNav={true} middleRightShow={true} />
            
        <div>
          <StepComponent />
        </div>
        
        <div style={{ backgroundColor: "grey" }}>
        </div>
        
        <Footer />
      </div>
    );
  }
}
