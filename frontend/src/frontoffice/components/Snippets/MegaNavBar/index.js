import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import './style.local.css';



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
                <li className="nav-item"><a title="A la une" href="#" className="nav-link">A la une</a></li>
                <li className="nav-item dropdown position-static"><a href="#" title="Designers" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">Designers</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="text-center col-sm-4">
                          <h3 className="border border-top-0 border-right-0 border-left-0">Toute les actualités</h3>
                          <a title="Actualité 1" href="#" className="dropdown-item">Actualité 1</a>
                          <a title="Actualité 2" href="#" className="dropdown-item">Actualité 2</a>
                          <a title="Actualité 3" href="#" className="dropdown-item">Actualité 3</a>
                        </div>
                        <div className="text-center col-sm-4">
                          <h3 className="border border-top-0 border-right-0 border-left-0">Autres actualités</h3>
                          <a title="Conférence" href="#" className="dropdown-item">Conférence</a>
                          <a title="Interviews" href="#" className="dropdown-item">Interviews</a>
                          <a title="Evenements" href="#" className="dropdown-item">Evenements</a>
                        </div>
                        <div className="text-center col-sm-4">
                          <h3 className="border border-top-0 border-right-0 border-left-0">Calendrier</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static"><a href="#" title="Catalogues" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">Catalogues</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="text-center col-sm-2">
                          <a title="Bachelor" href="#" className="dropdown-item">Bachelor</a>
                        </div>
                        <div className="text-center col-sm-2">
                          <a title="Cycle Ingenieur" href="#" className="dropdown-item">Cycle Ingenieur</a>
                        </div>
                        <div className="text-center col-sm-2">
                          <a title="Science Ingenieur" href="#" className="dropdown-item">Science Ingenieur</a>
                        </div>
                        <div className="text-center col-sm-2">
                          <a title="Master" href="#" className="dropdown-item">Master</a>
                        </div>
                        <div className="text-center col-sm-2">
                          <a title="Doctorat" href="#" className="dropdown-item">Doctorat</a>
                        </div>
                        <div className="text-center col-sm-2">
                          <a title="Formation a Distance" href="#" className="dropdown-item">Formation a Distance</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item"><a title="Chaussures" href="#" className="nav-link">Chaussures</a></li>
                <li className="nav-item dropdown position-static"><a href="#" title="Sacs" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">Sacs</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="text-center col-sm-2">
                          <h3 className="border border-top-0 border-right-0 border-left-0">TTIC</h3>
                          <a title="G.RT" href="#" className="dropdown-item">G.RT</a>
                          <a title="G.I" href="#" className="dropdown-item">G.I</a>
                        </div>
                        <div className="text-center col-sm-2">
                          <h3 className="border border-top-0 border-right-0 border-left-0">ROI</h3>
                          <a title="Energie Ren..." href="#" className="dropdown-item">Energie Ren...</a>
                          <a title="Automatisation S" href="#" className="dropdown-item">Automatisation S</a>
                          <a title="Systém I..." href="#" className="dropdown-item">Systém I...</a>
                        </div>
                        <div className="text-center col-sm-2">
                          <h3 className="border border-top-0 border-right-0 border-left-0">GCI</h3>
                          <a title="Pont" href="#" className="dropdown-item">Pont</a>
                          <a title="Battiment" href="#" className="dropdown-item">Battiment</a>
                        </div>
                        <div className="text-center col-sm-2">
                          <h3 className="border border-top-0 border-right-0 border-left-0">TAU</h3>
                          <a title="Mecatronique" href="#" className="dropdown-item">Mecatronique</a>
                          <a title="Coque" href="#" className="dropdown-item">Coque</a>
                        </div>
                        <div className="text-center col-sm-2">
                          <h3 className="border border-top-0 border-right-0 border-left-0">TCI</h3>
                          <a title="Mecatronique" href="#" className="dropdown-item">Mecatronique</a>
                          <a title="Coque" href="#" className="dropdown-item">Coque</a>
                        </div>
                        <div className="text-center col-sm-2">
                          <h3 className="border border-top-0 border-right-0 border-left-0">QHSE</h3>
                          <a title="Mecatronique" href="#" className="dropdown-item">Mecatronique</a>
                          <a title="Coque" href="#" className="dropdown-item">Coque</a>
                        </div>
                        <div className="text-center col-sm-2">
                          <h3 className="border border-top-0 border-right-0 border-left-0">GC/PR</h3>
                          <a title="Mecatronique" href="#" className="dropdown-item">Mecatronique</a>
                          <a title="Coque" href="#" className="dropdown-item">Coque</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item"><a title="Accessoires" href="#" className="nav-link">Accessoires</a></li>
                <li className="nav-item dropdown position-static"><a title="Bijoux" href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">Bijoux</a>
                  <div className="dropdown-menu w-100 top-auto">
                    <div className="container">
                      <div className="row w-100">
                        <div className="text-center col-sm-4">
                          <a title="Mémoires" href="#" className="dropdown-item">Mémoires</a>
                        </div>
                        <div className="text-center col-sm-4">
                          <a title="Publications Chercheurs" href="#" className="dropdown-item">Publications Chercheurs</a>
                        </div>
                        <div className="text-center col-sm-4">
                          <a title="Notes et Pv" href="#" className="dropdown-item">Notes et Pv</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item"><a title="Lingerie" href="#" className="nav-link">Lingerie</a></li>
                <li className="nav-item"><a title="Beauté" href="#" className="nav-link">Beauté</a></li>
                <li className="nav-item"><a title="Quoi porter" href="#" className="nav-link">A porter</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withTranslation()(MegaNavbar);
