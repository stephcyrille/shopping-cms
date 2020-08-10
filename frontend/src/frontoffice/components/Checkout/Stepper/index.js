import React from "react";
import { connect } from "react-redux";
import { PulseLoader } from 'react-spinners';
import clsx from "clsx";
import { Stepper, Step, StepLabel, Button, Paper, TextField } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Dialog from '../../Snippets/MyDialog'
import _ from "underscore";
import { stepperCStoreActions } from './store'
import Step3 from './Snippeds/Step3/index'
import './style.local.css';
import { getSession } from '../../../utils/session_utils'
import appConfig from '../../../config'


// Checknbox properties
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

// Stepper properties
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      // backgroundImage: `url(${toAbsoluteUrl("/media/icons/r_arrow_b.svg")})`,
    },
  },
  completed: {
    "& $line": {
      // backgroundImage: `url(${toAbsoluteUrl("/media/icons/r_arrow_b.svg")})`,
    },
  },
  line: {
    height: "20px",
    width: "20px",
    // backgroundImage: `url(${toAbsoluteUrl("/media/icons/r_arrow.svg")})`,
    backgroundSize: "contain",
    margin: "0px auto",
    border: 0,
    // backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

// For Boxes and forms and colors
const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    zIndex: 1,
    color: "grey",
    borderBottom: "2px solid grey",
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    display: "flex",
    paddingBottom: 10,
    justifyContent: "left",
    alignItems: "left",
  },
  active: {
    backgroundColor: "#fff",
    color: "#f09622",
    borderBottom: "2px solid #f09622",
    // boxShadow: "2px 5px 12px #bbbbbb",
  },
  completed: {
    backgroundColor: "#fff",
    color: "#f09622",
    borderBottom: "2px solid #f09622",
  },
});


// For Boxes logo or steps numbers
function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: "1 Panier",
    2: "2 Livraison",
    3: "3 Paiement",
    4: "4 Terminé",
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

