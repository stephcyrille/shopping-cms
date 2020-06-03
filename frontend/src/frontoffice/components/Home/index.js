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
        
        <section>
          <div className="container">
            <div className="row">
              {/* Main Banner home */}
              <a href="#" className='home_top_banner'> 
                <div
                  style={{ 
                      backgroundImage: `url('/static/images/banner4.jpg')`, 
                      width: '100%', 
                      height: '100%', 
                      backgroundSize: 'cover'
                  }}
                >
                  <div className="banner-wrapper">
                    <div className="row" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
                      <div className="col-sm-4" style={{ paddingLeft: 0, paddingRight: 0 }}></div>
                      <div className="col-sm-2" style={{ paddingLeft: 0, paddingRight: 0 }}></div>
                      <div className="col-sm-6 baner-text" style={{ paddingTop: 30, paddingRight: 20 }}>
                        <h4 className='display-4 baner-main-title'>Nouvelle collection Afro chic</h4>
                        <p className=''>
                          Explorer une collection au couleurs de l'été <br/>
                          tropical et d'ambiance festive
                        </p>
                        <span href="#" className="">
                          Découvrir maintenant
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="row">
              <div className="col-sm-6" style={{ paddingLeft: 0, paddingRight: 0 }}>
                {/* magazine cover */}
                <div className="row" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
                  <a href="#" className='home-cover-wrapper'> 
                    <div
                      style={{  
                        backgroundImage: `url('/static/images/cover1.jpg')`, 
                        width: '100%', 
                        height: "100%", 
                        backgroundSize: 'cover'
                      }}>
                    </div>
                  </a>
                </div>
                {/* magazine cover end */}

                {/* Next magazine cover row (two pics with legend) */}
                <h5 className='latest-articles-title'>Les nouveautés</h5>
                <div className="row latest-row" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
                  <div className="col-sm-6" style={{ paddingLeft: 0, paddingRight: 10 }}>
                    <a href="#" className='home-latest-wrapper'> 
                      <div
                          style={{  
                            backgroundImage: `url('/static/images/dress3.png')`, 
                            width: '100%', 
                            height: 400, 
                            backgroundSize: 'cover'
                          }}>
                        </div>
                        <div className="latest-legend display-4">
                          <h4 className='display-4'>Ensble débardeur</h4>
                          <p className=''>
                            Les plus belles robes de notre collection<br />
                            <span className="">
                              Regarder &amp; Acheter
                            </span>
                          </p>
                        </div>
                      </a>
                  </div>
                  <div className="col-sm-6" style={{ paddingLeft: 10, paddingRight: 0 }}>
                    <a href="#" className='home-latest-wrapper'> 
                      <div
                        style={{  
                          backgroundImage: `url('/static/images/dress2.png')`, 
                          width: '100%', 
                          height: 400, 
                          backgroundSize: 'cover'
                        }}>
                      </div>
                      <div className="latest-legend display-4">
                        <h4 className='display-4'>Mini Top</h4>
                        <p className=''>
                          Les plus belles robes de notre collection<br />
                          <span className="">
                            Regorder &amp; Acheter
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* End next magazine two pics */}
              </div>

              <div className="col-sm-6 home-right-side">
                <h5 className='what-to-buy-title'>Ce qu'il faut acheter</h5>
                {/* What to buy */}
                <div className="row" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
                  <a href="#" className='home-what-to-buy'> 
                    <div
                      style={{  
                        backgroundImage: `url('/static/images/dress1.jpg')`, 
                        width: '100%', 
                        height: 250, 
                        backgroundSize: 'cover'
                      }}>
                    </div>
                    <div className="what-to-buy-legend">
                      <h4 className=''>Robes élégantes</h4>
                      <p className=''>
                        Les plus belles robes de notre collection
                      </p>
                      <span href="#" className="">
                        Regorder le look
                      </span>
                    </div>
                  </a>
                </div>
                {/* what to buy end */}
                {/* What to buy */}
                <div className="row" style={{ marginLeft: 0, marginRight: 0, width: '100%', marginTop: 40, marginBottom: 30 }}>
                  <a href="#" className='home-what-to-buy'> 
                    <div
                      style={{  
                        backgroundImage: `url('/static/images/bag.jpg')`, 
                        width: '100%', 
                        height: 250, 
                        backgroundSize: 'cover'
                      }}>
                    </div>
                    <div className="what-to-buy-legend">
                      <h4 className=''>Sac à main fashion</h4>
                      <p className=''>
                        La collection des meilleurs sacs à main afro
                      </p>
                      <span href="#" className="">
                        Acheter maintenant
                      </span>
                    </div>
                  </a>
                </div>
                {/* what to buy end */}
                {/* What to buy */}
                <div className="row" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
                  <a href="#" className='home-what-to-buy'> 
                    <div
                      style={{  
                        backgroundImage: `url('/static/images/banner1.jpg')`, 
                        width: '100%', 
                        height: 250, 
                        backgroundSize: 'cover'
                      }}>
                    </div>
                    <div className="what-to-buy-legend">
                      <h4 className=''>Robes élégantes</h4>
                      <p className=''>
                        Les plus belles robes de notre collection
                      </p>
                      <span href="#" className="">
                        Regorder le look
                      </span>
                    </div>
                  </a>
                </div>
                {/* what to buy end */}
              </div>
            </div>

            {/* Jewelery, accessories and beauty tools */}
            <div className="row home-soft-category" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
              <div className="col-sm-4" style={{ paddingLeft: 0, paddingRight: 10 }}>
                <a href="#" className='home-latest-wrapper'> 
                  <div
                      style={{  
                        backgroundImage: `url('/static/images/beauty.jpg')`, 
                        width: '100%', 
                        height: 300, 
                        backgroundSize: 'cover'
                      }}>
                    </div>
                    <div className="latest-legend display-4">
                      <h4 className='display-4'>Produits de beauté</h4>
                      <p className=''>
                        Les plus belles robes de notre collection<br />
                        <span className="">
                          Acheter maintenant
                        </span>
                      </p>
                    </div>
                  </a>
              </div>
              <div className="col-sm-4" style={{ paddingLeft: 10, paddingRight: 10 }}>
                <a href="#" className='home-latest-wrapper'> 
                  <div
                    style={{  
                      backgroundImage: `url('/static/images/jewellery.jpg')`, 
                      width: '100%', 
                      height: 300, 
                      backgroundSize: 'cover'
                    }}>
                  </div>
                  <div className="latest-legend display-4">
                    <h4 className='display-4'>Bijoux de l'été</h4>
                    <p className=''>
                      Les plus belles robes de notre collection<br />
                      <span className="">
                        Acheter maintenant
                      </span>
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4" style={{ paddingLeft: 10, paddingRight: 0 }}>
                <a href="#" className='home-latest-wrapper'> 
                  <div
                      style={{  
                        backgroundImage: `url('/static/images/accessories.png')`, 
                        width: '100%', 
                        height: 300, 
                        backgroundSize: 'cover'
                      }}>
                    </div>
                    <div className="latest-legend display-4">
                      <h4 className='display-4'>Accéssoires pour vous</h4>
                      <p className=''>
                        Les plus belles robes de notre collection<br />
                        <span className="">
                          Acheter maintenant
                        </span>
                      </p>
                    </div>
                  </a>
              </div>
            </div>
            {/* End Jewelery, accessories and beauty tools */}
            <div className="row selling-showcase" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}></div>

          </div>
        </section>

        {/* <HomeCarousel />
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
        </section> */}
        
        <Footer />
      </div>
    );
  }
}
