import React from "react";
import { connect } from "react-redux";
import {Helmet} from "react-helmet";
import { PulseLoader } from 'react-spinners';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Drawer from "app-js/frontoffice/components/Snippets/Drawer/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"

import { editorialCStoreActions } from './store'

import './style.local.css';

export default
@connect((state, props) => ({
    editorialCStore: state.editorialCStore
}))
class Editorial extends React.Component {

  componentDidMount(){
    // this._fetchProducts()
  }

  _fetchProducts(){
    // this.props.dispatch(homeCStoreActions.setLoading(true))

    // window.axios
    // .get(`/apis/products/`)
    // .then(response => {
    //   var products = response.data 
      
    //   this.props.dispatch(homeCStoreActions.setLoading(false))
    //   this.props.dispatch(homeCStoreActions.setProducts(products))
    // })
    // .catch(
    //   error => {
    //     console.error("Errrorr", error)
    //     this.props.dispatch(homeCStoreActions.setLoading(false))
    //   }  
    // )
  }

  render() {
    const { loading } = this.props.editorialCStore

    const baseUrl = "https://google.com"
    const pagetitle = "Editorial | Shop"
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

        </section>
        
        <Footer />
      </div>
    );
  }
}
