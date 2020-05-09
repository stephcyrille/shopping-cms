import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"

import Footer from "app-js/frontoffice/components/Snippets/Footer/index"


import './style.local.css';

export default
@withTranslation()
@connect((state, props) => ({}))
class SingleProduct extends React.Component {
  UNSAFE_componentWillMount() {
    const { t, i18n } = this.props
    document.title = t('single product', 'Single Product')
  }


  render() {
    const { t, i18n } = this.props
    console.log("PROPPPPPPPPPPPPPPPPPP", this.props)

    return (
      //<!-- Document Wrapper -->
      <div className="home">
        <Navbar />

        
        <Footer />
      </div>
    );
  }
}
