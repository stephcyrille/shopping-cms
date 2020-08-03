import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Modal from '@material-ui/core/Modal';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
// Dialog Modal importations
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'

import MoneyField from '../../Snippets/Form/PrefixedInput'

import urls from '../../Dashboard/routes/urls'

import VarietyForm from '../../Variety/Add/index'

import { addProductStoreActions } from './store'

import Snackbar from '../../Snippets/FlashBagMessage/index'
import appConfig from '../../../config'
import { slugify, objectToFormData } from "../../../utils/generic";




const useStyles = theme => ({
  root: {
    
  },
  paper: {
    marginTop: 20,
    padding: 20,
  },
  form: {
    paddingTop: 0
  },
  row: {
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button_box: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  switch: {
    paddingTop: 20
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 20
  },
  modalPaper: {
    position: 'absolute',
    width: 1000,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `5%`,
    left: `20%`,
  },
});


export default
@connect((state, props) => ({
  addProductStore: state.addProductStore
}))
@withStyles(useStyles)
class AddProduct extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Ajouter un produit | Afro Yaca Drum'

    this.state = {
      ref : {
        textmask: 'REF-2020',
        value: 'REF-2020',
        error: false,
        errorMessage: null
      },
      name : {
        value: '',
        error: false,
        errorMessage: null
      },
      slug : {
        value: '',
        error: false,
        errorMessage: null
      },
      price : {
        value: '',
        error: false,
        errorMessage: null
      },
      description : {
        value: '',
        error: false,
        errorMessage: null
      },
      category : {
        value: '',
        error: false,
        errorMessage: null
      },
      catalog : {
        value: '',
        error: false,
        errorMessage: null
      },
      type : {
        value: '',
        error: false,
        errorMessage: null
      },
      collection : {
        value: '',
        error: false,
        errorMessage: null
      },
      material : {
        value: '',
        error: false,
        errorMessage: null
      },
      feature : {
        value: '',
        checked: false,
        error: false,
        errorMessage: null
      },
      discount : {
        value: '',
        checked: false,
        error: false,
        errorMessage: null
      },
      // for pushing the element on trending mainmenu
      trending : {
        value: '',
        checked: false,
        error: false,
        errorMessage: null
      },

      varieties: [],

      catalogs_data: [],
      categories_data: [],
      types_data: [],
      collections_data: [],
      colors_data: [],
      sizes_data: [],

      openModal : false,
      openConfirmModal : false,

      delectedItemID: null,

      editMode: false,
      initialsValues: null,

      snack_open: false,
      snack_message: null,
      snack_color: null,
    }
  }

  componentWillMount(){
    // TODO Create an API whose fetch theses value one time, with a query filter due to the paginator
    this._fetchCatalogs()
    this._fetchCategories()
    this._fetchTypes()
    this._fetchCollections()
    this._fetchColors()
    this._fetchSizes()
  }

  _fetchCatalogs(){
    const service = "catalog"
    const url = `${ appConfig.LISTSBASEURL }${service}`
    window.axios
    .get(`${url}`)
    .then(response => {
      this.setState({
        catalogs_data: response.data.results
      })
    })
    .catch(error => {
      console.error(error);
    });
  }

  _fetchCategories(){
    const service = "category"
    const url = `${ appConfig.LISTSBASEURL }${service}`
    window.axios
    .get(`${url}`)
    .then(response => {
      this.setState({
        categories_data: response.data.results
      })
    })
    .catch(error => {
      console.error(error);
    });
  }

  _fetchTypes(){
    const service = "group"
    const url = `${ appConfig.LISTSBASEURL }${service}`
    window.axios
    .get(`${url}`)
    .then(response => {
      this.setState({
        types_data: response.data.results
      })
    })
    .catch(error => {
      console.error(error);
    });
  }

  _fetchCollections(){
    const service = "collection"
    const url = `${ appConfig.LISTSBASEURL }${service}`
    window.axios
    .get(`${url}`)
    .then(response => {
      this.setState({
        collections_data: response.data.results
      })
    })
    .catch(error => {
      console.error(error);
    });
  }

  _fetchColors(){
    const service = "color"
    const url = `${ appConfig.LISTSBASEURL }${service}`
    window.axios
    .get(`${url}`)
    .then(response => {
      this.setState({
        colors_data: response.data.results
      })
    })
    .catch(error => {
      console.error(error);
    });
  }

  _fetchSizes(){
    const service = "size"
    const url = `${ appConfig.LISTSBASEURL }${service}`
    window.axios
    .get(`${url}`)
    .then(response => {
      this.setState({
        sizes_data: response.data.results
      })
    })
    .catch(error => {
      console.error(error);
    });
  }


  handleChangeRef = (event) => {
    event.preventDefault();
    this.setState({
      ref: {
        value: event.target.value,
        error: false
      }
    })
  }


  handleChangeName = (event) => {
    event.preventDefault();

    if(event.target.value.length < 5){
      this.setState({
        name: {
          value : event.target.value,
          error: true,
          errorMessage: "Le champ doit être contenir au moins 4 caractères"
        },
        slug: {
          value: slugify(event.target.value)
        }
      })
    } else {
      this.setState({
        name: {
          value: event.target.value,
          error: false
        },
        slug: {
          value: slugify(event.target.value)
        }
      })
    }

    console.log("Event", event.target.value, this.state.name.value)
  }

  handleChangePrice = (event) => {
    this.setState({
      price: {
        value: event.target.value,
        error: false
      }
    })
  }


  handleChangeDescription = (event) => {
    this.setState({
      description: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeCategory = (event) => {
    this.setState({
      category: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeCatalog = (event) => {
    this.setState({
      catalog: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeType = (event) => {
    this.setState({
      type: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeCollection = (event) => {
    this.setState({
      collection: {
        value: event.target.value,
        error: false
      }
    })
  }


  handleChangeMaterial = (event) => {
    event.preventDefault();

    if(event.target.value.length < 2){
      this.setState({
        material: {
          value : event.target.value,
          error: true,
          errorMessage: "Le champ doit être contenir au moins 4 caractères"
        }
      })
    } else {
      this.setState({
        material: {
          value: event.target.value,
          error: false
        }
      })
    }

    console.log("Event", event.target.value, this.state.material.value)
  }


  handleChangeIsFeature(event){
    this.setState({
      feature: {
        checked : event.target.checked,
        error: false,
        errorMessage: null
      }
    })
  }

  handleChangeIsDiscount(event){
    this.setState({
      discount: {
        checked : event.target.checked,
        error: false,
        errorMessage: null
      }
    })
  }
  
  handleChangeIsTrending(event){
    this.setState({
      trending: {
        checked : event.target.checked,
        error: false,
        errorMessage: null
      }
    })
  }

  _handleOnSubmit(event){
    event.preventDefault();
    // console.log("Form Values", event.target)
    // Make the validation process here
    var values = {
      ref: this.state.ref.value,
      name: this.state.name.value,
      slug: this.state.slug.value,
      price: this.state.price.value,
      description: this.state.description.value,
      catalog: this.state.catalog.value,
      category: this.state.category.value,
      type: this.state.type.value,
      collection: this.state.collection.value,
      material: this.state.material.value,
      is_feature: this.state.feature.checked,
      is_discount: this.state.discount.checked,
      trending: this.state.trending.checked,
    }
    console.log("Form Values", values)
    if( !values.ref ){
      this.setState({
        ref: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
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
    if( !values.description ){
      this.setState({
        description: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.price ){
      this.setState({
        price: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.material ){
      this.setState({
        material: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.catalog ){
      this.setState({
        catalog: {
          error: true,
          errorMessage: "Veuillez selectionner un élement"
        },
      })
    }
    if( !values.category ){
      this.setState({
        category: {
          error: true,
          errorMessage: "Veuillez selectionner un élement"
        },
      })
    }
    if( !values.type ){
      this.setState({
        type: {
          error: true,
          errorMessage: "Veuillez selectionner un élement"
        },
      })
    }

    values.varieties = this.props.addProductStore.varieties
    console.log("Produc add Form values ", values)

    if(
      (values.ref) !== "" &&
      (values.slug) !== "" &&
      (values.name) !== "" &&
      (values.description) !== "" &&
      (values.price) !== "" &&
      (values.material) !== "" &&
      (values.catalog) !== "" &&
      (values.category) !== "" &&
      (values.type) !== ""
    ){
      // SUBMIT THERE
      const service = "product/add"
      const formUrl = `${appConfig.FORMBASEURL}${service}`

      const data = {
        "product": {
          "ref": values.ref,
          "slug": values.slug,
          "title": values.name,
          "price": values.price,
          "description": values.description,
          "catalog": values.catalog,
          "category": values.category,
          "type": values.type,
          "collection": values.collection,
          "material": values.material,
          "is_feature": values.is_feature,
          "is_discount": values.is_discount,
          "trending": values.trending,
        },
        "varieties_list": values.varieties,
        "variety_number": values.varieties.length
      }
      
      const formData = objectToFormData(data)
      // SUBMIT THERE
      this.postToApi(formUrl, formData)
    }
  }


  postToApi(form_base_url, data){
    window
    .file_axios.post(`${form_base_url}`, data)
      .then(() => {
          this.setState({
            snack_open: true,
            snack_message: "Produit enregistré avec success",
            snack_color: "success"
          })
          this.props.dispatch(push(`${urls.PRODUCT}`, { snack_open: true }));
          this.props.dispatch(addProductStoreActions.initializeState())
        }
      )
      .catch((error) =>{
          let response = error.response.data
          if('slug' in response){
            let text = response.slug
            this.setState({
              snack_message: text,
              snack_color: "error",
              snack_open: true,
            })
          }
          
          if('title' in response){
            let text = response.title
            this.setState({
              snack_message: text,
              snack_color: "error",
              snack_open: true,
            })
          }
        }
      )
  }
  
  handleOpenModal(){
    this.setState({
      openModal: true 
    })
  }


  handleCloseModal(){
    this.setState({
      openModal: false ,
      openConfirmModal : false,
      editMode: false
    })
  }

  handleClose = () => {
    this.setState({ snack_open: false });
  };

  
  _handleEditVariety(id){
    // Get variety with ID
    // Initial values on variety add form store
    // Set Modal to open
    // Inside the value component, retrieve defaults values inside the component will mount or constructor
    const { varieties} = this.props.addProductStore
    var array = varieties
    const variety = array.filter(item => item.id === id);

    // Set each pictures from file to url
    console.log("Edt item²²²²²²²²²²²²²² vatriety", variety)

    const initialsValues = {
      id : variety[0].id,
      color: variety[0].color,
      size: variety[0].size,
      quantity: variety[0].quantity,
      picture1: URL.createObjectURL(variety[0].picture1),
      picture2: URL.createObjectURL(variety[0].picture2),
      picture3: URL.createObjectURL(variety[0].picture3),
      picture4: URL.createObjectURL(variety[0].picture4),
    }
    
    this.setState({
      openModal: true,
      editMode: true,
      initialsValues: initialsValues
    })
    
    // console.log("Edt item²²²²²²²²²²²²²² vatriety", variety, this.state)
  }
  
  _handleDeleteVariety(id){
    // e.preventDefault()
    
  console.log("Delete item²²²²²²²²²²²²²²")
  
   this.setState({
    openConfirmModal : true,
    delectedItemID: id
   })
  }
  
  _handleDeleteVarietyConfirm(){
    // e.preventDefault()
    const { varieties} = this.props.addProductStore
    const id = this.state.delectedItemID

    console.log("Delete item²²²²²²²²²²²²²²Confirmed")

    var array = varieties

    const newArray = array.filter(item => item.id !== id);

    this.props.dispatch(addProductStoreActions.addVariety(newArray))

    this.setState({
      openConfirmModal : false,
     })
    
  }

  _goToProduct(){
    this.props.dispatch(push(`${urls.PRODUCT}`))
  }

  

  render() {
    const { classes } = this.props
    const { varieties} = this.props.addProductStore
    const { catalogs_data, categories_data, types_data, collections_data, colors_data, sizes_data } = this.state


    
    return (
      <div>
        { this.state.snack_open &&
            <Snackbar 
              open={this.state.snack_open} 
              message={this.state.snack_message} 
              color={this.state.snack_color}
              closePopup={this.handleClose.bind(this)} 
            />
        }
        <section className="container">
          <Paper className={classes.paper}>
            <h2 style={{ paddingLeft: 20 }}>Ajouter un produit</h2>
            <hr />
            <form className={`${classes.form}`} noValidate autoComplete="off" onSubmit={ this._handleOnSubmit.bind(this) }>
              <div className={`${classes.row} row`}>
                <div className="col-2">
                  <TextField
                    id="product-reference"
                    label="Reférence"
                    error={ this.state.ref.error && this.state.ref.error }
                    name="name"
                    onChange={ this.handleChangeRef.bind(this) }
                    placeholder={"Reférence"}
                    value={this.state.ref.value}
                    type="text"
                    helperText={ this.state.ref.error ? this.state.ref.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="standard-error-helper-text"
                    label="Nom du produit"
                    error={ this.state.name.error && this.state.name.error }
                    name="name"
                    onChange={ this.handleChangeName.bind(this) }
                    placeholder={"Nom du produit"}
                    value={this.state.name.value}
                    type="text"
                    helperText={ this.state.name.error ? this.state.name.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-3">
                  <TextField
                    id="product-slug"
                    label="slug"
                    error={ this.state.slug.error && this.state.slug.error }
                    name="slug"
                    placeholder={"slug"}
                    value={this.state.slug.value}
                    type="text"
                    helperText={ this.state.slug.error ? this.state.slug.errorMessage : null }
                    required
                    disabled
                    fullWidth
                  />
                </div>
                <div className="col-3">
                <TextField
                  label="Prix"
                  error={ this.state.price.error && this.state.price.error }
                  value={this.state.price.value}
                  onChange={this.handleChangePrice.bind(this)}
                  name="price"
                  id="product-price"
                  InputProps={{
                    inputComponent: MoneyField,
                  }}
                  helperText={ this.state.price.error ? this.state.price.errorMessage : null }
                  required
                  fullWidth
                />
                </div>
              </div>

              <div className={`row ${classes.row}`}>
                <div className="col-12">
                  <TextField
                    id="product-description"
                    label="Description"
                    type="text"
                    rows={3}
                    error={ this.state.description.error && this.state.description.error }
                    value={this.state.description.value}
                    onChange={ this.handleChangeDescription.bind(this) }
                    helperText={ this.state.description.error ? this.state.description.errorMessage : null }
                    variant="outlined"
                    multiline
                    required
                    fullWidth
                  />
                </div>
              </div>

              <div className={`row ${classes.row}`}>
                <div className="col-3">
                  <FormControl 
                    className={classes.formControl}
                    error={ this.state.catalog.error && this.state.catalog.error }
                  >
                    <InputLabel id="product-catalog-select">Catalogue</InputLabel>
                    <Select
                      labelId="product-catalog-select"
                      id="product-catalog"
                      value={this.state.catalog.value}
                      onChange={this.handleChangeCatalog.bind(this)}
                      fullWidth
                    >
                      {
                        catalogs_data.map((val, key) => {
                          return (
                            <MenuItem value={val.id} key={key}>{val.title}</MenuItem>
                          )
                        })
                      }
                    </Select>
                    { this.state.catalog.error ? <FormHelperText>{this.state.catalog.errorMessage}</FormHelperText> : null }
                  </FormControl>
                </div>
                <div className="col-3">
                  <FormControl 
                    className={classes.formControl}
                    error={ this.state.category.error && this.state.category.error }
                  >
                    <InputLabel id="product-category-select">Categorie</InputLabel>
                    <Select
                      labelId="product-category-select"
                      id="product-category"
                      value={this.state.category.value}
                      onChange={this.handleChangeCategory.bind(this)}
                      fullWidth
                    >
                      {
                        categories_data.map((val, key) => {
                          return (
                            <MenuItem value={val.id} key={key}>{val.title}</MenuItem>
                          )
                        })
                      }
                    </Select>
                    { this.state.category.error ? <FormHelperText>{this.state.category.errorMessage}</FormHelperText> : null }
                  </FormControl>
                </div>
                <div className="col-3">
                  <FormControl 
                    className={classes.formControl}
                    error={ this.state.type.error && this.state.type.error }
                  >
                    <InputLabel id="product-type-select">Type de produit</InputLabel>
                    <Select
                      labelId="product-type-select"
                      id="product-type"
                      value={this.state.type.value}
                      onChange={this.handleChangeType.bind(this)}
                      fullWidth
                    >
                      {
                        types_data.map((val, key) => {
                          return (
                            <MenuItem value={val.id} key={key}>{val.title}</MenuItem>
                          )
                        })
                      }
                    </Select>
                    { this.state.type.error ? <FormHelperText>{this.state.type.errorMessage}</FormHelperText> : null }
                  </FormControl>
                </div>
                <div className="col-3">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="product-collection-select">Collection</InputLabel>
                    <Select
                      labelId="product-collection-select"
                      id="product-collection"
                      value={this.state.collection.value}
                      onChange={this.handleChangeCollection.bind(this)}
                      fullWidth
                    >
                      {
                        collections_data.map((val, key) => {
                          return (
                            <MenuItem value={val.id} key={key}>{val.title}</MenuItem>
                          )
                        })
                      }
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className={`row ${classes.row}`} style={{ paddingLeft: 10 }}>
                <div className="col-3">
                  <TextField
                    id="product-material"
                    label="Matière du produit"
                    error={ this.state.material.error ? this.state.material.error : this.state.material.error }
                    name="name"
                    onChange={ this.handleChangeMaterial.bind(this) }
                    placeholder={"Matière"}
                    value={this.state.material.value}
                    type="text"
                    helperText={ this.state.material.error ? this.state.material.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className={`col-3 ${classes.switch}`}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch checked={this.state.feature.checked} onChange={this.handleChangeIsFeature.bind(this)} name="feature" />}
                      label="Populaire"
                    />
                  </FormGroup>
                </div>
                <div className={`col-3 ${classes.switch}`}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch checked={this.state.discount.checked} onChange={this.handleChangeIsDiscount.bind(this)} name="discount" />}
                      label="En promotion"
                    />
                  </FormGroup>
                </div>
                <div className={`col-3 ${classes.switch}`}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch checked={this.state.trending.checked} onChange={this.handleChangeIsTrending.bind(this)} name="trending" />}
                      label="Tendance"
                    />
                  </FormGroup>
                </div>
              </div>

              <div className={`${classes.row} row`}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  endIcon={<AddCircleOutlineRoundedIcon/>}
                  onClick={this.handleOpenModal.bind(this)}
                  disabled={varieties.length === appConfig.VARIETIES_MAX_NUMBER && true}
                >
                  Ajouter Variété
                </Button>
              </div>

              {
                varieties.length !== 0 ? (
                  <div className={`${classes.row} row`} style={{ width: "100%" }}>
                    <div style={{ width: "100%", padding: "0 20px 20px 20px", }}>
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">N°</th>
                            <th scope="col">Couleur</th>
                            <th scope="col">Taille</th>
                            <th scope="col">Quantité</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            varieties.map((val,key) => 
                            <tr key={key}>
                              <th scope="row">{val.id}</th>
                              <th scope="row">{ val.color ? colors_data.find(element => element.id === val.color).title : null }</th>
                              <td>{ val.size ? sizes_data.find(element => element.id === val.size).name : null }</td>
                              <td>{val.quantity}</td>
                              <td style={{ paddingLeft: 0, paddingTop: 0 }}>
                                <Button 
                                  className='btn btn-link'
                                  onClick={ (e) =>  e.preventDefault(), this._handleEditVariety.bind(this, val.id) }
                                >
                                  <EditIcon />
                                </Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button 
                                  className='btn btn-link'
                                  onClick={ (e) =>  e.preventDefault(), this._handleDeleteVariety.bind(this, val.id) }
                                >
                                  <DeleteIcon />
                                </Button>
                              </td>
                            </tr>)
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null
              }

              <div className={`${classes.row} row`}>
                <div className={`${classes.button_box} mr-auto mx-auto`}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    type="submit"
                  >
                    Enregistrer
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button 
                    variant="contained"
                    onClick={ this._goToProduct.bind(this) }
                  >
                    Annuler
                  </Button>
                </div>
              </div>
            </form>
          </Paper>
        </section>

        {/* Modal variety add */}
        <Modal
          open={this.state.openModal}
          onClose={this.handleCloseModal.bind(this)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.modalPaper}>  
            <VarietyForm 
              handleClose={this.handleCloseModal.bind(this)}
              initialsValues={this.state.initialsValues}
              editMode={this.state.editMode}
            />
          </div>
        </Modal>

        <Dialog
          open={this.state.openConfirmModal}
          onClose={this.handleCloseModal.bind(this)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirmer la suppression"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Êtes-vous sur de vouloir supprimer la variété { this.state.delectedItemID } ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseModal.bind(this)} color="primary">
              Annuller
            </Button>
            <Button onClick={this._handleDeleteVarietyConfirm.bind(this)} color="primary">
              Supprimer
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
