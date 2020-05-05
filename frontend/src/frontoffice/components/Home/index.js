import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"


import './style.local.css';



@connect((state, props) => ({}))
class Home extends React.Component {
  componentWillMount() {
    document.title = 'Home'
  }


  render() {
    const { t, i18n } = this.props
    console.log("PROPPPPPPPPPPPPPPPPPP", this.props)

    return (
      //<!-- Document Wrapper -->
      <div className="home">
        <Navbar />
        
        <h1>{t('title', 'I say hein')}</h1>
        <h1>Hello world!</h1>

      </div>
    );
  }
}

export default withTranslation()(Home);
