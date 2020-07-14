import React from "react";
import { connect } from "react-redux";
import { Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

import MoneyField from '../../Snippets/Form/PrefixedInput'

import { validate } from './validator'


const useStyles = theme => ({
  root: {
    
  },
  paper: {
    marginTop: 20,
    padding: 20,
  },
  form: {
    paddingTop: 20
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
  }
});


export default
@connect((state, props) => ({
}))
@withStyles(useStyles)
class AddProduct extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Ajouter un produit | Afro Yaca Drum'

    this.state = {
      errors: {},
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
      group : {
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
    }
  }

  convertToSlug(text){
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
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
          value: this.convertToSlug(event.target.value)
        }
      })
    } else {
      this.setState({
        name: {
          value: event.target.value,
          error: false
        },
        slug: {
          value: this.convertToSlug(event.target.value)
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

  handleChangeGroup = (event) => {
    this.setState({
      group: {
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

    if(event.target.value.length < 5){
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
    console.log("checked", event.target.name, event.target.checked)
    this.setState({
      feature: {
        checked : event.target.checked,
        error: true,
        errorMessage: "Le champ doit être contenir au moins 4 caractères"
      }
    })
  }

  handleChangeIsDiscount(event){
    console.log("checked", event.target.name, event.target.checked)
    this.setState({
      discount: {
        checked : event.target.checked,
        error: true,
        errorMessage: "Le champ doit être contenir au moins 4 caractères"
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
      group: this.state.group.value,
      collection: this.state.collection.value,
      material: this.state.material.value,
      is_feature: this.state.feature.checked,
      is_discount: this.state.discount.checked,
    }
    console.log("Form Values", values)
    
    // Call validator here, then return erros
    const errors = validate(values)
    console.log("Form errors", errors)
    this.setState({
      errors: errors
    }) 


  }
  
  

  render() {
    const { classes } = this.props
    console.log("State errors", this.state.errors)

    return (
      <div>
        <section className="container">
          <Paper className={classes.paper}>
            <h2>Ajouter un produit</h2>
            <form className={`${classes.form}`} noValidate autoComplete="off" onSubmit={ this._handleOnSubmit.bind(this) }>
              <div className={`${classes.row} row`}>
                <div className="col-2">
                  <TextField
                    id="product-reference"
                    label="Reférence"
                    error={ this.state.errors ?  this.state.errors.ref ? this.state.errors.ref.error && this.state.errors.ref.error : null : null }
                    name="name"
                    onChange={ this.handleChangeRef.bind(this) }
                    placeholder={"Reférence"}
                    value={this.state.ref.value}
                    type="text"
                    helperText={ this.state.errors ? (this.state.errors.ref ? (this.state.errors.ref.error ? this.state.errors.ref.errorMessage : null) : null) : null }
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
                      <MenuItem value={"homme"}>Homme</MenuItem>
                      <MenuItem value={'femme'}>Femme</MenuItem>
                      <MenuItem value={"enfant"}>Enfant</MenuItem>
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
                      <MenuItem value={"Chapeaux"}>Chapeaux</MenuItem>
                      <MenuItem value={'Robe'}>Robes</MenuItem>
                      <MenuItem value={"Bas"}>Bas</MenuItem>
                    </Select>
                    { this.state.category.error ? <FormHelperText>{this.state.category.errorMessage}</FormHelperText> : null }
                  </FormControl>
                </div>
                <div className="col-3">
                  <FormControl 
                    className={classes.formControl}
                    error={ this.state.group.error && this.state.group.error }
                  >
                    <InputLabel id="product-group-select">Groupe de Categorie</InputLabel>
                    <Select
                      labelId="product-group-select"
                      id="product-group"
                      value={this.state.group.value}
                      onChange={this.handleChangeGroup.bind(this)}
                      fullWidth
                    >
                      <MenuItem value={"group 1"}>Groupe 1</MenuItem>
                      <MenuItem value={'group 2'}>Groupe 2</MenuItem>
                      <MenuItem value={"group 3"}>Groupe 3</MenuItem>
                    </Select>
                    { this.state.group.error ? <FormHelperText>{this.state.group.errorMessage}</FormHelperText> : null }
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
                      <MenuItem value={"ete"}>Eté</MenuItem>
                      <MenuItem value={'automne'}>Automne</MenuItem>
                      <MenuItem value={"printemp"}>Printemp</MenuItem>
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
                <div className={`col-3`}>
                </div>
              </div>
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
                  <Button variant="contained">
                    Annuler
                  </Button>
                </div>
              </div>
            </form>
          </Paper>
        </section>
      </div>
    );
  }
}
