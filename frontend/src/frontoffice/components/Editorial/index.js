import React from "react";
import { connect } from "react-redux";
import {Helmet} from "react-helmet";
import { PulseLoader } from 'react-spinners';
import { withStyles } from '@material-ui/core/styles';
import CSSModules from "react-css-modules";

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Drawer from "app-js/frontoffice/components/Snippets/Drawer/index"
import HorizontalScroll from "app-js/frontoffice/components/Snippets/HorizontalScroll/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"

import { editorialCStoreActions } from './store'

import styles from './style.local.scss';
import transitions from "@material-ui/core/styles/transitions";


const useStyles = () => ({
  root: {
    backgroundColor: "#fff",
  },
  // GENERIC
  h4_article_title: {
    textTransform: "uppercase",
    fontWeight: 200,
    marginBottom: 10,
  },
  section: {
    marginBottom: 0,
  },
  editorial: {
    backgroundColor: "#fff",
    padding: "20px 20px",
    borderRadius: "10px",
  },
  paraf_edito: {
    fontSize: "1.025rem",
    fontWeight: 300,
    letterSpacing: "1.3px",
    textAlign: "justify",
  },
  cover_wrapper: {
    height: 400,
    width: "100%",
    backgroundImage: "url('/static/images/banner4.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  cover_text_wrapper: {
    margin: 0,
    position: "absolute",
    top: "2%",
    right: "13%",
    width: "100%",
  },
  edito_title: {
    marginBottom: 10,
  },
  guess: {
    paddingTop: 40,
  },
  guess_words: {
    fontSize: "1.25rem",
    fontWeight: 300,
    textAlign: "center",
    height: "440px",
    verticalAlign: "middle",
    display: "table-cell",
    lineHeight: "200%",
  },
  guess_pic: {
    height: 440,
    width: 350,
    float: "right",
    marginRight: 40,
    backgroundImage: "url('/static/images/opra.jpg')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  colored_bloc: {
    background: "rgb(4,0,36)",
    // background: "linear-gradient(0deg, rgba(4,0,36,1) 0%, rgba(138,186,230,1) 0%, rgba(138,211,230,1) 100%)",
    background: "linear-gradient(0deg, rgba(4,0,36,1) 0%, rgba(217,184,66,1) 0%, rgba(253,202,35,1) 100%)",
    // height: 400,
    marginTop: 40,
    padding: 20,
  },
  colored_title: {
    width: "100%",
    color: "#fff",
    fontSize: "2.5rem",
    margin: 0,
    textTransform: "uppercase",
  }, 
  colored_subtitle: {
    color: "#fff",
    width: "100%",
    fontSize: "1.2rem",
    marginBottom: 20,
    fontWeight: 400,
  },
  col_article: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  bloc_col_wrapper_1: {
    padding: "0 10px 0 10px"
  },
  bloc_col_wrapper_2: {
    padding: "40px 10px 0 10px"
  },
  bloc_col_wrapper_3: {
    padding: "80px 10px 0 10px"
  },
  img_container: {
    height: 400,
    width: "100%",
    backgroundImage: "url('/static/images/dress.jpg')",
    backgroundSize: "cover",
  },
  img_legend: {
    paddingTop: 20,
  },
  
  col_article_title: {
    textTransform: "uppercase",
    fontWeight: 200,
    marginBottom: 10,
  },
  
  col_article_description: {
    color: "black",
  },
  col_article_date: {
    color: "gray",
  },
  styled_left: {
    padding: 0,
    height: 450,
    width: "100%",
    backgroundImage: "url('/static/images/styled.jpeg')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  styled_right: {
    height: 350,
    marginTop: 50,
    marginLeft: -50,
    backgroundColor: "#fff",
    width: "100%",
    paddingTop: 20,
  },
  styled_shop_now: {
    position: "absolute",
    bottom: 0,
  },
  styled_button_shop_now: {
    "&:hover" : {
      borderBottom: "1px solid rgba(0,0,0,1)",
      transition: "ease-in",
      transitionDuration: "0.4s"
    },
    fontWeight: 400,
    paddingBottom: 5,
    color: "black",
    borderBottom: "1px solid rgba(0,0,0,0)",
    transition: "ease-in",
    transitionDuration: "0.4s"
  },
  dont_miss_color: {
    backgroundColor: "black",
    paddingTop: 40,
    paddingBottom: 40,
    marginTop: 40,
  },
  dont_miss_article_title: {
    textTransform: "uppercase",
    fontWeight: 200,
    marginBottom: 10,
    color: "white !important"
  },
  dont_miss_article_description: {
    color: "white",
  },
  dont_miss_article_date: {
    color: "white",
  },
  dont_miss_img_container: {
    height: 300,
    width: "100%",
    backgroundImage: "url('/static/images/styled.jpeg')",
    backgroundSize: "cover",
  },
});


