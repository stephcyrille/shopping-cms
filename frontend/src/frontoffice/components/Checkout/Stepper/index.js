import React from "react";
import { connect } from "react-redux";
import { PulseLoader } from 'react-spinners';
import clsx from "clsx";
import { Stepper, Step, StepLabel, Button, Paper } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import _ from "underscore";
import { stepperCStoreActions } from './store'
import Step3 from './Snippeds/Step3/index'
import './style.local.css';
import { getSession } from '../../../utils/session_utils'


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
    };
  }

  componentDidMount = async () => {
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


  getStepContent = (stepIndex) => {
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
                <div className="address_bloc">
                  <div className="add_address_bloc">
                    <h6>Nouvelle adresse</h6>
                  </div>
                  <div className="plus_box">
                    <i className="fa fa-plus"></i>
                  </div>
                </div>
                <div className="place_delivery_choice">
                  <h2>Obtenir votre commande</h2> 
                  <div className="delivery_method active standard_delivery">
                    <h6>D'ici Samedi 25 Juillet </h6>
                    <p>
                      <i className="fas fa-truck" style={{ marginRight: 10 }}></i>
                      <span className="">Livraison Standard</span>
                    </p>
                    <p className="delivery_hour">
                      08:00 - 18:00
                    </p>
                  </div>
                  
                  <div className="delivery_method fast_delivery">
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



  render() {
    const { activeStep, steps } = this.state;
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
                      <div className="col-sm-6"><h5 className="price-total">{ cart_total ? cart_total : 0 } FCFA</h5></div>
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

      </div>
    )
  }
}
