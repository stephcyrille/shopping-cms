import React from "react";
import { connect } from "react-redux";
import {Helmet} from "react-helmet";
import { withStyles } from '@material-ui/core/styles';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"

import appConfig from '../../../../config'
import urls from "../../../../routes/urls";


const useStyles = theme => ({
  root: {
    marginLeft: 0,
    marginRight: 0,
  }
});


export default
@connect((state, props) => ({
}))
@withStyles(useStyles)
class RegistrationSuccess extends React.Component {



  render(){
    
    const { classes } = this.props;
    const baseUrl = "https://afroyacadrum.cm"
    const pagetitle = "Registration successful | Shop"
    const description = "Ma description du site"
    const siteImage = "/static/images/logo.png"
    

  	return (
      <div className="">
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

        <Navbar topNav={true} middleNav={true} megaNav={true} middleRightShow={true} />

        {/* We need to clear nav history for unallowed user to back in registration form */}
        <div className="container mt-5 mb-5">
          <div className={classes.root}>
            <h3>Enregistrement éffectué avec succès !</h3>
            <p>
              Merci de vous être inscrit sur { appConfig.APPNAME }. Vous avez désormais accès à un espace membre reservé sur notre plateforme. Commencez par vous <a href={`${urls.LOGIN}`}>connecter ici</a> ou alors, <a href={`${urls.LOGIN}`}>revenir à l'accueil</a>.
            </p>
          </div>
        </div>

      <Footer />
    </div>
  	)
  }
}
