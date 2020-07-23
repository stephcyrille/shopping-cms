import React from "react";
import { connect } from "react-redux";
import { Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
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

// Rich text importation
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

import MoneyField from '../../Snippets/Form/PrefixedInput'


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
class AddArticle extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Ajouter un produit | Afro Yaca Drum'
    this.refEditor = React.createRef(null);
    this.state = {
      ref : {
        textmask: 'REF-2020',
        value: 'REF-2020',
        error: false,
        errorMessage: null
      },
      title : {
        value: '',
        error: false,
        errorMessage: null
      },
      slug : {
        value: '',
        error: false,
        errorMessage: null
      },
      guess : {
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

      varieties: [],

      openModal : false,
      openConfirmModal : false,

      delectedItemID: null,

      editMode: false,
      initialsValues: null,

      content: "content",
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


  handleChangeTitle = (event) => {
    event.preventDefault();

    if(event.target.value.length < 5){
      this.setState({
        title: {
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
        title: {
          value: event.target.value,
          error: false
        },
        slug: {
          value: this.convertToSlug(event.target.value)
        }
      })
    }
  }

  handleChangeGuess = (event) => {
    this.setState({
      guess: {
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
    // var values = {
    //   ref: this.state.ref.value,
    //   name: this.state.name.value,
    //   slug: this.state.slug.value,
    //   price: this.state.price.value,
    //   description: this.state.description.value,
    //   catalog: this.state.catalog.value,
    //   category: this.state.category.value,
    //   group: this.state.group.value,
    //   collection: this.state.collection.value,
    //   material: this.state.material.value,
    //   is_feature: this.state.feature.checked,
    //   is_discount: this.state.discount.checked,
    // }
    var refvalue = this.refEditor.current.value

    console.log("Form Values", refvalue)
    // if( !values.ref ){
    //   this.setState({
    //     ref: {
    //       error: true,
    //       errorMessage: "Le champ ne doit pas être vide"
    //     },
    //   })
    // }
    // if( !values.name ){
    //   this.setState({
    //     name: {
    //       error: true,
    //       errorMessage: "Le champ ne doit pas être vide"
    //     },
    //   })
    // }
    // if( !values.description ){
    //   this.setState({
    //     description: {
    //       error: true,
    //       errorMessage: "Le champ ne doit pas être vide"
    //     },
    //   })
    // }


    // console.log("Produc add Form values ", values)

    // Call validator here, then return erros
    // const validator = validator(valuer) 

  }


  updateContent(value) {
    console.log("Rich text value============", value, this.refEditor)
    this.setState({content: this.refEditor.current.value})
  }
  

  render() {
    const { classes } = this.props
    const config = {
      readonly: false, // all options from https://xdsoft.net/jodit/doc/
      enableDragAndDropFileToEditor: true,
      uploader: {
        url: "http://google.com", //URL pic upload
        // data: {
        //   dir: "/papa/" // Directory where update is don
        // },
        // baseurl: "relativePathURL",
        // process: (response) => {
        //   let files = [];
        //   response.list.map((file) => {
        //     files.push(file.name);
        //   });
        //   return { 
        //     files,
        //     path: relativePathURL,
        //     baseurl: '/content/assets',
        //     error: (response.success ? 0 : 1),
        //     msg: response.message
        //   };
        // },
        // defaultHandlerSuccess: (response) => {      
        //   if (response.files && response.files.length) {
        //     for (let i = 0; i < response.files.length; i++) {
        //       let full_file_path = response.path + response.files[i];
        //       // this.selection.insertImage(full_file_path);
        //     }
        //   }
        // }
      }
    }
    
    return (
      <div>
        <section className="container">
          <Paper className={classes.paper}>
            <h2>Ajouter un article</h2>
            <form className={`${classes.form}`} noValidate autoComplete="off" onSubmit={ this._handleOnSubmit.bind(this) }>
              <div className={`${classes.row} row`}>
                <div className="col-4">
                  <TextField
                    id="title-error-helper-text"
                    label="Titre de l'article"
                    error={ this.state.title.error && this.state.title.error }
                    name="title"
                    onChange={ this.handleChangeTitle.bind(this) }
                    placeholder={"Titre de l'article"}
                    value={this.state.title.value}
                    type="text"
                    helperText={ this.state.title.error ? this.state.title.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="article-slug"
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
                <div className="col-4">
                  <TextField
                    id="guess"
                    label="Artiste en vedette"
                    error={ this.state.guess.error && this.state.guess.error }
                    name="guess"
                    placeholder={"Artiste en vedette"}
                    onChange={ this.handleChangeGuess.bind(this) }
                    value={this.state.guess.value}
                    type="text"
                    helperText={ this.state.guess.error ? this.state.guess.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
              </div>
              <div className={`${classes.row} row`} style={{ marginTop: 20 }}>
                <div className="col-4">
                  <TextField
                    id="datetime-publication"
                    label="Date de parution"
                    type="datetime-local"
                    defaultValue="2020-07-22T10:30"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                    fullWidth
                  />
                  {/* <TextField
                    id="title_date-error-helper-text"
                    label="Date de parution"
                    error={ this.state.title.error && this.state.title.error }
                    name="title"
                    onChange={ this.handleChangeTitle.bind(this) }
                    placeholder={"Date de parution"}
                    value={this.state.title.value}
                    type="text"
                    helperText={ this.state.title.error ? this.state.title.errorMessage : null }
                    required
                    fullWidth
                  /> */}
                </div>
                <div className="col-4">
                  <TextField
                    id="title_date-error-helper-text"
                    label="Auteur"
                    error={ this.state.title.error && this.state.title.error }
                    name="title"
                    onChange={ this.handleChangeTitle.bind(this) }
                    placeholder={"Auteur de l'article"}
                    value={this.state.title.value}
                    type="text"
                    helperText={ this.state.title.error ? this.state.title.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="guess"
                    label="Crédit photos"
                    error={ this.state.guess.error && this.state.guess.error }
                    name="guess"
                    placeholder={"Photographies"}
                    onChange={ this.handleChangeGuess.bind(this) }
                    value={this.state.guess.value}
                    type="text"
                    helperText={ this.state.guess.error ? this.state.guess.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
              </div>

              <div className={`row ${classes.row}`} style={{ marginTop: 20 }}>
                <div className="col-12">
                  <label>Résumé de l'article</label>
                  <JoditEditor
                    ref={this.refEditor}
                    // value={this.state.content}
                    tabIndex={2} // tabIndex of textarea
                    // onChange={ this.updateContent.bind(this) }
                    config={config}
                    // onChange={newContent => {}}
                  />
                </div>
              </div>
              
              <div className={`row ${classes.row}`} style={{ marginTop: 20 }}>
                <div className="col-12">
                  <label>Contenu de l'article</label>
                  <JoditEditor
                    ref={this.refEditor}
                    // value={this.state.content}
                    tabIndex={2} // tabIndex of textarea
                    // onChange={ this.updateContent.bind(this) }
                    config={config}
                    // onChange={newContent => {}}
                  />
                </div>
              </div>


              <div className={`row ${classes.row}`}>
                <div className="col-3">
                  <FormControl 
                    className={classes.formControl}
                    error={ this.state.catalog.error && this.state.catalog.error }
                  >
                    <InputLabel id="product-catalog-select">Produit en vedette 1</InputLabel>
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
                    error={ this.state.catalog.error && this.state.catalog.error }
                  >
                    <InputLabel id="product-catalog-select">Produit en vedette 2</InputLabel>
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
                    error={ this.state.catalog.error && this.state.catalog.error }
                  >
                    <InputLabel id="product-catalog-select">Produit en vedette 3</InputLabel>
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
                    error={ this.state.catalog.error && this.state.catalog.error }
                  >
                    <InputLabel id="product-catalog-select">Produit en vedette 4</InputLabel>
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
              </div>
              <div className={`row ${classes.row}`} style={{ paddingLeft: 10 }}>
                <div className="col-6">
                  <TextField
                    id="title-error-helper-text"
                    label="URL Facebook"
                    error={ this.state.title.error && this.state.title.error }
                    name="title"
                    onChange={ this.handleChangeTitle.bind(this) }
                    placeholder={"Lien partage Facebook"}
                    value={this.state.title.value}
                    type="text"
                    helperText={ this.state.title.error ? this.state.title.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-6">
                  <TextField
                    id="title-error-helper-text"
                    label="URL Twitter"
                    error={ this.state.title.error && this.state.title.error }
                    name="title"
                    onChange={ this.handleChangeTitle.bind(this) }
                    placeholder={"Lien partage Twitter"}
                    value={this.state.title.value}
                    type="text"
                    helperText={ this.state.title.error ? this.state.title.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-6">
                  <TextField
                    id="title-error-helper-text"
                    label="URL Whatsapp"
                    error={ this.state.title.error && this.state.title.error }
                    name="title"
                    onChange={ this.handleChangeTitle.bind(this) }
                    placeholder={"Lien partage Whatsapp"}
                    value={this.state.title.value}
                    type="text"
                    helperText={ this.state.title.error ? this.state.title.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-6">
                  <TextField
                    id="title-error-helper-text"
                    label="URL Email"
                    error={ this.state.title.error && this.state.title.error }
                    name="title"
                    onChange={ this.handleChangeTitle.bind(this) }
                    placeholder={"Lien partage par mail"}
                    value={this.state.title.value}
                    type="text"
                    helperText={ this.state.title.error ? this.state.title.errorMessage : null }
                    required
                    fullWidth
                  />
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
