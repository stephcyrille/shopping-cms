import React from "react";
import { connect } from "react-redux";
import {Helmet} from "react-helmet";
import { PulseLoader } from 'react-spinners';
import _ from "underscore";

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import HorizontalScroll from "app-js/frontoffice/components/Snippets/HorizontalScroll/index"
import Drawer from "app-js/frontoffice/components/Snippets/Drawer/index"
import HomeBanner from "app-js/frontoffice/components/Snippets/Banner/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"

import { homeCStoreActions } from './store'
import appConfig from '../../config/index'
import './style.local.css';


export default
@connect((state, props) => ({
  homeCStore: state.homeCStore
}))
class Home extends React.Component {

  componentWillMount(){
    this.props.dispatch(homeCStoreActions.setLoading(true))

    this._fetchHomeBanner()
    this._fetchHomeCover()
    this._fetchHomeCategories()
    this._fetchFeatureProducts()
    this._fetchProductFlashSale()
    
    setTimeout(() => {
      this.props.dispatch(homeCStoreActions.setLoading(false))
    }, 2000);
  }

  _fetchHomeBanner(){    
    const service = `banner/home`
    const url = `${appConfig.SINGLEBASEURL}${service}`

    window.axios
    .get(`${url}`)
    .then(response => {
      var banner = response.data 
      this.props.dispatch(homeCStoreActions.setHomeBanner(banner))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
      }  
    )
  }

  _fetchHomeCover(){    
    const service = `cover/home`
    const url = `${appConfig.SINGLEBASEURL}${service}`

    window.axios
    .get(`${url}`)
    .then(response => {
      var cover = response.data 
      this.props.dispatch(homeCStoreActions.setHomeCover(cover))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
      }  
    )
  }

  _fetchFeatureProducts(){
    
    const service = `products/${'femme'}/${'news-products'}`
    const url = `${appConfig.LISTSBASEURL}${service}`

    window.axios
    .get(`${url}`)
    .then(response => {
      var products = response.data 
      
      this.props.dispatch(homeCStoreActions.setFeatureProducts(products))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
      }  
    )
  }

  _fetchHomeCategories(){    
    const service = `categories`
    const url = `${appConfig.LISTSBASEURL}${service}`

    window.axios
    .get(`${url}`)
    .then(response => {
      var categories = response.data 
      this.props.dispatch(homeCStoreActions.setHomeCategories(categories))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
      }  
    )
  }

  _fetchProductFlashSale(){    
    const service = `products/flash_sale`
    const url = `${appConfig.LISTSBASEURL}${service}`

    window.axios
    .get(`${url}`)
    .then(response => {
      var products = response.data 
      this.props.dispatch(homeCStoreActions.setProductFlashSale(products))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
      }  
    )
  }


  randomizeArray(items){
    var ctr = items.length, temp, index
    // While there are element in array
    while(ctr > 0) {
      //  Pick a random index
      index = Math.floor(Math.random() * ctr)
      // Decrease ctr by 1
      ctr--
      // And swap the last element with it
      temp = items[ctr]
      items[ctr] = items[index]
      items[index] = temp
    }
    
    return items
  }