export default
@connect((state, props) => ({
    editorialCStore: state.editorialCStore
}))
@withStyles(useStyles)
@CSSModules(styles, { allowMultiple: true })
class Editorial extends React.Component {

  componentDidMount(){
    // this._fetchProducts()
  }

  _fetchProducts(){
    // this.props.dispatch(homeCStoreActions.setLoading(true))

    // window.axios
    // .get(`/apis/products/`)
    // .then(response => {
    //   var products = response.data 
      
    //   this.props.dispatch(homeCStoreActions.setLoading(false))
    //   this.props.dispatch(homeCStoreActions.setProducts(products))
    // })
    // .catch(
    //   error => {
    //     console.error("Errrorr", error)
    //     this.props.dispatch(homeCStoreActions.setLoading(false))
    //   }  
    // )
  }

  render() {
    const { loading } = this.props.editorialCStore
    const { classes } = this.props;

    const baseUrl = "https://google.com"
    const pagetitle = "Editorial | Shop"
    const description = "Ma description du site"
    const siteImage = "/static/images/logo.png"

    return (
      //<!-- Document Wrapper -->
      <div className={ classes.root }>
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
        
        <section className={`${classes.section }`}>
          {/* FEATURE PICTURE */}
          <div className="row" style={{ margin: 0 }}>
            <div className={ classes.cover_wrapper }>
            </div>
            <div className={`row ${classes.cover_text_wrapper}`}>
              <div className={ `col-sm-8` } >
              </div>
              <div className={ `col-sm-4 ${classes.editorial}` } >
                <h1 className={`display-4 ${classes.edito_title}`}>A la une</h1>
                <p className={`lead ${classes.paraf_edito}`}>
                <i className="fas fa-quote-left"></i>&nbsp; Parce que chez Afro YACA Drum, on a toujours adoré les livres, découvrez régulièrement toutes nos sélections thématisées. Promis : tous les livres ont été lus et approuvés !&nbsp;<i className="fas fa-quote-right"></i></p> 
              </div>
            </div>
          </div>

          {/* BLOCK CONTAINER */}
          <div className="container">
            <div className={ `row ${classes.guess}` } style={{ margin: 0 }}>
              <div className={ `col-sm-6 ${classes.guess_left}` } >
                <div className={`lead ${classes.guess_words}`}>
                  <h2 className={`display-4`}>Icone</h2>
                  Parce que chez Afro YACA Drum, on a toujours adoré les livres, découvrez régulièrement toutes nos sélections thématisées. Promis : tous les livres.<br/>Adoré les livres, découvrez régulièrement toutes nos sélections thématisées. Parce que chez Afro YACA Drum, on a toujours adoré les livres !
                </div> 
              </div>
              <div className={ `col-sm-6 ${classes.guess_right}` } >
                <div className={ `${classes.guess_pic}` } >
                </div>
              </div>
            </div>
          </div>
          

          <div className={ classes.colored_bloc }>
            <div className={ `row` } style={{ margin: 0 }}>
              <div className={ `container` }>
                <h2 className={`display-4 text-center ${classes.colored_title}`}>Robes de l'été</h2>
                <h4 className={`display-4 text-center ${classes.colored_subtitle}`}>10 robes à porter quand le soleil brille</h4>
                <div style={{ marginLeft: 0, marginRight: 0, width: '100%' }} >
                  <HorizontalScroll />
                </div>
              </div>
            </div>
          </div>

          <div className={classes.col_article}>
            <div className={`container`}>
              <div className={`row`} style={{ margin: 0 }}>
                {/* FIRST */}
                <div className="col-6 col-sm-4">
                  <a href="#">
                    <div className={`${classes.bloc_col_wrapper_1}`}>
                      <div className={classes.img_container}>
                      </div>
                      <div className={classes.img_legend}>
                        <h4 className={` ${classes.col_article_title}`}>Art du style</h4>
                        <p className={`${classes.col_article_description}`}>Toutes les façons de porter une robe</p>
                        <span className={`${classes.col_article_date}`}>21 JUL 20</span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* SECOND */}
                <div className="col-6 col-sm-4">
                  <a href="#">
                    <div className={`${classes.bloc_col_wrapper_2}`}>
                      <div className={classes.img_container}>
                      </div>
                      <div className={classes.img_legend}>
                        <h4 className={` ${classes.col_article_title}`}>Art du style</h4>
                        <p className={`${classes.col_article_description}`}>Toutes les façons de porter une robe</p>
                        <span className={`${classes.col_article_date}`}>21 JUL 20</span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* THIRTH */}
                <div className="col-6 col-sm-4">
                  <a href="#">
                    <div className={`${classes.bloc_col_wrapper_3}`}>
                      <div className={classes.img_container}>
                      </div>
                      <div className={classes.img_legend}>
                        <h4 className={` ${classes.col_article_title}`}>Art du style</h4>
                        <p className={`${classes.col_article_description}`}>Toutes les façons de porter une robe</p>
                        <span className={`${classes.col_article_date}`}>21 JUL 20</span>
                      </div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* BLOCK WITH STYLED TEXT */}
          <div className="container">
            <div className={ `row ${classes.style_article}` } style={{ margin: 0 }}>
              <a href="#" className={ `col-sm-8 ${classes.styled_left}` } >
                
              </a>
              <a href="#" className={ `col-sm-4 ${classes.styled_right}` } >
                <h4 className={`${classes.h4_article_title}`}>Art du style</h4>
                <h4 className={`${classes.h3_styled}`}>6 façons de s'habiller de manière stylé cet été</h4>
                <div className={`${classes.styled_shop_now}`}>
                  <span className={`${classes.styled_button_shop_now}`}>
                    Aller à la boutique
                  </span>
                  <br />
                  <br />
                  <span className={`${classes.col_article_date}`}>21 JUL 20</span>
                </div>
              </a>
            </div>
          </div>

          {/* SECOND ROW OF ARTICLES */}
          <div className={classes.col_article}>
            <div className={`container`}>
              <div className={`row`} style={{ margin: 0 }}>
                {/* FIRST */}
                <div className="col-6 col-sm-4">
                  <a href="#">
                    <div className={`${classes.bloc_col_wrapper_1}`}>
                      <div className={classes.img_container}>
                      </div>
                      <div className={classes.img_legend}>
                        <h4 className={` ${classes.col_article_title}`}>Art du style</h4>
                        <p className={`${classes.col_article_description}`}>Toutes les façons de porter une robe</p>
                        <span className={`${classes.col_article_date}`}>21 JUL 20</span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* SECOND */}
                <div className="col-6 col-sm-4">
                  <a href="#">
                    <div className={`${classes.bloc_col_wrapper_2}`}>
                      <div className={classes.img_container}>
                      </div>
                      <div className={classes.img_legend}>
                        <h4 className={` ${classes.col_article_title}`}>Art du style</h4>
                        <p className={`${classes.col_article_description}`}>Toutes les façons de porter une robe</p>
                        <span className={`${classes.col_article_date}`}>21 JUL 20</span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* THIRTH */}
                <div className="col-6 col-sm-4">
                  <a href="#">
                    <div className={`${classes.bloc_col_wrapper_3}`}>
                      <div className={classes.img_container}>
                      </div>
                      <div className={classes.img_legend}>
                        <h4 className={` ${classes.col_article_title}`}>Art du style</h4>
                        <p className={`${classes.col_article_description}`}>Toutes les façons de porter une robe</p>
                        <span className={`${classes.col_article_date}`}>21 JUL 20</span>
                      </div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
          
          
          <div className={classes.dont_miss_color}>
            <div className={`container`}>
              <h2 className={`display-4 text-center ${classes.colored_title} title-mb-30`}>Articles manqués</h2>
              {/* FIRST ROW */}
              <div className={`row`} style={{ margin: 0 }}>
                {/* FIRST */}
                <div className="col-6 col-sm-4">
                  <a href="#">
                    <div className={`${classes.bloc_col_wrapper_1}`}>
                      <div className={classes.dont_miss_img_container}>
                      </div>
                      <div className={classes.img_legend}>
                        <h4 className={` ${classes.dont_miss_article_title}`}>Art du style</h4>
                        <p className={`${classes.dont_miss_article_description}`}>Toutes les façons de porter une robe</p>
                        <span className={`${classes.dont_miss_article_date}`}>21 JUL 20</span>
                      </div>
                    </div>
                  </a>
                </div>
                {/* SECOND */}
                <div className="col-6 col-sm-4">
                  <a href="#">
                    <div className={`${classes.bloc_col_wrapper_1}`}>
                      <div className={classes.dont_miss_img_container}>
                      </div>
                      <div className={classes.img_legend}>
                        <h4 className={` ${classes.dont_miss_article_title}`}>Art du style</h4>
                        <p className={`${classes.dont_miss_article_description}`}>Toutes les façons de porter une robe</p>
                        <span className={`${classes.dont_miss_article_date}`}>21 JUL 20</span>
                      </div>
                    </div>
                  </a>
                </div>
                {/* THIRT */}
                <div className="col-6 col-sm-4">
                  <a href="#">
                    <div className={`${classes.bloc_col_wrapper_1}`}>
                      <div className={classes.dont_miss_img_container}>
                      </div>
                      <div className={classes.img_legend}>
                        <h4 className={` ${classes.dont_miss_article_title}`}>Art du style</h4>
                        <p className={`${classes.dont_miss_article_description}`}>Toutes les façons de porter une robe</p>
                        <span className={`${classes.dont_miss_article_date}`}>21 JUL 20</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* SECOND ROW */}
              <div className={`row`} style={{ margin: "40px 0 0 0" }}>
                {/* FIRST */}
                <div className="col-6 col-sm-4">
                  <a href="#">
                    <div className={`${classes.bloc_col_wrapper_1}`}>
                      <div className={classes.dont_miss_img_container}>
                      </div>
                      <div className={classes.img_legend}>
                        <h4 className={` ${classes.dont_miss_article_title}`}>Art du style</h4>
                        <p className={`${classes.dont_miss_article_description}`}>Toutes les façons de porter une robe</p>
                        <span className={`${classes.dont_miss_article_date}`}>21 JUL 20</span>
                      </div>
                    </div>
                  </a>
                </div>
                {/* SECOND */}
                <div className="col-6 col-sm-4">
                  <a href="#">
                    <div className={`${classes.bloc_col_wrapper_1}`}>
                      <div className={classes.dont_miss_img_container}>
                      </div>
                      <div className={classes.img_legend}>
                        <h4 className={` ${classes.dont_miss_article_title}`}>Art du style</h4>
                        <p className={`${classes.dont_miss_article_description}`}>Toutes les façons de porter une robe</p>
                        <span className={`${classes.dont_miss_article_date}`}>21 JUL 20</span>
                      </div>
                    </div>
                  </a>
                </div>
                {/* THIRT */}
                <div className="col-6 col-sm-4">
                  <a href="#">
                    <div className={`${classes.bloc_col_wrapper_1}`}>
                      <div className={classes.dont_miss_img_container}>
                      </div>
                      <div className={classes.img_legend}>
                        <h4 className={` ${classes.dont_miss_article_title}`}>Art du style</h4>
                        <p className={`${classes.dont_miss_article_description}`}>Toutes les façons de porter une robe</p>
                        <span className={`${classes.dont_miss_article_date}`}>21 JUL 20</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>


        </section>
        
        <Footer />
      </div>
    );
  }
}
