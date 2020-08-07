import React from "react";
import { connect } from "react-redux";
import { Button, TextField, Paper } from "@material-ui/core";
import Grow from '@material-ui/core/Grow';
import Dialog from '../../Snippets/MyDialog'
import _ from "underscore";

import urls from '../../../routes/urls'
import './style.local.css';



export default 
@connect((state, props) => ({}))
class FeatureHome extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dialogOpen: false,
      product: null,
      quantity: {
        value: 0,
        error: false,
        errorMessage: null,
      },
      // Toggle when adding on cart is a success
      success: false
    }
  }


  handleSetDialogOpen(element){
    this.setState({
      dialogOpen: true,
      product: element
    })
  }

  handleSetDialogClose(){
    this.setState({
      dialogOpen: false,
      product: null,
      success: false,
      quantity: {
        value: 0,
        error: false,
        errorMessage: null,
      }
    })
  }

  handleChangeQuantity(e){
    this.setState({
      quantity: e.target.value,
    })
  }

  handleSubmit(e){
    e.preventDefault()
    console.log("Form Submited!!!!!!", e.target);
    this.setState({
      quantity: e.target.quantity.value,
      success: true
    })
  }

  handleGotoCart(){
    window.location.href = `${urls.CART}`; 
  }


  render() {
    var products = this.props.products
    const { quantity, success } = this.state

    return (
      <div className="features_items">
        <h2 className="title text-center" style={{ opacity: 0 }}>Features Items</h2>
        <div className="row">
          { !_.isEmpty(products) ? 
            products
              .map((val, key) => {
                return (
                  <div className="col-sm-3" key={key}>
                    <div className="product-image-wrapper">
                      <div className="single-products">
                          <div className="productinfo text-center">
                            <img 
                              src={ 
                                    val.pictures ?
                                      val.pictures[0]
                                      : 
                                      "" 
                                  } 
                              alt="" 
                            />
                            <h2>{val.price} {'FCFA'}</h2>
                            <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>{val.title}</p>
                          </div>
                          <a 
                            href={`/shop/products/${val.slug}`}
                            className="product-overlay"
                          >
                            <div className="overlay-content">
                              <h2>{val.price} {'FCFA'}</h2>
                              {/* <p>{val.title}</p> */}
                              <a href={`/shop/products/${val.slug}`} className="btn btn-default add-to-cart"><i className="fa fa-eye"></i>Details</a>
                            </div>
                          </a>
                      </div>
                      <div className="choose">
                        <ul className="nav nav-pills nav-justified">
                          <li>
                            <a 
                              href="#" 
                              data-toggle="tooltip" 
                              data-placement="top" 
                              title="Ajouter au panier"
                              className="custom-tooltip"
                              onClick={ this.handleSetDialogOpen.bind(this, val)}
                            >
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                          </li>
                          <li>
                            <a 
                              href="" 
                              data-toggle="tooltip" 
                              data-placement="top" 
                              title="Ajouter à la liste des souhaits" 
                              className="custom-tooltip"
                            >
                              <i className="fa fa-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>  
                )
              }) : null
          }

        </div>

        <Dialog 
          title={ !success ? "Ajouter au panier" : "" } 
          isOpen={ this.state.dialogOpen } 
          onClose={ this.handleSetDialogClose.bind(this) } 
          style={{ width: "400px" }}
        >
          <Paper style={{ padding: '2em' }}>
            {
              !success ?
              (
                <form className="row" style={{ marginLeft: 0, marginRight: 0 }} onSubmit={ this.handleSubmit.bind(this) } >
                  <div className="col-6">
                    <img 
                      src={ 
                        this.state.product?
                          this.state.product.pictures ?
                            this.state.product.pictures[0]
                            : 
                            ""
                          :
                          "" 
                        } 
                      alt="" 
                      width="250"
                      style={{ margin: "0 auto" }}
                    />
                  </div>

                  <div className="col-6">
                    <TextField 
                      defaultValue={1}
                      label="Quantité"
                      name="quantity"
                      placeholder="Quantité"
                      type="number" 
                      error={ this.state.quantity.error && this.state.quantity.error } 
                      helperText={ this.state.quantity.error ? this.state.slug.quantity : null } 
                      required
                      fullWidth
                    />
                    <div className="row" style={{ marginLeft: 0, marginRight: 0, marginTop: 20 }}>
                      <label style={{ display: "block", width: "100%" }}>Selectionner la couleur</label>
                      <img 
                        src={ 
                          this.state.product?
                            this.state.product.pictures ?
                              this.state.product.pictures[0]
                              : 
                              ""
                            :
                            "" 
                          } 
                        alt="" 
                        width="40" 
                        height="40" 
                      />
                    </div>
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      style={{ marginTop: 10 }}
                    >
                      Ajouter au panier
                    </Button>
                  </div>
                </form>
              )
              :
              <Grow 
                in={success}
              >
                <div
                  style={{ transformOrigin: '0 0 0', width: 544 }}
                  {...(success ? { timeout: 1500 } : {})}
                >
                  <i className="far fa-check-circle fa-4x text-success" style={{ display: "block", textAlign: "center", marginBottom: 20 }}></i>
                  <h4 className="text-center" style={{ marginBottom: 20 }}>
                  { quantity } { this.state.product ? this.state.product.title : "" }  a bien été ajouté au panier!</h4>
                  <div className={` mr-auto mx-auto`} style={{ textAlign: "center", marginTop: 20 }}>
                    <Button 
                      onClick={ this.handleGotoCart.bind(this) }
                      className=""
                      variant="outlined"
                    >
                      Aller au panier
                    </Button>
                    &nbsp;
                    &nbsp;
                    <Button 
                      onClick={ this.handleSetDialogClose.bind(this) }
                      className=""
                      variant="outlined"
                      color="primary"
                    >
                      continuer vos achats
                    </Button>
                  </div>
                </div>
              </Grow>
            }

            { !success && 
              <div className="row" style={{ marginTop: '2em', marginLeft: 0, marginRight: 0 }}>
                <Button 
                  onClick={ this.handleSetDialogClose.bind(this) }
                  className="mr-auto mx-auto"
                >
                  Annuler
                </Button>
              </div>
            }
          </Paper>
        </Dialog>
      </div>
    );
  }
}

