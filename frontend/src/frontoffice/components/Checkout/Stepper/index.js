import React from "react";
import { connect } from "react-redux";

import { Stepper, Step, StepLabel, Button, Paper } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import clsx from "clsx";

import './style.local.css';
import { stepperCStoreActions } from './store'

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
    };
  }

  componentDidMount = async () => {
    const steps = this.getSteps();
    this.setState({
      steps,
    });
  };

  getSteps = () => {
    return ["cartStep", "deliveryStep", "paymentStep", "completeStep"];
  };

  handleNext = () => {
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
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

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
            Page Paiement
          </div>
          )
      case 3:
        return (
          <div>
            Page Complete
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



  render() {
    const { activeStep, steps } = this.state;

    return (
      <div>
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
                    {/* {label} */}
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
                        <div className="col-sm-6"><p className="">{ 20000 } FCFA</p></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6"><h6 className="">4 Produits</h6></div>
                        <div className="col-sm-6"><p className="">{ 0 == 0 ? 20000 : cart_delivery_price } FCFA</p></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6"><h6 className="">Livraison</h6></div>
                        <div className="col-sm-6"><p className="">{ 0 == 0 ? 0 : cart_delivery_price } FCFA</p></div>
                      </div>
                    </div>
                    <div className="row line-total">
                      <div className="col-sm-6"><h5 className="">Montant Total</h5></div>
                      <div className="col-sm-6"><h5 className="price-total">{ 0 == 0 ? 20000 : cart_total } FCFA</h5></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="command-product-wrapper row" style={{ width: '100%', marginRight: 0, marginLeft: 0 }}>
                <h5 className="">Articles</h5>
                <div className="row product-row">
                  <div className="col-sm-6 command-picture-box">
                    <div className="command-img-wrapper">
                      {/* <a href={`/shop/products/${val.slug}`} className=""> */}
                      <a href={`/shop/products/test`} className="">
                        {/* <img className="img-fluid" src={ val.pictures ? val.pictures[0] : null } /> */}
                        <img className="img-fluid" src="/static/images/product1.jpg" />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 command-picture-summary">
                    <h6 className="">Nom du produit</h6>
                    <p className="">
                      <span className="">couleur</span> <br />
                      <span className="">Taille : couleur</span> <br />
                      <span className="">Quantité : 4</span> <br />
                      <span className="">3000 FCFA</span> <br />
                    </p>
                  </div>
                </div>

                <div className="row product-row">
                  <div className="col-sm-6 command-picture-box">
                    <div className="command-img-wrapper">
                      {/* <a href={`/shop/products/${val.slug}`} className=""> */}
                      <a href={`/shop/products/test`} className="">
                        {/* <img className="img-fluid" src={ val.pictures ? val.pictures[0] : null } /> */}
                        <img className="img-fluid" src="/static/images/product2.jpg" />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 command-picture-summary">
                    <h6 className="">Nom du produit</h6>
                    <p className="">
                      <span className="">couleur</span> <br />
                      <span className="">Taille : couleur</span> <br />
                      <span className="">Quantité : 4</span> <br />
                      <span className="">5000 FCFA</span> <br />
                    </p>
                  </div>
                </div>

              </div>

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
            <Button
              variant="contained"
              onClick={this.handleNext}
            >
              {activeStep === steps.length - 1 ? "Continuer achats" : "Suivant"}
            </Button>
          </div>
        </div>

      </div>
    )
  }
}
