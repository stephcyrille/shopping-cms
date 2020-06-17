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
        <nav className="navbar navbar-expand-md shadow-sm navbar-dark bg-dark sticky-top">
          <div className="container">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#main-nav-1" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="main-nav-1">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a title="A la une" href={`${urls.HOME}`} className="nav-link">A la une</a>
                </li>
                <li className="nav-item">
                  <a title="A la une" href={`${urls.ALL_PRODUCT}`} className="nav-link">Tous les produits</a>
                </li>
                <li className="nav-item dropdown position-static"><a href="#" title="Catalogues" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">Catalogues</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-2">
                          <h3 className="">Parcourir par</h3>
                          <a title="Mois" href="#" className="dropdown-item">Mois</a>
                          <a title="Weekend" href="#" className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href="#" className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                        </div>
                        {/* <div className="text-center col-sm-10">
                          <h3 className="">Autres actualités</h3>
                          <a title="Conférence" href="#" className="dropdown-item">Conférence</a>
                          <a title="Interviews" href="#" className="dropdown-item">Interviews</a>
                          <a title="Evenements" href="#" className="dropdown-item">Evenements</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static"><a href="#" title="Designers" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">Designers</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-2">
                          <h3 className="">Parcourir par</h3>
                          <a title="Mois" href="#" className="dropdown-item">Mois</a>
                          <a title="Weekend" href="#" className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href="#" className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                        </div>
                        {/* <div className="text-center col-sm-10">
                          <h3 className="">Autres actualités</h3>
                          <a title="Conférence" href="#" className="dropdown-item">Conférence</a>
                          <a title="Interviews" href="#" className="dropdown-item">Interviews</a>
                          <a title="Evenements" href="#" className="dropdown-item">Evenements</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  <a title="Chaussures" href="#" className="nav-link dropdown-toggle">Chaussures</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-2">
                          <h3 className="">Parcourir par</h3>
                          <a title="Mois" href="#" className="dropdown-item">Mois</a>
                          <a title="Weekend" href="#" className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href="#" className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                        </div>
                        {/* <div className="text-center col-sm-10">
                          <h3 className="">Autres actualités</h3>
                          <a title="Conférence" href="#" className="dropdown-item">Conférence</a>
                          <a title="Interviews" href="#" className="dropdown-item">Interviews</a>
                          <a title="Evenements" href="#" className="dropdown-item">Evenements</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static"><a href="#" title="Sacs" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">Sacs</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-2">
                          <h3 className="">Parcourir par</h3>
                          <a title="Mois" href="#" className="dropdown-item">Mois</a>
                          <a title="Weekend" href="#" className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href="#" className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                        </div>
                        {/* <div className="text-center col-sm-10">
                          <h3 className="">Autres actualités</h3>
                          <a title="Conférence" href="#" className="dropdown-item">Conférence</a>
                          <a title="Interviews" href="#" className="dropdown-item">Interviews</a>
                          <a title="Evenements" href="#" className="dropdown-item">Evenements</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  <a title="Accessoires" href="#" className="nav-link dropdown-toggle">Accessoires</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-2">
                          <h3 className="">Parcourir par</h3>
                          <a title="Mois" href="#" className="dropdown-item">Mois</a>
                          <a title="Weekend" href="#" className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href="#" className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                        </div>
                        {/* <div className="text-center col-sm-10">
                          <h3 className="">Autres actualités</h3>
                          <a title="Conférence" href="#" className="dropdown-item">Conférence</a>
                          <a title="Interviews" href="#" className="dropdown-item">Interviews</a>
                          <a title="Evenements" href="#" className="dropdown-item">Evenements</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static"><a title="Bijoux" href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">Bijoux</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-2">
                          <h3 className="">Parcourir par</h3>
                          <a title="Mois" href="#" className="dropdown-item">Mois</a>
                          <a title="Weekend" href="#" className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href="#" className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                        </div>
                        {/* <div className="text-center col-sm-10">
                          <h3 className="">Autres actualités</h3>
                          <a title="Conférence" href="#" className="dropdown-item">Conférence</a>
                          <a title="Interviews" href="#" className="dropdown-item">Interviews</a>
                          <a title="Evenements" href="#" className="dropdown-item">Evenements</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static"><a title="Lingerie" href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">Lingerie</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-2">
                          <h3 className="">Parcourir par</h3>
                          <a title="Mois" href="#" className="dropdown-item">Mois</a>
                          <a title="Weekend" href="#" className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href="#" className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                        </div>
                        {/* <div className="text-center col-sm-10">
                          <h3 className="">Autres actualités</h3>
                          <a title="Conférence" href="#" className="dropdown-item">Conférence</a>
                          <a title="Interviews" href="#" className="dropdown-item">Interviews</a>
                          <a title="Evenements" href="#" className="dropdown-item">Evenements</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static"><a title="Beauté" href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">Beauté</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-2">
                          <h3 className="">Parcourir par</h3>
                          <a title="Mois" href="#" className="dropdown-item">Mois</a>
                          <a title="Weekend" href="#" className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href="#" className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                        </div>
                        {/* <div className="text-center col-sm-10">
                          <h3 className="">Autres actualités</h3>
                          <a title="Conférence" href="#" className="dropdown-item">Conférence</a>
                          <a title="Interviews" href="#" className="dropdown-item">Interviews</a>
                          <a title="Evenements" href="#" className="dropdown-item">Evenements</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static"><a title="A porter" href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">A porter</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="col-sm-2">
                          <h3 className="">Parcourir par</h3>
                          <a title="Mois" href="#" className="dropdown-item">Mois</a>
                          <a title="Weekend" href="#" className="dropdown-item">Weekend</a>
                          <a title="Articles d'été" href="#" className="dropdown-item">Articles d'été</a>
                          <a title="Meilleures ventes" href="#" className="dropdown-item">Meilleures ventes</a>
                        </div>
                        {/* <div className="text-center col-sm-10">
                          <h3 className="">Autres actualités</h3>
                          <a title="Conférence" href="#" className="dropdown-item">Conférence</a>
                          <a title="Interviews" href="#" className="dropdown-item">Interviews</a>
                          <a title="Evenements" href="#" className="dropdown-item">Evenements</a>
                        </div> */}
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
