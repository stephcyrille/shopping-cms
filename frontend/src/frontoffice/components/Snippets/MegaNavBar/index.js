import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import './style.local.css';
import urls from "../../../routes/urls";



@connect((state, props) => ({}))
class MegaNavbar extends React.Component {


  render() {

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
                  <a href={`${urls.NEWS_PRODUCTS}`} title="Nouveautés" className="nav-link dropdown-toggle">Nouveautés
                  </a>
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
                          <h4 className="">Tendence actuelle</h4>
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
                <li className="nav-item dropdown position-static"><a href={`${urls.CLOTHING}`} title="Vêtements" className="nav-link dropdown-toggle">Vêtements</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100 designers">
                        <div className="col-sm-3">
                          <h4 className="">Filtrer par</h4>
                          <a title="Mois" href="#" className="dropdown-item">Mois</a>
                          <a title="Weekend" href="#" className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href="#" className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                          <a title="Pour enfants" href="#" className="dropdown-item">Pour enfants</a>
                        </div>
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-6">
                              <h4 className="">Vêtements</h4>
                              <ul className="feature_designer">
                                <li>
                                  <a href="">
                                    Tous les vêtements
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Robes
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Jupes
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Tailleurs
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Debardeurs
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Jackettes
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Jeans
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Leggings
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Shorts
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Combi
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Sweat
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Vestes
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Pull over
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
                  <a title="Chaussures" href={`${urls.SHOE}`} className="nav-link dropdown-toggle">Chaussures</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100 designers">
                        <div className="col-sm-3">
                          <h4 className="">Filtrer par</h4>
                          <a title="Nouveautés" href="#" className="dropdown-item">Nouveautés</a>
                          <a title="tendance" href="#" className="dropdown-item">Tendence</a>
                          <a title="Essentiel" href="#" className="dropdown-item">Essentiel</a>
                          <a title="Mariage" href="#" className="dropdown-item">Mariage</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                        </div>
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-6">
                              <h4 className="">Chaussures</h4>
                              <ul className="feature_designer">
                                <li>
                                  <a href="">
                                    Toutes les Chaussures
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Bottes
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Escarpins
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Ballerines
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Espadrilles
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Chaussures ouvertes
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Sandales
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Pied nues
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Baskettes
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
                <li className="nav-item dropdown position-static"><a href={`${urls.BAG}`} title="Sacs" className="nav-link dropdown-toggle">Sacs</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100 designers">
                        <div className="col-sm-3">
                          <h4 className="">Filtrer par</h4>
                          <a title="Nouveautés" href="#" className="dropdown-item">Nouveautés</a>
                          <a title="Classiques" href="#" className="dropdown-item">Classiques</a>
                          <a title="Mariage" href="#" className="dropdown-item">Mariage</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                          <a title="Sacs d'été" href="#" className="dropdown-item">Sacs d'été</a>
                        </div>
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-6">
                              <h4 className="">Sacs</h4>
                              <ul className="feature_designer">
                                <li>
                                  <a href="">
                                    Tous les sacs
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Sacs à dos
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Sac à main
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Sac de soirée
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Sac de sport 
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Sac de voyage
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Mini sacs
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Foure tou
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
                  <a title="Accessoires" href={`${urls.ACCESSORIE}`} className="nav-link dropdown-toggle">Accessoires</a>
                  <div className="dropdown-menu w-100 top-auto catalogue_menu">
                    <div className="container">
                      <div className="row w-100 designers">
                        <div className="col-sm-3">
                          <h4 className="">Filtrer par</h4>
                          <a title="Nouveautés" href="#" className="dropdown-item">Nouveautés</a>
                          <a title="Cartes cadeaux" href="#" className="dropdown-item">Cartes cadeaux</a>
                          <a title="Accéssoires d'été" href="#" className="dropdown-item">Accessoires d'été</a>
                        </div>
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-6">
                              <h4 className="">Accessoires</h4>
                              <ul className="feature_designer">
                                <li>
                                  <a href="">
                                    Tous les accessoires
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Coliers
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Bijoux stylés
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Chapeaux
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Bandanas
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Lunettes de soleil
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Porte feuille
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Technologie
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Gants
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    Sacoches
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
                <li className="nav-item dropdown position-static"><a title="Bijoux" href={`${urls.JEWELLRIE}`} className="nav-link dropdown-toggle">Bijoux</a>
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
                <li className="nav-item dropdown position-static"><a title="Lingerie" href={`${urls.LINGERIE}`} className="nav-link dropdown-toggle">Lingerie</a>
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
                <li className="nav-item dropdown position-static"><a title="Beauté" href={`${urls.BEAUTY}`} className="nav-link dropdown-toggle">Beauté</a>
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

export default withTranslation()(MegaNavbar);
