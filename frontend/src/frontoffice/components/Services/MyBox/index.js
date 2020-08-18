import React from "react";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import _ from "underscore";

import "./style.local.css"


const useStyles = theme => ({
  home_cover: {
    backgroundColor: "#fff",
    height: 400,
    paddingTop: 20,
  },
  picBckg: {
    backgroundColor: "#fff",
    backgroundImage: "url('/static/images/girl1.jpg')",
    height: 350,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  text_cover: {
    paddingTop: 40,
  },
  mainTitle: {
    fontSize: "2.3rem"
  },
  subTitle: {
    fontSize: "1.5rem"
  },
  presentation: {
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "#505050"
  },
  presentation_body: {
    color: "white",
    fontSize: "1.15rem",
    fontWeight: 300,
    lineHeight: "180%",
  },
  li_items: {
    marginBottom: 20,
    listStyleType: "square",
  },
  bundles: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  contactForm: {
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "#ddaa44",
  },
  formWrapper: {
    width: 700,
    margin: "0 auto",
    backgroundColor: "#fff",
    boxShadow: "2px 2px 4px 3px rgba(0,0,0,0.4)",
    borderRadius: "10px",
    padding: 40,
  },
  formControl: {
    width: "100%",
  },
  button_box: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});


export default
@withStyles(useStyles)
@connect((state, props) => ({
}))
class MyBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title : {
        value: '',
        error: false,
        errorMessage: null
      },
      name : {
        value: '',
        error: false,
        errorMessage: null
      },
      email : {
        value: '',
        error: false,
        errorMessage: null
      },
      subject : {
        value: '',
        error: false,
        errorMessage: null
      },
      message : {
        value: '',
        error: false,
        errorMessage: null
      },
    }
  }


  handleChangeTitle = (event) => {
    this.setState({
      title: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeName = (event) => {
    this.setState({
      name: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeEmail = (event) => {
    this.setState({
      email: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeSubject = (event) => {
    this.setState({
      subject: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeMessage = (event) => {
    this.setState({
      message: {
        value: event.target.value,
        error: false
      }
    })
  }


  _handleOnSubmit(event){
    event.preventDefault();
    // console.log("Form Values", event.target)
    // Make the validation process here
    var values = {
      title: this.state.title.value,
      name: this.state.name.value,
      email: this.state.email.value,
      subject: this.state.subject.value,
      message: this.state.message.value,
    }
    console.log("Form Values", values)
    if( !values.title ){
      this.setState({
        title: {
          error: true,
          errorMessage: "Sélectionner votre titre"
        },
      })
    }
    if( !values.name ){
      this.setState({
        name: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.email ){
      this.setState({
        email: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.subject ){
      this.setState({
        subject: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.message ){
      this.setState({
        message: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
   
    console.log("Contact Form values ", values)

    if(
      (values.title) !== "" &&
      (values.name) !== "" &&
      (values.email) !== "" &&
      (values.subject) !== "" &&
      (values.message) !== ""
    ){
      // SUBMIT THERE

      const data = {
        "title": values.title,
        "title": values.name,
        "email": values.email,
        "subject": values.subject,
        "message": values.message,
      }
    }
  }



  render() {
    const { classes } = this.props

    return (
      //<!-- Document Wrapper -->
      <div className="oh_my_box_page" style={{ backgroundColor: "white" }}>
        <div className={`container ${classes.home_cover}`}>
          <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
            <div className={`col-md-6 ${classes.picBckg}`}>
            </div>
            <div className={`col-md-6 ${classes.text_cover}`}>
              <h3 className={`display-4 ${classes.mainTitle}`}>Découvrez le service OH! My box chez Afro Yaca Drum</h3>
              <h4 className={`display-4 ${classes.subTitle}`}>Composez votre sélection de vêtements à votre manière et sélectionnez ceux qui vous plaisent uniquement</h4>
            </div>
          </div>
        </div>

        <div className={`${classes.presentation}`}>
          <h3 className={`display-4 ${classes.mainTitle} text-center`} style={{ color: "white" }}>C'est quoi Oh! My Box</h3>
          
          <div className={`container ${classes.presentation_body} display-4`}>
            <ul>
              <li className={`${classes.li_items}`}>
                Oh, ma box! est un programme exclusif de Afro yaca drum qui vous permet d’essayer avant d’acheter des articles de notre marque.Vous disposez de 24h pour essayer les articles à la maison et vous ne serez facturé que pour les articles que vous décidez de conserver.
              </li>
              <li className={`${classes.li_items}`}>
                Oh, ma box! est un programme exclusif de Afro yaca drum qui vous permet d’essayer avant d’acheter des articles de notre marque.Vous disposez de 24h pour essayer les articles à la maison et vous ne serez facturé que pour les articles que vous décidez de conserver.
              </li>
              <li className={`${classes.li_items}`}>
                C’est un service disponible pour le moment uniquement dans la ville de yaounde et ouvert aux clients fidèles de la boutique AFRO YACA DRUM d’autres villes qui eux disposent de 72h pour le choix et le retour des articles.
              </li> 
            </ul>
          </div>
        </div>

        <div className={`${classes.bundles}`}>
          <h3 className={`display-4 ${classes.mainTitle} text-center`}>Nos formules</h3>
          <div className={`container ${classes.presentation_body} display-4 text-center`}>
            <p style={{ color: "black" }}>
              Le service OH,MA BOX! Est ouvert à tous ceux qui désirent s’habiller chic et à la mode sans sortir de chez eux. Ceci étant, les clients ont le choix soit de payer directement leur BOX sans s’abonner, soit  de bénéficier d’un traitement VIP avec un abonnement mensuel prépayé.
            </p>
          </div>
          <div className={`container`}>
            <section className="lis-bg-light" style={{ paddingTop: 30 }}>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 wow fadeInUp mb-5 mb-lg-0 text-center" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                    <div className="price-table">
                      <div className="price-header lis-bg-primary-first text-white lis-rounded-top py-4 border border-bottom-0 lis-brd-light">
                        <h5 className="text-uppercase lis-latter-spacing-2 text-white">Formule BRONZE</h5>
                        <h1 className="display-4 lis-font-weight-500 text-white"><sup>FCFA</sup> 10K <small>/mo</small></h1>
                        <p className="mb-0">Formule membre basique</p>
                      </div>
                      <div className="border border-top-0 lis-brd-light bg-white py-5 lis-rounded-bottom">
                        <ul className="list-unstyled lis-line-height-3">
                          <li>
                            Réception choix à domicile 3 fois / mois  
                          </li>
                          <li style={{ opacity: 0 }}>One Listing</li>
                          <li style={{ opacity: 0 }}>90 Days Availability</li>
                          <li style={{ opacity: 0 }}>Featured In Search Results</li>
                          <li style={{ opacity: 0 }}>24/7 Support</li>
                        </ul> 
                        <a href="#" className="btn btn-primary-outline btn-md lis-rounded-circle-50" data-abc="true">
                          <i className="fa fa-shopping-cart pl-2"></i>
                          Souscrire maintenant
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-12 col-md-6 col-lg-4 wow fadeInUp mb-5 mb-lg-0 text-center" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                    <div className="price-table active">
                      <div className="price-header lis-bg-primary py-4 text-white lis-rounded-top">
                        <h5 className="text-uppercase lis-latter-spacing-2 text-white">Formule SILVER</h5>
                        <h1 className="display-4 lis-font-weight-500 text-white"><sup>FCFA</sup> 15K <small>/mo</small></h1>
                        <p className="mb-0">Formule membre premium</p>
                      </div>
                      <div className="border border-top-0 lis-brd-light bg-white py-5 lis-rounded-bottom">
                        <ul className="list-unstyled lis-line-height-3">
                          <li>
                            Réception choix à domicile 3 fois / mois  
                          </li>
                          <li>
                            Accompagnement personnalisé en ligne
                          </li>
                          <li>
                            Réduction de 15% sur articles achetés
                          </li>
                          <li style={{ opacity: 0 }}>Featured In Search Results</li>
                          <li style={{ opacity: 0 }}>24/7 Support</li>
                        </ul> 
                        <a href="#" className="btn btn-primary btn-md lis-rounded-circle-50" data-abc="true">
                          <i className="fa fa-shopping-cart pl-2"></i>
                          Souscrire maintenant
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4 wow fadeInUp text-center" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                    <div className="price-table">
                      <div className="price-header lis-bg-primary-last text-white lis-rounded-top py-4 border border-bottom-0 lis-brd-light">
                        <h5 className="text-uppercase lis-latter-spacing-2 text-white">Formule GOLD</h5>
                        <h1 className="display-4 lis-font-weight-500 text-white"><sup>FCFA</sup> 30K <small>/mo</small></h1>
                        <p className="mb-0">Formule membre gold</p>
                      </div>
                      <div className="border border-top-0 lis-brd-light bg-white py-5 lis-rounded-bottom">
                        <ul className="list-unstyled lis-line-height-3">
                          <li>
                            + de 8 Articles dans votre box 
                          </li>
                          <li>
                            Conseiller vestimentaire 
                          </li>
                          <li>
                            Box 4/mois
                          </li>
                          <li>
                            Conception tenu sur mésur
                          </li>
                          <li>
                            Réduction 25% sur articles achetés
                          </li>
                        </ul> 
                        <a href="#" className="btn btn-primary-outline btn-md lis-rounded-circle-50" data-abc="true"><i className="fa fa-shopping-cart pl-2"></i>Souscrire maintenant</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        
        <div className={classes.contactForm}>
          <div className={`container`}>
            <div className={classes.formWrapper}>
              <form className={classes.form} noValidate autoComplete="off" onSubmit={ this._handleOnSubmit.bind(this) }>
                <div className="row" style={{ marginBottom: 20 }}>
                  <div className="col-md-3">
                    <FormControl className={classes.formControl}>
                      <InputLabel id="title-select">Titre</InputLabel>
                      <Select
                        labelId="title-select"
                        id="title-select"
                        defaultValue="Mme"
                        value={this.state.title.value}
                        onChange={this.handleChangeTitle.bind(this)}
                        fullWidth
                      >
                        <MenuItem value={"Mlle"}>{'Mademoiselle'}</MenuItem>
                        <MenuItem value={"Mme"}>{'Madame'}</MenuItem>
                        <MenuItem value={"M"}>{'Monsieur'}</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-md-5">
                    <TextField
                      id="standard-error-helper-text"
                      label="Nom et prénom"
                      error={ this.state.name.error && this.state.name.error }
                      name="name"
                      onChange={ this.handleChangeName.bind(this) }
                      placeholder={"Votre nom complet"}
                      value={this.state.name.value}
                      type="text"
                      helperText={ this.state.name.error ? this.state.name.errorMessage : null }
                      required
                      fullWidth
                    />
                  </div>
                  <div className="col-md-4">
                    <TextField
                      id="email_unique_field"
                      label="Adresse mail"
                      error={ this.state.email.error && this.state.email.error }
                      name="email"
                      onChange={ this.handleChangeEmail.bind(this) }
                      placeholder={"Email"}
                      value={this.state.email.value}
                      type="email"
                      helperText={ this.state.email.error ? this.state.email.errorMessage : null }
                      required
                      fullWidth
                    />
                  </div>
                </div>

                <div className="row" style={{ marginBottom: 20 }}>
                  <div className="col-md-12">
                    <TextField
                      id="subject"
                      label="Sujet du message"
                      error={ this.state.subject.error && this.state.subject.error }
                      name="subject"
                      onChange={ this.handleChangeSubject.bind(this) }
                      placeholder={"Sujet"}
                      value={this.state.subject.value}
                      type="text"
                      helperText={ this.state.subject.error ? this.state.subject.errorMessage : null }
                      required
                      fullWidth
                    />
                  </div>
                </div>

                <div className="row" style={{ marginBottom: 20 }}>
                  <div className="col-12">
                    <TextField
                      id="description"
                      label="Message"
                      type="text"
                      rows={3}
                      error={ this.state.message.error && this.state.message.error }
                      value={this.state.message.value}
                      onChange={ this.handleChangeMessage.bind(this) }
                      helperText={ this.state.message.error ? this.state.message.errorMessage : null }
                      variant="outlined"
                      multiline
                      required
                      fullWidth
                    />
                  </div>
                </div>

                <div className={`${classes.row} row`}>
                  <div className={`${classes.button_box} mr-auto mx-auto`}>
                    <Button 
                      variant="contained" 
                      // color="primary"
                      type="submit"
                    >
                      Soumettre
                    </Button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
