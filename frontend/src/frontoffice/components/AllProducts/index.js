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
import appConfig from '../../config/index'



export default
@connect((state, props) => ({
  allProductsCStore: state.allProductsCStore
}))
class AllProducts extends React.Component {

  componentDidMount(){
    const pathname =  this.props.location.pathname
    const path_values = pathname.split("/")
    const catalog = path_values[2]
    const category = path_values[3]

    const query =  this.props.location.search
    const query_values = query.split("?sort=")
    const query_string = query_values[1]

    const params = {
      catalog: catalog,
      category: category,
      queryString: query_string
    }

    this._fetchProducts(params)
  }

  _fetchProducts(params){
    this.props.dispatch(allProductsCStoreActions.setLoading(true))
    
    const service = `products/${params.catalog}/${params.category}${ params.queryString !== undefined ? `?sort=${params.queryString}` : `` }`
    const url = `${appConfig.LISTSBASEURL}${service}`

    window.axios
    .get(`${url}`)
    .then(response => {
      var products = response.data 
      
      this.props.dispatch(allProductsCStoreActions.setProducts(products))
      setTimeout(() => {
        this.props.dispatch(allProductsCStoreActions.setLoading(false))
      }, 2000);
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
    const pagetitle = "Tous les produits | Shop"
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
              {/* <CategoryLeftMenu /> */}
              <div className="col-sm-12 padding-right" style={{ marginBottom: 20 }}>
                <FeatureHome products={ products } />
                { products.length >= 9 && <PaginationButtons />}
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}
