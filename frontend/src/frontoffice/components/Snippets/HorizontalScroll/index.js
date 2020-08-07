import React from "react";
import { connect } from "react-redux";
import { Button, TextField, Paper } from "@material-ui/core";
import Grow from '@material-ui/core/Grow';
import Dialog from '../../Snippets/MyDialog'
import debounce from 'lodash.debounce'

import './style.local.css';
import urls from '../../../routes/urls'

export default
@connect((state, props) => ({
}))
class HorizontalScroll extends React.Component {
  constructor() {
    super()

    this.state = {
      items: [...Array(10).keys()],
      hasOverflow: false,
      canScrollLeft: false,
      canScrollRight: false,

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

    this.checkForOverflow = this.checkForOverflow.bind(this)
    this.checkForScrollPosition = this.checkForScrollPosition.bind(this)

    this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000)
    this.debounceCheckForScrollPosition = debounce(
      this.checkForScrollPosition,
      200
    )

    this.container = null
  }

  componentDidMount() {
    this.checkForOverflow()
    this.checkForScrollPosition()

    this.container.addEventListener(
      'scroll',
      this.debounceCheckForScrollPosition
    )
  }

  componentWillUnmount() {
    this.container.removeEventListener(
      'scroll',
      this.debounceCheckForScrollPosition
    )
    this.debounceCheckForOverflow.cancel()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      this.checkForOverflow()
      this.checkForScrollPosition()
    }
  }

  checkForScrollPosition() {
    const { scrollLeft, scrollWidth, clientWidth } = this.container

    this.setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth
    })
  }

  checkForOverflow() {
    const { scrollWidth, clientWidth } = this.container
    const hasOverflow = scrollWidth > clientWidth

    this.setState({ hasOverflow })
  }

  scrollContainerBy(distance) {
    this.container.scrollBy({ left: distance, behavior: 'smooth' })
  }

  buildItems() {
    var products = this.props.products ? this.props.products : []

    return products.map((val, key) => {
      return (
        <li className="item" key={key}>
          <div className='showcase-whole-content'>
            <div className='showcase-pic-wrapper'>
              <a href={`/shop/products/${val.slug}`}>
                <img src={`${val.pictures[0]}`} className='' />
              </a>
            </div>
            <div className='showcase-pic-legend'>
              <h4 style={{ marginBottom: 5 }}>{val.title}</h4>
              <p>
                {/* The call list of products in the specific place */}
                <a href="" className="horizontal_scroll_country">Cameroun</a><br />
                <a href="#" className="horizontal_scroll_add_to_cart" onClick={ this.handleSetDialogOpen.bind(this, event, val)}>Ajouter au panier</a>
              </p>
            </div>
          </div>
        </li>
      )
    })
  }

  buildControls() {
    return (
      <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
        
          <div className="col-6">
            { this.props.title && (
              <h4 className="flash_sale">Ventes flash</h4>)
            }
          </div>
        
        
        <div className="col-6 item-controls">
          <i className="fa fa-chevron-left fa-2x chevron-lft"
            onClick={() => {
              this.scrollContainerBy(-200)
            }}
          ></i>
        

          <i className="fa fa-chevron-right fa-2x chevron-rgt"
            onClick={() => {
              this.scrollContainerBy(200)
            }}
          ></i>
        </div>
      </div>
    )
  }


  handleSetDialogOpen(event, element){
    event.preventDefault()
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
    this.setState({
      quantity: e.target.quantity.value,
      success: true
    })
  }

  handleGotoCart(){
    window.location.href = `${urls.CART}`; 
  }



  render() {

    const { success, dialogOpen, quantity } = this.state
    
    return (
      //<!-- Document Wrapper -->
      <div className="scroll-body">
        <div className="scroll-wrapper">
          {this.buildControls()}
          <ul
            className="item-container"
            ref={node => {
              this.container = node
            }}
          >
            {this.buildItems()}
          </ul>
        </div>

        <Dialog 
          title={ !success ? "Ajouter au panier" : "" } 
          isOpen={ dialogOpen } 
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
