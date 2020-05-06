import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import HomeCarousel from "app-js/frontoffice/components/Snippets/HomeCarousel/index"
import CategoryLeftMenu from "app-js/frontoffice/components/Snippets/CategoryLeftMenu/index"


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

        <CategoryLeftMenu />
      </div>
    );
  }
}
