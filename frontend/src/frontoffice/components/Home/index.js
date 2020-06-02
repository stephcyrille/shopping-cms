import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import {Helmet} from "react-helmet";
import { PulseLoader } from 'react-spinners';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import HomeCarousel from "app-js/frontoffice/components/Snippets/HomeCarousel/index"
import CategoryLeftMenu from "app-js/frontoffice/components/Snippets/CategoryLeftMenu/index"
import FeatureHome from "app-js/frontoffice/components/Snippets/FeatureHome/index"
import RecommendedItem from "app-js/frontoffice/components/Snippets/RecommendedItem/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"

import { homeCStoreActions } from './store'

import './style.local.css';

export default
@withTranslation()
@connect((state, props) => ({
  homeCStore: state.homeCStore
}))
class Home extends React.Component {

  componentDidMount(){
    this._fetchProducts()
  }

  _fetchProducts(){
    this.props.dispatch(homeCStoreActions.setLoading(true))

    window.axios
    .get(`/apis/products/`)
    .then(response => {
      var products = response.data 
      
      this.props.dispatch(homeCStoreActions.setLoading(false))
      this.props.dispatch(homeCStoreActions.setProducts(products))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
        this.props.dispatch(homeCStoreActions.setLoading(false))
      }  
    )
  }

  render() {
    const { t, i18n } = this.props
    const { products, loading } = this.props.homeCStore

    const baseUrl = "https://google.com"
    const pagetitle = "Home | Shop"
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
        
        <HomeCarousel />
        <section>
          <div className="container">
            <div className="row">
              <CategoryLeftMenu />
              <div className="col-sm-9 padding-right">
                <FeatureHome products={products} />
                <RecommendedItem />
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}
