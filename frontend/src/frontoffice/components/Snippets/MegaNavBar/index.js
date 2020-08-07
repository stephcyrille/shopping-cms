import React from "react";
import { connect } from "react-redux";
import _ from "underscore";

import { megaMenuCStoreActions } from './store'
import urls from "../../../routes/urls";
import appConfig from '../../../config/index'
import './style.local.css';


export default
@connect((state, props) => ({
  megaMenuCStore: state.megaMenuCStore
}))
class MegaNavbar extends React.Component {

  componentWillMount(){
    this._fetchFeatureProducts()
    this._fetchNavBarPictures()
    this._fetchTypesByCategory('vetements', megaMenuCStoreActions.setClothTypes)
    this._fetchTypesByCategory('chaussures', megaMenuCStoreActions.setShoesTypes)
    this._fetchTypesByCategory('sacs', megaMenuCStoreActions.setBagTypes)
    this._fetchTypesByCategory('accessoires', megaMenuCStoreActions.setAccessoryTypes)
  }


  _fetchFeatureProducts(){
    
    const service = `products/${'femme'}/${'news-products'}`
    const url = `${appConfig.LISTSBASEURL}${service}`

    window.axios
    .get(`${url}`)
    .then(response => {
      var products = response.data 
      
      this.props.dispatch(megaMenuCStoreActions.setTrendingProducts(products))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
      }  
    )
  }

  _fetchNavBarPictures(){
    
    const service = `navbar/pictures`
    const url = `${appConfig.SINGLEBASEURL}${service}`

    window.axios
    .get(`${url}`)
    .then(response => {
      var result = response.data 
      
      this.props.dispatch(megaMenuCStoreActions.setNavPictures(result))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
      }  
    )
  }

