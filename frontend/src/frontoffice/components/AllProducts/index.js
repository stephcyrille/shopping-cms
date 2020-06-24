import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { PulseLoader } from 'react-spinners';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"
import CategoryLeftMenu from "app-js/frontoffice/components/Snippets/CategoryLeftMenu/index"
import FeatureHome from "app-js/frontoffice/components/Snippets/FeatureHome/index"
import PaginationButtons from "app-js/frontoffice/components/Snippets/Pagination/index"

import { allProductsCStoreActions } from './store'

export default
@connect((state, props) => ({
  allProductsCStore: state.allProductsCStore
}))
class AllProducts extends React.Component {

  componentDidMount(){
    var url = this.props.match.url ? this.props.match.url : null
    if(url){
      var tab_values = url.split("/")
      var group_slug = tab_values[(tab_values.length - 1)]
    } 
    this._fetchProducts()
  }

  _fetchProducts(){
    this.props.dispatch(allProductsCStoreActions.setLoading(true))

    window.axios
    .get(`/apis/products/`)
    .then(response => {
      var products = response.data 
      
      this.props.dispatch(allProductsCStoreActions.setLoading(false))
      this.props.dispatch(allProductsCStoreActions.setProducts(products))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
        this.props.dispatch(allProductsCStoreActions.setLoading(false))
      }  
    )
  }

  render() {

    const baseUrl = "https://google.com"
    const pagetitle = "All products | Shop"
    const description = "Tous les produits"
    const siteImage = "/static/images/logo.png"

    const { products, loading } = this.props.allProductsCStore

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
        
        {/* <HomeCarousel /> */}

        <section style={{ paddingTop: 40 }}>
          <div className="container">
            <div className="row">
              {/* We will set categories of each group */}
              <CategoryLeftMenu />
              <div className="col-sm-9 padding-right">
                <FeatureHome products={ products } />
                <PaginationButtons />
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}
