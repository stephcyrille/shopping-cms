import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import HomeCarousel from "app-js/frontoffice/components/Snippets/HomeCarousel/index"
import CategoryLeftMenu from "app-js/frontoffice/components/Snippets/CategoryLeftMenu/index"
import FeatureHome from "app-js/frontoffice/components/Snippets/FeatureHome/index"
import RecommendedItem from "app-js/frontoffice/components/Snippets/RecommendedItem/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"


import './style.local.css';

export default
@withTranslation()
@connect((state, props) => ({}))
class Home extends React.Component {
  UNSAFE_componentWillMount() {
    const { t, i18n } = this.props
    document.title = t('home', 'Home')
  }


  render() {
    const { t, i18n } = this.props
    console.log("PROPPPPPPPPPPPPPPPPPP", this.props)

    return (
      //<!-- Document Wrapper -->
      <div className="home">
        <Navbar />
        <HomeCarousel />
        <section>
          <div className="container">
            <div className="row">
              <CategoryLeftMenu />
              <div className="col-sm-9 padding-right">
                <FeatureHome />
                <RecommendedItem />
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}
