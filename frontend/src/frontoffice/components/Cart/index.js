import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import {Helmet} from "react-helmet";
// import { PulseLoader } from 'react-spinners';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"

// import { homeCStoreActions } from './store'
import './style.local.css';

export default
@withTranslation()
@connect((state, props) => ({
}))
class Cart extends React.Component {

  componentDidMount(){
    // this._fetchProducts()
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
    // const { loading } = this.props.homeCStore

    const baseUrl = "https://google.com"
    const pagetitle = "Cart | Shop"
    const description = "Votre panier d'achat"
    const siteImage = "/static/images/logo.png"

    return (
      //<!-- Document Wrapper -->
      <div className="home">
        {/* { loading ? ( 
            <div className='home-loading'>
              <div className='reverse-spinner'>
                <PulseLoader
                  color={'#FE980F'} 
                  loading={loading} 
                />
              </div>
            </div>)
          : ''
        } */}
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

        <Navbar />
    
        <section className="cart-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2">
              </div>
              {/* Cart product list */}
              <div className="col-sm-6">
                <div className="row cart-header">
                  <div className="col-sm-2">
                    <h6 className="">Produit</h6>
                  </div>
                  <div className="col-sm-3">
                    <h6 className="">Description</h6>
                  </div>
                  <div className="col-sm-2">
                    <h6 className="">Taille</h6>
                  </div>
                  <div className="col-sm-2">
                    <h6 className="">Qté</h6>
                  </div>
                  <div className="col-sm-2">
                    <h6 className="">prix</h6>
                  </div>
                  <div className="col-sm-1"></div>
                </div>
                <div className="row">
                  {/* product picture box */}
                  <div className="col-sm-2 picture-box">
                    <div className="img-wrapper">
                      <a href="#" className="">
                        <img className="img-fluid" src="/static/images/one.png" />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-3 cart-description-text">
                    <h6 className="">
                      <a href="#" className="">
                        Robe bleu d'été
                      </a>
                    </h6>
                    <p className="">Fuschia</p>
                  </div>
                  <div className="col-sm-2 cart-description-text">
                    <h6 className="">XS</h6>
                  </div>
                  <div className="col-sm-2 cart-description-text">
                    <h6 className="">3</h6>
                  </div>
                  <div className="col-sm-2 cart-description-text">
                    <h6 className="">8000 FCFA</h6>  
                  </div>
                  <div className="col-sm-1">
                    <a className="btn btn-link">
                      <i className="fa fa-times"></i>
                    </a>
                  </div>
                </div>

                <div className="row">
                  {/* product picture box */}
                  <div className="col-sm-2 picture-box">
                    <div className="img-wrapper">
                      <a href="#" className="">
                        <img className="img-fluid" src="/static/images/one.png" />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-3 cart-description-text">
                    <h6 className="">Robe bleu d'été</h6>
                    <p className="">Fuschia</p>
                  </div>
                  <div className="col-sm-2 cart-description-text">
                    <h6 className="">XS</h6>
                  </div>
                  <div className="col-sm-2"></div>
                  <div className="col-sm-2 cart-description-text">
                    <h6 className="">8000 FCFA</h6>  
                  </div>
                  <div className="col-sm-1">
                    <a className="btn btn-link">
                      <i className="fa fa-times"></i>
                    </a>
                  </div>
                </div>

              </div>

              {/* Bill Price informations and checkout way details */}
              <div className="col-sm-4"></div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}
