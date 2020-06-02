import React from "react";
import { connect } from "react-redux";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import { Collapse } from 'antd';

import { step3CStoreActions } from './store';
import './style.local.css';

const { Panel } = Collapse;

export default
@connect((state, props) => ({
  step3CStore: state.step3CStore,
}))
class Step3 extends React.Component {
  state = {
      expandIconPosition: 'right',
  };
  
  
  renderMoneyIconWithTitle(src, title, width){
    return (
      <div>
        <img src={src} style={{ marginRight: 10 }} width={width} />
        {/* <span>{title}</span> */}
      </div>
    )
  }

  renderIconWithTitle(fontAwesomeClass, title){
    return (
      <div>
        <i className={fontAwesomeClass} style={{ marginRight: 10 }}></i>
        <span>{title}</span>
      </div>
    )
  }

  _handleCheckBoxChange(e){
    console.log("Targettttttt", e.target.value)
    this.props.dispatch(step3CStoreActions.setChangeBoxValue(e.target.value))
  }



  render() {
    const { expandIconPosition } = this.state;

    
    return (
      //<!-- Document Wrapper -->
      <div className="step3">
        <h2>Methodes de paiement</h2> 
        <div className='step3-detail'>
          <p>
            <span>
              Vous seriez rediriger vers le système de paiement sécurisé de votre banque pour vérifier vos informations. 
            </span> 
            <br /> 
            <span>
              <b>NB: </b> Notre système est sécurisé et nous travaillons chaque jour à l'amélioration de celui ci pour éviter tout délits.
            </span> 
          </p> 
        </div> 
        <RadioGroup aria-label="payment" name="payment" onChange={ this._handleCheckBoxChange.bind(this) }>
          <Collapse
            defaultActiveKey={['1']}
            expandIconPosition={expandIconPosition}
          >
              <Panel header={ this.renderIconWithTitle('far fa-money-bill-alt', 'Paiement à la livraison') } key="1">
                <FormControlLabel value="pay_to_go" control={<Radio />} label="Payer cash à la livraison." />
                <br /> 
                <span>
                  <b>NB: </b> Bien vouloir prévoir la monnaie de votre achat à fin de nous aider à mieux assurer votre commande.
                </span> 

              </Panel>
              <Panel header={ this.renderIconWithTitle('fab fa-apple-pay', 'Paiement par mobile money') } key="2">
                <div className="mompay-wrapper">
                  <p>
                    <span>
                      Choisir votre operateur*. 
                    </span> 
                    <br /> 
                  </p> 
                  
                  <FormControlLabel value="momo" control={<Radio />} label={ this.renderMoneyIconWithTitle("/static/images/mtn.png", 'MTN Mobile Money', '125px') } /><br /> 
                  <FormControlLabel value="om" control={<Radio />} label={ this.renderMoneyIconWithTitle("/static/images/logo-om.png", 'Orange Money', '50px') } />
                  
                  {/* <a href="#" data-toggle="tooltip" data-placement="bottom" title="Payer avec OrangeMoney">
                    <img src='/static/images/logo-om.png' width="50px" className='logo-momo' />
                  </a>
                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="Payer avec MTN Mobile Money">
                    <img src='/static/images/mtn.png' width="125px" className='logo-momo' />
                  </a> */}
                </div>
              </Panel>


              <Panel header={ this.renderIconWithTitle('far fa-credit-card', 'Paiement par carte bancaire') } key="3">
                <div>
                  <div>
                    <FormControlLabel value="cart" control={<Radio />} label="Payer par carte bancaire." />
                    <br /> 
                  </div>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        id="cardNumber"
                        label="Card number"
                        fullWidth
                        autoComplete="cc-number"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember credit card details for next time"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Panel>

          </Collapse>
        </RadioGroup>
      </div>
    );
  }
}