export default
@connect((state, props) => ({
  stepperCStore: state.stepperCStore
}))
class StepperComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,
      steps: [],
      intervalId: 0,
      dialogOpen: false,
      addressList: [],
      // For express delivery
      express_delivery_cost: 0,
      standard: true,
      express: false,

      // Add address form val
      surname: {
        value: '',
        error: false,
        errorMessage: null
      },
      name: {
        value: '',
        error: false,
        errorMessage: null
      },
      address: {
        value: '',
        error: false,
        errorMessage: null
      },
      address_precision: {
        value: '',
        error: false,
        errorMessage: null
      },
      country: {
        value: 'Cameroun',
        error: false,
        errorMessage: null
      },
      city: {
        value: '',
        error: false,
        errorMessage: null
      },
      phone: {
        value: '',
        error: false,
        errorMessage: null
      },
    };
  }

  UNSAFE_componentWillMount = async () => {
    var cart_id = getSession().cart_id
    this._fetchCartItems(cart_id)

    const steps = this.getSteps();
    this.setState({
      steps,
    });
  };


  _fetchCartItems(cart_id){
    this.props.dispatch(stepperCStoreActions.setLoading(true))

    window.axios
    .get(`/apis/cart/${cart_id}/`)
    .then(response => {
      var cart = response.data
      
      this.props.dispatch(stepperCStoreActions.setLoading(false))
      this.props.dispatch(stepperCStoreActions.setCart(cart))
      this.props.dispatch(stepperCStoreActions.setCartSubTotal(cart.total))
      this.props.dispatch(stepperCStoreActions.setCartTotal(cart.total + cart.delivery_price))
      this.props.dispatch(stepperCStoreActions.setCartDeliveryPrice(cart.delivery_price))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
        this.props.dispatch(stepperCStoreActions.setLoading(false))
      }  
    )
  }


  handleChangeSurname(e){    
    this.setState({
      surname: {
        value: e.target.value,
        error: false
      }
    })
  }

  handleChangeName(e){    
    this.setState({
      name: {
        value: e.target.value,
        error: false
      }
    })
  }

  handleChangeAddress(e){    
    this.setState({
      address: {
        value: e.target.value,
        error: false
      }
    })
  }

  handleChangeAddressPrecision(e){    
    this.setState({
      address_precision: {
        value: e.target.value,
        error: false
      }
    })
  }

  handleChangeCountry(e){    
    this.setState({
      country: {
        value: e.target.value,
        error: false
      }
    })
  }

  handleChangeCity(e){    
    this.setState({
      city: {
        value: e.target.value,
        error: false
      }
    })
  }

  handleChangePhone(e){    
    this.setState({
      phone: {
        value: e.target.value,
        error: false
      }
    })
  }


  getSteps = () => {
    return ["cartStep", "deliveryStep", "paymentStep", "completeStep"];
  };

  handleNext = () => {
    this.props.dispatch(stepperCStoreActions.setLoading(true))
    setTimeout(()=> {
       // if (this.handleValidation()) {
        if (this.state.activeStep === 3) {
          // this.handlSaveNewShoppiing();
        } else {
          this.setState({
            activeStep: this.state.activeStep + 1,
          });
        }
      // } else {
      //   alert("Form has errors.");
      // }
      this.scrollToTop()
      this.props.dispatch(stepperCStoreActions.setLoading(false))
    }, 500)
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });

    this.scrollToTop()
  };

  _handleHomePage(){
    window.location.href = "/shop/"; 
  }

  handleReset = () => {
    this.setState({
      activeStep: 1,
    });
  };

  handleChange = (event) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
    var name = event.target.name

    if(name === 'same_info'){
      this.props.dispatch(stepperCStoreActions.setSameInfo(event.target.checked))
    }else if(name === 'major'){
      this.props.dispatch(stepperCStoreActions.setMajor(event.target.checked))
    }else if(name === 'newsletter'){
      this.props.dispatch(stepperCStoreActions.setNewsletter(event.target.checked))
    }

  };

  handleChangeDelivery(){
    if(this.state.standard==true){
      this.setState({
        standard: false,
        express: true,
        express_delivery_cost: appConfig.EXPRESSDELIVERYCOST
      })
    }
    else{
      this.setState({
        standard: true,
        express: false,
        express_delivery_cost: 0,
      })
    }
  }


  getStepContent = (stepIndex) => {
    const { standard, express } = this.state

    switch (stepIndex) {
      case 0:
        return (
          <div className="step_one_bloc">
          </div>
        );
      case 1:
        const { same_info, major, newsletter } = this.props.stepperCStore

        return (
          <div className="row">
            <div className="col-md-12">
              <div className="step_two_bloc">
                <h2>Adresse de Livraison</h2> 
                <p>
                  Saisissez votre adresse de livraison pour connaître les options de livraison et les délais. 
                  Les restrictions de livraison appliquées peuvent nous contraindre à refuser votre commande.
                </p>
                <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
                  <div className="col-6" style={{ paddingLeft: 0}}>
                    <div className="address_bloc">
                      <div className="add_address_bloc">
                        <h5>MEBENGA ATANGA STEPHANE</h5>
                        <h5>Douala, Cameroun</h5>
                        <h6>PK 17, Entrée Chefferie</h6>
                        <h6>Tél: (+237) 693 458 540</h6>
                      </div>
                      <div className="plus_box">
                        <i className="fa fa-pen" onClick={ this.handleSetDialogOpen.bind(this) }></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-6" style={{ paddingRight: 0}}>
                    <div className="address_bloc_new" onClick={ this.handleSetDialogOpen.bind(this) }>
                      <div className=".address_bloc_new">
                        <h6>Nouvelle adresse</h6>
                      </div>
                      <div className="plus_box">
                        <i className="fa fa-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="place_delivery_choice">
                  <h2>Obtenir votre commande</h2> 
                  <div 
                    className={`delivery_method standard_delivery ${standard ? 'active' : null }`}
                    onClick={ this.handleChangeDelivery.bind(this) }
                  >
                    <h6>D'ici Samedi 25 Juillet </h6>
                    <p>
                      <i className="fas fa-truck" style={{ marginRight: 10 }}></i>
                      <span className="">Livraison Standard</span>
                    </p>
                    <p className="delivery_hour">
                      08:00 - 18:00
                    </p>
                  </div>
                  
                  <div 
                    className={`delivery_method fast_delivery ${express ? 'active' : null }`}
                    onClick={ this.handleChangeDelivery.bind(this) }
                  >
                    <h6>D'ici Samedi 25 Juillet </h6>
                    <p>
                      <i className="fas fa-shipping-fast" style={{ marginRight: 10 }}></i>
                      <span className="">Livraison Express</span>
                    </p>
                    <p className="delivery_hour">
                      08:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="cgv">
                  <FormControl component="fieldset">
                    <span style={{ marginBottom: 10 }}><b>Email: </b>mailtest@gmail.com</span>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked={same_info} color="default" onChange={this.handleChange} name="same_info" />}
                        label={"Mes informations de livraison et de facturation sont les mêmes."}
                      />
                      <FormControlLabel
                        control={<Checkbox checked={major} color="default" onChange={this.handleChange} name="major" />}
                        label={"J'ai plus de 16 ans Pourquoi est-ce important?"}
                      />
                      <FormControlLabel
                        control={<Checkbox checked={newsletter} color="default" onChange={this.handleChange} name="newsletter" />}
                        label={"Je communique mes coordonnées afin qu'adidas m'informe des produits et services de Afro qui peuvent me correspondre. Je sais que je peux demander à adidas de cesser toute communication avec moi à tout moment. J'accepte de recevoir des messages personnalisés de marketing via le courrier électronique de la part des Responsables de traitements (« Afro Yaca »). COMMENT?"}
                      />
                    </FormGroup>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <Step3 />
          </div>
          )
      case 3:
        return (
          <div>
            <div className="step4-wrapper">
              <div className="step4-body">
                <h2 className="">Commande réussie</h2>
              </div>
            </div>
          </div>
          )
      default:
        return (
          <div>
            Page test
          </div>
        );
    }
  };


  scrollStep(scrollStepInPx="50" ) {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  }
  
  scrollToTop(delayInMs="16.66") {
    let intervalId = setInterval(this.scrollStep.bind(this), delayInMs);
    this.setState({ intervalId: intervalId });
  }

  handleSetDialogOpen(element, qty){
    this.setState({
      dialogOpen: true,
    })
  }

  handleSetDialogClose(){
    this.setState({
      dialogOpen: false,

      surname: {
        value: '',
        error: false,
        errorMessage: null
      },
      name: {
        value: '',
        error: false,
        errorMessage: null
      },
      address: {
        value: '',
        error: false,
        errorMessage: null
      },
      address_precision: {
        value: '',
        error: false,
        errorMessage: null
      },
      country: {
        value: '',
        error: false,
        errorMessage: null
      },
      city: {
        value: '',
        error: false,
        errorMessage: null
      },
      phone: {
        value: '',
        error: false,
        errorMessage: null
      },
    })
  }

  handleOnSubmit(e){
    e.preventDefault()
    console.log("Form Submitted====", e.target)
    const value = {
      surname: this.state.surname.value,
      name: this.state.name.value,
      address: this.state.address.value,
      city: this.state.city.value,
      phone: this.state.phone.value,
    }

    if( !value.surname ){
      this.setState({
        surname: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !value.name ){
      this.setState({
        name: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !value.address ){
      this.setState({
        address: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !value.city ){
      this.setState({
        city: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !value.phone ){
      this.setState({
        phone: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }

    value["address_precision"] = this.state.address_precision.value
    value["country"] = this.state.country.value

    console.log("FORM VALUE THERE::", value)
  }



  render() {
    const { activeStep, steps, express_delivery_cost } = this.state;
    const { loading, cart_sub_total, cart_delivery_price, cart_total, cart } = this.props.stepperCStore;


    return (
      <div>
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
        <div className="container-fluid card" style={{ marginTop: 20, marginBottom: 20 }}>
          <div className="col-md-12" style={{ margin: "auto" }}>
            <Stepper
              className="container"
              activeStep={activeStep}
              alternativeLabel
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon} style={{ display: "flex", alignItems: "normal"}}>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </div>
        
        <div className="container whole_stepper_content">
          <div className="row justify-content-center">
            <div className="col-sm-8">
              {this.getStepContent(activeStep)}
            </div>
            <div className="col-sm-4">
              <div className="row" style={{ width: '100%', marginRight: 0, marginLeft: 0 }}>
                <div className="command-summary-wrapper" style={{ width: '100%' }}>
                  <div className="command-summary">
                    <h5 className="">Synthèse de la commande</h5>
                    <br />
                    <div className="command-total-group">
                      <div className="row">
                        <div className="col-sm-6"><h6 className="">Sous total</h6></div>
                        <div className="col-sm-6"><p className="">{ cart_sub_total ? cart_sub_total : 0 } FCFA</p></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6"><h6 className="">Livraison</h6></div>
                        <div className="col-sm-6"><p className="">{ cart_delivery_price ? cart_delivery_price : 0 } FCFA</p></div>
                      </div>
                      { express_delivery_cost != 0 && <div className="row">
                        <div className="col-sm-6"><h6 className="">Livraison express</h6></div>
                        <div className="col-sm-6"><p className=""> { express_delivery_cost } FCFA</p></div>
                      </div>}
                      <div className="row">
                        <div className="col-sm-6"><h6 className="">Réduction</h6></div>
                        <div className="col-sm-6"><p className=""> { '0 %' } </p></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6"><h6 className="">Taxe total</h6></div>
                        <div className="col-sm-6"><p className=""> { 0 } FCFA</p></div>
                      </div>
                    </div>
                    <div className="row line-total">
                      <div className="col-sm-6"><h5 className="">Montant Total</h5></div>
                      <div className="col-sm-6"><h5 className="price-total">{ cart_total ? (express_delivery_cost != 0 ? express_delivery_cost + cart_total : cart_total) : 0 } FCFA</h5></div>
                    </div>
                  </div>
                </div>
              </div>

              { activeStep == '1' && 
                <div className="command-product-wrapper row" style={{ width: '100%', marginRight: 0, marginLeft: 0 }}>
                  <h5 className="">Articles</h5>
                  { !_.isEmpty(cart.cart_items) ? 
                    cart.cart_items
                      .map((val, key) => {
                        return (
                          <div className="row product-row" key={key}>
                            <div className="col-sm-6 command-picture-box">
                              <div className="command-img-wrapper">
                                <a href={`/shop/products/${val.slug}`} className="">
                                  <img className="img-fluid" src={ val.pictures ? val.pictures[0] : null } />
                                </a>
                              </div>
                            </div>
                            <div className="col-sm-6 command-picture-summary">
                              <h6 className="" style={{ textAlign: "justify" }} >{ val.title }</h6>
                              <p className="">
                                <span className="">{ val.color }</span> <br />
                                <span className="">Taille : { val.size }</span> <br />
                                <span className="">Quantité : { val.selected_quantity }</span> <br />
                                <span className="">{ val.line_total } FCFA</span> <br />
                              </p>
                            </div>
                          </div>
                        )}) : 
                        null 
                  }
                </div>
              }

              { activeStep == '2' && 
                <div className="command-product-wrapper row" style={{ width: '100%', marginRight: 0, marginLeft: 0 }}>
                </div>
              }

            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 20, marginBottom: 20 }}>
          <div style={{ padding: 20, textAlign: "center" }}>
            <Button
              disabled={activeStep === 1}
              onClick={this.handleBack}
            >
              Retour
            </Button>
            &nbsp;
            &nbsp;
            <Button
              variant="contained"
              onClick={activeStep === steps.length - 1 ? this._handleHomePage : this.handleNext}
            >
              {activeStep === steps.length - 1 ? "Continuer achats" : "Suivant"}
            </Button>
          </div>
        </div>
        
        <Dialog title={(<h4 style={{ textTransform: "uppercase", textAlign: "center" }}>Ajouter une adresse</h4>)} isOpen={ this.state.dialogOpen } onClose={ this.handleSetDialogClose.bind(this) }>
          <Paper style={{ padding: '2em' }}>
            <form className="" onSubmit={ this.handleOnSubmit.bind(this) }> 
              <div className="row" style={{ marginLeft: 0, marginRight: 0}}> 
                <div className="col-6">
                  <TextField 
                    variant="outlined"
                    value={ this.state.surname.value } 
                    error={ this.state.surname.error && this.state.surname.error }
                    onChange={ this.handleChangeSurname.bind(this) } 
                    label="Prénom" 
                    name="surname"
                    helperText={ this.state.surname.error ? this.state.surname.errorMessage : null }
                    fullWidth
                    required
                  />
                </div>
                <div className="col-6">
                  <TextField 
                    variant="outlined"
                    value={ this.state.name.value } 
                    error={ this.state.name.error && this.state.name.error }
                    onChange={ this.handleChangeName.bind(this) } 
                    label="Nom" 
                    name="name"
                    helperText={ this.state.name.error ? this.state.name.errorMessage : null }
                    fullWidth
                    required
                  />
                </div>
              </div>
              <div className="row" style={{ marginLeft: 0, marginRight: 0, paddingTop: 10 }}> 
                <div className="col-12">
                  <TextField 
                    variant="outlined"
                    value={ this.state.address.value } 
                    error={ this.state.address.error && this.state.address.error }
                    onChange={ this.handleChangeAddress.bind(this) } 
                    label="Adresse" 
                    name="address"
                    helperText={ this.state.address.error ? this.state.address.errorMessage : null }
                    fullWidth
                    required
                  />
                </div>
              </div>
              <div className="row" style={{ marginLeft: 0, marginRight: 0, paddingTop: 10 }}> 
                <div className="col-12">
                  <TextField 
                    variant="outlined"
                    value={ this.state.address_precision.value } 
                    error={ this.state.address_precision.error && this.state.address_precision.error }
                    onChange={ this.handleChangeAddressPrecision.bind(this) } 
                    label="Complément d'adresse (Appartement, Société, Poste)" 
                    name="address_precision"
                    helperText={ this.state.address_precision.error ? this.state.address_precision.errorMessage : null }
                    fullWidth
                  />
                </div>
              </div>
              <div className="row" style={{ marginLeft: 0, marginRight: 0, paddingTop: 10 }}> 
                <div className="col-6">
                  <TextField 
                    variant="outlined"
                    // value={ this.state.country.value } 
                    error={ this.state.country.error && this.state.country.error }
                    onChange={ this.handleChangeCountry.bind(this) } 
                    defaultValue={"Cameroun"}
                    label="Pays" 
                    name="country"
                    helperText={ this.state.country.error ? this.state.country.errorMessage : null }
                    fullWidth
                    required
                    disabled
                  />
                </div>
                <div className="col-6">
                  <TextField 
                    variant="outlined"
                    value={ this.state.city.value } 
                    error={ this.state.city.error && this.state.city.error }
                    onChange={ this.handleChangeCity.bind(this) } 
                    label="Ville" 
                    name="city"
                    helperText={ this.state.city.error ? this.state.city.errorMessage : null }
                    fullWidth
                    required
                  />
                </div>
              </div>
              <div className="row" style={{ marginLeft: 0, marginRight: 0, paddingTop: 10 }}> 
                <div className="col-6">
                  <TextField 
                    variant="outlined"
                    value={ this.state.phone.value } 
                    error={ this.state.phone.error && this.state.phone.error }
                    onChange={ this.handleChangePhone.bind(this) } 
                    label="N° de téléphone" 
                    name="phone"
                    helperText={ this.state.phone.error ? this.state.phone.errorMessage : null }
                    fullWidth
                    required
                  />
                </div>
              </div>
              
              <div className="row" style={{ marginTop: '2em', marginLeft: 0, marginRight: 0 }}>
                <Button 
                  type="submit"
                  className="ml-auto"
                  variant="contained"
                  color="primary"
                >
                  Enregistrer
                </Button>
                &nbsp;
                &nbsp;
                <Button 
                  onClick={ this.handleSetDialogClose.bind(this) }
                  className="mr-auto"
                >
                  Annuler
                </Button>
              </div> 
            </form> 
          </Paper>
        </Dialog>
      </div>
    )
  }
}