  _fetchTypesByCategory(category, reducer){
    //  SQueleton of the service url 'type/${category}
    const service = `groups/${category}`
    const url = `${appConfig.LISTSBASEURL}${service}`

    window.axios
    .get(`${url}`)
    .then(response => {
      var result = response.data 
      this.props.dispatch(reducer(result))
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

    const { trending_product, nav_pictures, clothing_types, shoes_types, bags_types, accessories_types } = this.props.megaMenuCStore
    

    return (
      <div>
        <nav className="middle-nav navbar navbar-expand-md shadow-sm navbar-dark sticky-top">
          <div className="container">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#main-nav-1" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="main-nav-1">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a title="A la une" href={`${urls.HOME}`} className="nav-link">A la une</a>
                </li>
                <li className="nav-item dropdown position-static">
                  <a href={`/shop/${'femme'}/${'news-products'}`} title="Nouveautés" className="nav-link dropdown-toggle">Nouveautés
                  </a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-3">
                          <h3 className="">Parcourir par</h3>
                          <a title="Mois" href={`/shop/${'femme'}/${'trending'}?sort=${'month'}`}  className="dropdown-item">Mois</a>
                          <a title="Weekend" href={`/shop/${'femme'}/${'trending'}?sort=${'weekend'}`} className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href={`/shop/${'femme'}/${'trending'}?sort=${'summer_collection'}`} className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href={`/shop/${'femme'}/${'trending'}?sort=${'best_sales'}`} className="dropdown-item">Meilleures ventes</a>
                        </div>
                        <div className="col-sm-9 nav_tendencies">
                          <h4 className="maintitle_actual">Tendance actuelle</h4>
                          <div className="row">

                            { !_.isEmpty(trending_product) ? 
                              this.randomizeArray(trending_product).slice(0,4)
                                .map((val, key) => {
                                  return (
                                    <div className="col-sm-3" key={key}>
                                      <a href={`/shop/products/${val.slug}`} className="">
                                        <div className="img_wrapper">
                                          <img src={`${val.pictures[0]}`} className="nav_picture" />
                                        </div>
                                        <div className="img_legend">
                                          <h4 className="">{val.title}</h4>
                                            <span className="text_legend">
                                            {val.price} FCFA
                                            </span>
                                        </div>
                                      </a>
                                    </div>
                                  ) 
                                }) 
                              : 
                              null 
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  <a href={`/shop/${'femme'}/${'vetements'}`}  title="Vêtements" className="nav-link dropdown-toggle">
                    Vêtements
                  </a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100 designers">
                        <div className="col-sm-3">
                          <h4 className="">Filtrer par</h4>
                          <a title="Mois" href={`/shop/${'femme'}/${'vetements'}?sort=${'month'}`} className="dropdown-item">Mois</a>
                          <a title="Weekend" href={`/shop/${'femme'}/${'vetements'}?sort=${'weekend'}`} className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href={`/shop/${'femme'}/${'vetements'}?sort=${'ete'}`} className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href={`/shop/${'femme'}/${'vetements'}?sort=${'meilleures_ventes'}`} className="dropdown-item">Meilleures ventes</a>
                          <a title="Pour enfants" href={`/shop/${'enfant'}/${'vetements'}`} className="dropdown-item">Pour enfants</a>
                        </div>
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-6">
                              <h4 className="">Vêtements</h4>
                              <ul className="feature_designer">
                                <li>
                                  <a href={`/shop/${'femme'}/${'vetements'}`}>
                                    Tous les vêtements
                                  </a>
                                </li>
                                { !_.isEmpty(clothing_types) ? 
                                  clothing_types
                                    .map((val, key) => {
                                      return (
                                        <li key={key}>
                                          <a href={`/shop/${'femme'}/${'vetements'}?sort=${val.slug}`}>
                                            { val.title }
                                          </a>
                                        </li>
                                      )
                                    }) 
                                  : 
                                  null
                                }
                              </ul>
                            </div>
                            <div className="col-sm-6">
                              <a href="" className="">
                                <div className="designer_img_wrapper">
                                  <img src={`${ nav_pictures ? nav_pictures.clothing : null }`} className="designer_picture" />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  <a title="Chaussures" href={`/shop/${'femme'}/${'chaussures'}`} className="nav-link dropdown-toggle">Chaussures</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100 designers">
                        <div className="col-sm-3">
                          <h4 className="">Filtrer par</h4>
                          <a title="Nouveautés" href={`/shop/${'femme'}/${'chaussures'}?sort=nouveautes`} className="dropdown-item">Nouveautés</a>
                          <a title="tendance" href={`/shop/${'femme'}/${'chaussures'}?sort=tendances`} className="dropdown-item">Tendence</a>
                          <a title="Essentiel" href={`/shop/${'femme'}/${'chaussures'}?sort=essentiels`} className="dropdown-item">Essentiel</a>
                          <a title="Mariage" href={`/shop/${'femme'}/${'chaussures'}?sort=mariages`} className="dropdown-item">Mariage</a>
                          <a title="Meilleures ventes" href={`/shop/${'femme'}/${'chaussures'}?sort=meilleures_ventes`} className="dropdown-item">Meilleures ventes</a>
                        </div>
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-6">
                              <h4 className="">Chaussures</h4>
                              <ul className="feature_designer">
                                <li>
                                  <a href={`/shop/${'femme'}/${'chaussures'}`}>
                                    Toutes
                                  </a>
                                </li>
                                { !_.isEmpty(shoes_types) ? 
                                  shoes_types
                                    .map((val, key) => {
                                      return (
                                        <li key={key}>
                                          <a href={`/shop/${'femme'}/${'chaussures'}?sort=${val.slug}`}>
                                            { val.title }
                                          </a>
                                        </li>
                                      )
                                    }) 
                                  : 
                                  null
                                }
                              </ul>
                            </div>
                            <div className="col-sm-6">
                              <a href="" className="">
                                <div className="designer_img_wrapper">
                                  <img src={`${ nav_pictures ? nav_pictures.shoes : null }`} className="designer_picture" />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  <a href={`/shop/${'femme'}/${'sacs'}`} title="Sacs" className="nav-link dropdown-toggle">Sacs</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100 designers">
                        <div className="col-sm-3">
                          <h4 className="">Filtrer par</h4>
                          <a title="Nouveautés" href={`/shop/${'femme'}/${'sacs'}?sort=nouveautes`} className="dropdown-item">Nouveautés</a>
                          <a title="Classiques" href={`/shop/${'femme'}/${'sacs'}?sort=classiques`} className="dropdown-item">Classiques</a>
                          <a title="Meilleures ventes" href={`/shop/${'femme'}/${'sacs'}?sort=meilleures_ventes`} className="dropdown-item">Meilleures ventes</a>
                          <a title="Sacs d'été" href={`/shop/${'femme'}/${'sacs'}?sort=ete`} className="dropdown-item">Sacs d'été</a>
                        </div>
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-6">
                              <h4 className="">Sacs</h4>
                              <ul className="feature_designer">
                                <li>
                                  <a href={`/shop/${'femme'}/${'sacs'}`}>
                                    Tous
                                  </a>
                                </li>
                                { !_.isEmpty(bags_types) ? 
                                  bags_types
                                    .map((val, key) => {
                                      return (
                                        <li key={key}>
                                          <a href={`/shop/${'femme'}/${'sacs'}?sort=${val.slug}`}>
                                            { val.title }
                                          </a>
                                        </li>
                                      )
                                    }) 
                                  : 
                                  null
                                }
                              </ul>
                            </div>
                            <div className="col-sm-6">
                              <a href="" className="">
                                <div className="designer_img_wrapper">
                                  <img src={`${ nav_pictures ? nav_pictures.bag : null }`} className="designer_picture" />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  <a title="Accessoires" href={`/shop/${'femme'}/${'accessoires'}`} className="nav-link dropdown-toggle">Accessoires</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100 designers">
                        <div className="col-sm-3">
                          <h4 className="">Filtrer par</h4>
                          <a title="Nouveautés" href={`/shop/${'femme'}/${'accessoires'}?sort=nouveautes`} className="dropdown-item">Nouveautés</a>
                          <a title="Cartes cadeaux" href={`/shop/${'femme'}/${'accessoires'}?sort=cartes_cadeau`} className="dropdown-item">Cartes cadeaux</a>
                          <a title="Accéssoires d'été" href={`/shop/${'femme'}/${'accessoires'}?sort=ete`} className="dropdown-item">Accessoires d'été</a>
                        </div>
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-6">
                              <h4 className="">Accessoires</h4>
                              <ul className="feature_designer">
                                <li>
                                  <a href={`/shop/${'femme'}/${'accessoires'}`}>
                                    Tous
                                  </a>
                                </li>
                                { !_.isEmpty(accessories_types) ? 
                                  accessories_types
                                    .map((val, key) => {
                                      return (
                                        <li key={key}>
                                          <a href={`/shop/${'femme'}/${'accessoires'}?sort=${val.slug}`}>
                                            { val.title }
                                          </a>
                                        </li>
                                      )
                                    }) 
                                  : 
                                  null
                                }
                              </ul>
                            </div>
                            <div className="col-sm-6">
                              <a href="" className="">
                                <div className="designer_img_wrapper">
                                  <img src={`${ nav_pictures ? nav_pictures.accessory : null }`} className="designer_picture" />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  <a title="Bijoux" href={`/shop/${'femme'}/${'bijoux'}`} className="nav-link dropdown-toggle">Bijoux</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100 designers">
                        <div className="col-sm-3">
                          <h4 className="">Filtrer par</h4>
                          <a title="Nouveautés" href="#" className="dropdown-item">Nouveautés</a>
                          <a title="Excliusivités" href="#" className="dropdown-item">Exclusivités</a>
                          <a title="Bijoux Afro YACA" href="#" className="dropdown-item">Bijoux Afro YACA</a>
                          <a title="Bijoux d'évènements" href="#" className="dropdown-item">Bijoux d'évènement</a>
                          <a title="Bijoux du quotidien" href="#" className="dropdown-item">Bijoux du quotidien</a>
                          <a title="Cadeaux" href="#" className="dropdown-item">Cadeaux</a>
                        </div>
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-6">
                              <h4 className="">Bijoux</h4>
                              <ul className="feature_designer">
                                <li>
                                  <a href="">
                                    Tous les bijoux
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Bijoux rafinés
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Bijoux tendances
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Coliers
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Bracelets
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Montres
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Bagues
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-6">
                              <a href="" className="">
                                <div className="designer_img_wrapper">
                                  <img src="/static/images/jewellery.jpg" className="designer_picture" />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  <a title="Lingerie" href={`/shop/${'femme'}/${'lingeries'}`} className="nav-link dropdown-toggle">Lingerie</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100 designers">
                        <div className="col-sm-3">
                          <h4 className="">Filtrer par</h4>
                          <a title="Nouveautés" href="#" className="dropdown-item">Nouveautés</a>
                          <a title="Nouveaux designs AFRO YACA" href="#" className="dropdown-item">Nouveaux designs Afro YACA</a>
                          <a title="Solution lingerie" href="#" className="dropdown-item">Solution lingerie</a>
                          <a title="Lingerie AFRO YACA DDRUM" href="#" className="dropdown-item">Lingerie AFRO YACA DRUM</a>
                        </div>
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-6">
                              <h4 className="">Sacs</h4>
                              <ul className="feature_designer">
                                <li>
                                  <a href="">
                                    Tous lingéries
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Tenue de lounge
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Camisoles et chemisers
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Nuisettes
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-6">
                              <a href="" className="">
                                <div className="designer_img_wrapper">
                                  <img src="/static/images/jewellery.jpg" className="designer_picture" />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  <a title="Beauté" href={`/shop/${'femme'}/${'beautes'}`} className="nav-link dropdown-toggle">Beauté</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100 designers">
                        <div className="col-sm-3">
                          <h4 className="">Filtrer par</h4>
                          <a title="Nouveautés" href="#" className="dropdown-item">Nouveautés</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                          <a title="Lotions corporelle" href="#" className="dropdown-item">Lotion corporelle</a>
                          <a title="Soins à domicile" href="#" className="dropdown-item">Soins à domicile</a>
                          <a title="Produits néttoyants" href="#" className="dropdown-item">Produits néttoyants</a>
                        </div>
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-6">
                              <h4 className="">Beauté</h4>
                              <ul className="feature_designer">
                                <li>
                                  <a href="">
                                    Tous les produits beauté
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Toilette et beauté
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Collection de beauté
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Boujies
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Parfums
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Soins de cheveux
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Makeup
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Soin de peau
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Outils et appareils
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-6">
                              <a href="" className="">
                                <div className="designer_img_wrapper">
                                  <img src="/static/images/jewellery.jpg" className="designer_picture" />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static"><a title="Editorial" href={`${urls.EDITORIAL}`} className="nav-link dropdown-toggle">Editorial</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-2">
                          <h3 className="">Editorial AYD</h3>
                          <a title="Mois" href="#" className="dropdown-item">Nouveautés</a>
                          <a title="Tendance" href="#" className="dropdown-item">Tendance</a>
                          <a title="Beauté" href="#" className="dropdown-item">Beauté</a>
                          <a title="Afro YACA Drum" href="#" className="dropdown-item">Afro YACA Drum</a>
                          <a title="Grand titre" href="#" className="dropdown-item">Grand titre</a>
                          <a title="Femmes influentes" href="#" className="dropdown-item">Femmes influentes</a>
                          <a title="Mode de vie" href="#" className="dropdown-item">Mode de vie</a>
                          <a title="Video" href="#" className="dropdown-item">Video</a>
                        </div>
                        <div className="col-sm-3 nav_cover">
                          <h5 className="">A l'affiche</h5> 
                          <a href="" className="">
                            <div className="edito_img_wrapper">
                              <img src="/static/images/cover1.jpg" className="edito_picture" />
                            </div>
                            <div className="edito_img_legend">
                              <span className="text_legend">
                                Edition des femmes influentes
                              </span>
                              <br />
                              <span className="text_legend_date">
                                Juillet 2020
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-sm-4 nav_cover">
                          <h5 className="">Parue aujourd'hui</h5> 
                          <a href="">
                            <div className="row">
                              <div className="col-sm-5">
                                <div className="today_edito_img_wrapper_1">
                                  <img src="/static/images/cover2.jpg" className="today_edito_picture" />
                                </div>
                              </div>
                              <div className="col-sm-7">
                                <h6 className="today_post_title">Contenu exclusif à diffuser</h6> 
                                <p className="today_post_text">Détails du contenu exclusif à lire et a commenter encore et voila</p> 
                              </div>
                            </div>
                          </a>
                          <a href="">
                            <div className="row">
                              <div className="col-sm-5">
                                <div className="today_edito_img_wrapper">
                                  <img src="/static/images/cover3.jpg" className="today_edito_picture" />
                                </div>
                              </div>
                              <div className="col-sm-7">
                                <h6 className="today_post_title">Contenu exclusif à diffuser</h6> 
                                <p className="today_post_text">Détails du contenu exclusif à lire et a commenter encore et voila</p> 
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-sm-4">
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static"><a title="A porter" href={`${urls.TO_WARE}`} className="nav-link dropdown-toggle">A porter</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-3">
                          <h3 className="">Parcourir par</h3>
                          <a title="Mois" href="#" className="dropdown-item">Mois</a>
                          <a title="Weekend" href="#" className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href="#" className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                        </div>
                        <div className="col-sm-9 nav_tendencies">
                          <h4 className="">Ce qu'il faut porter aujourd'hui</h4>
                          <div className="row">
                            <div className="col-sm-3">
                              <a href="" className="">
                                <div className="img_wrapper">
                                  <img src="/static/images/dress2.png" className="nav_picture" />
                                </div>
                                <div className="img_legend">
                                  <h4 className="">Afro YACA DRUM</h4>
                                    <span className="text_legend">
                                      Robe tailleur Afrik
                                    </span>
                                </div>
                              </a>
                            </div>
                            <div className="col-sm-3">
                              <a href="" className="">
                                <div className="img_wrapper">
                                  <img src="/static/images/dress2.png" className="nav_picture" />
                                </div>
                                <div className="img_legend">
                                  <h4 className="">Afro YACA DRUM</h4>
                                    <span className="text_legend">
                                      Robe tailleur Afrik
                                    </span>
                                </div>
                              </a>
                            </div>
                            <div className="col-sm-3">
                              <a href="" className="">
                                <div className="img_wrapper">
                                  <img src="/static/images/dress2.png" className="nav_picture" />
                                </div>
                                <div className="img_legend">
                                  <h4 className="">Afro YACA DRUM</h4>
                                    <span className="text_legend">
                                      Robe tailleur Afrik
                                    </span>
                                </div>
                              </a>
                            </div>
                            <div className="col-sm-3">
                              <a href="" className="">
                                <div className="img_wrapper">
                                  <img src="/static/images/dress2.png" className="nav_picture" />
                                </div>
                                <div className="img_legend">
                                  <h4 className="">Afro YACA DRUM</h4>
                                    <span className="text_legend">
                                      Robe tailleur Afrik
                                    </span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown position-static"><a title="Editorial" href={`${urls.SERVICE}`} className="nav-link dropdown-toggle">Services</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-2">
                          <h3 className="">Nos services</h3>
                          <a title="Mois" href="#" className="dropdown-item">OH! My Box</a>
                          <a title="Tendance" href="#" className="dropdown-item">Service</a>
                        </div>
                        <div className="col-sm-3 nav_cover">
                        </div>
                        <div className="col-sm-4 nav_cover">
                        </div>
                        <div className="col-sm-4">
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