  render() {
    const { loading, banner, cover, feature_products, categories, product_flash_sale } = this.props.homeCStore

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
        
        <div className="drawer_menu">
          <Drawer />
        </div>
        
        <section style={{ backgroundColor: "white" }}>
          <div className="container">
            {/* Main Banner home */}
            <HomeBanner banner={ banner } />

            <div className="row" style={{ marginTop: 20, }}>
              <div className="col-sm-6" style={{ paddingLeft: 0, paddingRight: 0 }}>
                {/* magazine cover */}
                <div className="row" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
                  <a href="#" className='home-cover-wrapper'> 
                    <div
                      style={{  
                        backgroundImage: `url(${cover ? `${cover.coverImage}` : null})`, 
                        width: '100%', 
                        height: "100%", 
                        backgroundSize: 'contain',
                        backgroundRepeat: "no-repeat",
                      }}>
                    </div>
                  </a>
                </div>
                {/* magazine cover end */}

                {/* Next magazine cover row (two pics with legend) */}
                <h5 className='latest-articles-title'>Les nouveautés</h5>
                <div className="row latest-row" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
                  { !_.isEmpty(feature_products) ? 
                    this.randomizeArray(feature_products).slice(0,2)
                      .map((val, key) => {
                        return (
                          <div className=" col-6" style={{ paddingLeft: 0, paddingRight: 10 }} key={key}>
                            <a href={`/shop/products/${val.slug}`} className='home-latest-wrapper'> 
                              <div
                                  style={{  
                                    backgroundImage: `url(${val.pictures[0]})`, 
                                    width: '100%', 
                                    height: 400, 
                                    backgroundSize: 'cover'
                                  }}>
                                </div>
                                <div className="latest-legend display-4">
                                  <h4 className='display-4'>{val.title}</h4>
                                  <p className=''>
                                    {/* {val.description}<br /> */}
                                    <span className="">
                                      Regarder &amp; Acheter
                                    </span>
                                  </p>
                                </div>
                              </a>
                          </div>
                        )
                      }) : null 
                  }
                </div>
                {/* End next magazine two pics */}
              </div>

              <div className="col-sm-6 home-right-side">
                <h5 className='what-to-buy-title'>Ce qu'il faut acheter</h5>
                {/* What to buy */}
                <div className="row" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
                  <a href={`/shop/${'femme'}/${'vetements'}?sort=${'robes'}`} className='home-what-to-buy'> 
                    <div
                      style={{  
                        backgroundImage: `url('/static/images/rob2.jpg')`, 
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
                      <span className="">
                        Regorder le look
                      </span>
                    </div>
                  </a>
                </div>
                {/* what to buy end */}
                {/* What to buy */}
                <div className="row" style={{ marginLeft: 0, marginRight: 0, width: '100%', marginTop: 40, marginBottom: 30 }}>
                  <a href={`/shop/${'femme'}/${'sacs'}?sort=${'luxe'}`} className='home-what-to-buy'> 
                    <div
                      style={{  
                        backgroundImage: `url('/static/images/sac.jpg')`, 
                        width: '100%', 
                        height: 250, 
                        backgroundSize: 'cover'
                      }}>
                    </div>
                    <div className="what-to-buy-legend">
                      <h4 className=''>Sac à main fashion</h4>
                      <p className=''>
                        La collection des meilleurs sacs à chics de luxe
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
                  <a href={`/shop/${'femme'}/${'accessoires'}?sort=${'afritude'}`} className='home-what-to-buy'> 
                    <div
                      style={{  
                        backgroundImage: `url('/static/images/acc.jpg')`, 
                        width: '100%', 
                        height: 250, 
                        backgroundSize: 'cover'
                      }}>
                    </div>
                    <div className="what-to-buy-legend">
                      <h4 className=''>Accéssoires de mode</h4>
                      <p className=''>
                        Les accessoires Afro et chics à porter de de main
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
            { !_.isEmpty(categories) ? 
                this.randomizeArray(categories).slice(0,3)
                  .map((val, key) => {
                    return (
                      <div className="col-sm-4 home_categorie" style={{ paddingLeft: 0, paddingRight: 10 }} key={key}>
                        <a href={`/shop/${'femme'}/${val.slug}`} className='home-latest-wrapper'> 
                          <div
                              style={{  
                                backgroundImage: `url(${val.picture})`, 
                                width: '100%', 
                                height: 300, 
                                backgroundSize: 'cover'
                              }}>
                            </div>
                            <div className="latest-legend display-4">
                              <h4 className='display-4'>{val.title}</h4>
                              <p className=''>
                                Les plus belles robes de notre collection<br />
                                <span className="">
                                  Acheter maintenant
                                </span>
                              </p>
                            </div>
                          </a>
                      </div>
                    )
                  }) 
                  : 
                  null
            }
            </div>
            {/* End Jewelery, accessories and beauty tools */}
            
            <div className="row selling-showcase" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
              <HorizontalScroll title={true} products={product_flash_sale} />
            </div>

          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}
