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
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

// Rich text importation
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

import urls from '../../Dashboard/routes/urls'
import { slugify } from "../../../utils/generic";


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
class AddArticle extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Ajouter un article | Afro Yaca Drum'
    this.refResumeEditor = React.createRef(null);
    this.refArticleEditor = React.createRef(null);
    this.state = {
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
      date : {
        value: '2020-07-22T10:30',
        error: false,
        errorMessage: null
      },
      author : {
        value: '',
        error: false,
        errorMessage: null
      },
      photograph : {
        value: '',
        error: false,
        errorMessage: null
      },
      featureOne : {
        value: '',
        error: false,
        errorMessage: null
      },
      featureTwo : {
        value: '',
        error: false,
        errorMessage: null
      },
      featureThree : {
        value: '',
        error: false,
        errorMessage: null
      },
      featureFour : {
        value: '',
        error: false,
        errorMessage: null
      },
      facebookUrl : {
        value: '',
        error: false,
        errorMessage: null
      },
      twitterUrl : {
        value: '',
        error: false,
        errorMessage: null
      },
      whatsappUrl : {
        value: '',
        error: false,
        errorMessage: null
      },
      mailUrl : {
        value: '',
        error: false,
        errorMessage: null
      },
      cover : {
        value: '',
        checked: false,
        error: false,
        errorMessage: null
      },
      mainMenu : {
        value: '',
        checked: false,
        error: false,
        errorMessage: null
      },
      
      editMode: false,
      initialsValues: null,

      content: "content",
    }
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
          value: slugify(event.target.value)
        }
      })
    } else {
      this.setState({
        title: {
          value: event.target.value,
          error: false
        },
        slug: {
          value: slugify(event.target.value)
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


  handleChangeAuthor = (event) => {
    this.setState({
      author: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangePhotograph = (event) => {
    this.setState({
      photograph: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeFeatureOne = (event) => {
    this.setState({
      featureOne: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangefeatureTwo = (event) => {
    this.setState({
      featureTwo: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangefeatureThree = (event) => {
    this.setState({
      featureThree: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangefeatureFour = (event) => {
    this.setState({
      featureFour: {
        value: event.target.value,
        error: false
      }
    })
  }

  
  handleChangeDate = (event) => {
    this.setState({
      date: {
        value: event.target.value,
        error: false
      }
    })
  }
  
  handleChangeFacebookUrl = (event) => {
    this.setState({
      facebookUrl: {
        value: event.target.value,
        error: false
      }
    })
  }
  
  handleChangeTwitterUrl = (event) => {
    this.setState({
      twitterUrl: {
        value: event.target.value,
        error: false
      }
    })
  }
  
  handleChangeWhatsappUrl = (event) => {
    this.setState({
      whatsappUrl: {
        value: event.target.value,
        error: false
      }
    })
  }
  
  handleChangemailUrl = (event) => {
    this.setState({
      mailUrl: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeCover(event){
    this.setState({
      cover: {
        checked : event.target.checked,
        error: false,
        errorMessage: null
      }
    })
  }


  handleChangeMainMenu(event){
    this.setState({
      mainMenu: {
        checked : event.target.checked,
        error: false,
        errorMessage: null
      }
    })
  }



  _handleOnSubmit(event){
    event.preventDefault();

    // var refvalue1 = this.refResumeEditor.current.value
    // var refvalue2 = this.refArticleEditor.current.value

    // Make the validation process here
    var values = {
      title: this.state.title.value,
      slug: this.state.slug.value,
      guess: this.state.guess.value,
      date: this.state.date.value,
      author: this.state.author.value,
      photograph: this.state.photograph.value,
      featureOne: this.state.featureOne.value,
      featureTwo: this.state.featureTwo.value,
      featureThree: this.state.featureThree.value,
      featureFour: this.state.featureFour.value,
      facebookUrl: this.state.facebookUrl.value,
      twitterUrl: this.state.twitterUrl.value,
      whatsappUrl: this.state.whatsappUrl.value,
      mailUrl: this.state.mailUrl.value,
      // resume: refvalue1,
      // content: refvalue2,
    }

    console.log("Article posting form values ", values)

    if( !values.title ){
      this.setState({
        title: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.slug ){
      this.setState({
        slug: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.guess ){
      this.setState({
        guess: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.author ){
      this.setState({
        author: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.photograph ){
      this.setState({
        photograph: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.featureOne ){
      this.setState({
        featureOne: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.featureTwo ){
      this.setState({
        featureTwo: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.featureThree ){
      this.setState({
        featureThree: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.featureFour ){
      this.setState({
        featureFour: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }



    // Call validator here, then return erros
    // const validator = validator(valuer) 

  }


  updateResumeContent(value) {
    console.log("Rich text value============", value, this.refEditor)
    // this.setState({content: this.refEditor.current.value})
  }


  updateContent(value) {
    console.log("Rich text value============", value, this.refEditor)
    // this.setState({content: this.refEditor.current.value})
  }

  _goToArticle(){
    this.props.dispatch(push(`${urls.ARTICLE}`))
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
            <h2 style={{ paddingLeft: 20 }}>Ajouter un article</h2>
            <hr />
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
                    onChange={ this.handleChangeDate.bind(this) }
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                    fullWidth
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="author-error-helper-text"
                    label="Auteur"
                    error={ this.state.author.error && this.state.author.error }
                    name="author"
                    onChange={ this.handleChangeAuthor.bind(this) }
                    placeholder={"Auteur de l'article"}
                    value={this.state.author.value}
                    type="text"
                    helperText={ this.state.author.error ? this.state.author.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="potograph"
                    label="Crédit photos"
                    error={ this.state.photograph.error && this.state.photograph.error }
                    name="photograph"
                    placeholder={"Photographies"}
                    onChange={ this.handleChangePhotograph.bind(this) }
                    value={this.state.photograph.value}
                    type="text"
                    helperText={ this.state.photograph.error ? this.state.photograph.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
              </div>

              {/* <div className={`row ${classes.row}`} style={{ marginTop: 20 }}>
                <div className="col-12">
                  <label>Résumé de l'article</label>
                  <JoditEditor
                    ref={this.refResumeEditor}
                    // value={this.state.content}
                    tabIndex={2} // tabIndex of textarea
                    onChange={ this.updateResumeContent.bind(this) }
                    config={config}
                    // onChange={newContent => {}}
                  />
                </div>
              </div>
              
              <div className={`row ${classes.row}`} style={{ marginTop: 20 }}>
                <div className="col-12">
                  <label>Contenu de l'article</label>
                  <JoditEditor
                    ref={this.refArticleEditor}
                    // value={this.state.content}
                    tabIndex={2} // tabIndex of textarea
                    onChange={ this.updateContent.bind(this) }
                    config={config}
                    // onChange={newContent => {}}
                  />
                </div>
              </div> */}


              <div className={`row ${classes.row}`}>
                <div className="col-3">
                  <FormControl 
                    className={classes.formControl}
                    error={ this.state.featureOne.error && this.state.featureOne.error }
                  >
                    <InputLabel id="product-feature-select-1">Produit en vedette 1</InputLabel>
                    <Select
                      labelId="product-feature-select-1"
                      id="product-feature-1"
                      value={this.state.featureOne.value}
                      onChange={this.handleChangeFeatureOne.bind(this)}
                      fullWidth
                    >
                      <MenuItem value={"1"}>Produit 1</MenuItem>
                      <MenuItem value={'2'}>Produit 2</MenuItem>
                      <MenuItem value={"3"}>Produit 3</MenuItem>
                    </Select>
                    { this.state.featureOne.error ? <FormHelperText>{this.state.featureOne.errorMessage}</FormHelperText> : null }
                  </FormControl>
                </div>
                <div className="col-3">
                  <FormControl 
                    className={classes.formControl}
                    error={ this.state.featureTwo.error && this.state.featureTwo.error }
                  >
                    <InputLabel id="product-feature-select-2">Produit en vedette 2</InputLabel>
                    <Select
                      labelId="product-feature-select-2"
                      id="product-feature-2"
                      value={this.state.featureTwo.value}
                      onChange={this.handleChangefeatureTwo.bind(this)}
                      fullWidth
                    >
                      <MenuItem value={"1"}>Produit 1</MenuItem>
                      <MenuItem value={'2'}>Produit 2</MenuItem>
                      <MenuItem value={"3"}>Produit 3</MenuItem>
                    </Select>
                    { this.state.featureTwo.error ? <FormHelperText>{this.state.featureTwo.errorMessage}</FormHelperText> : null }
                  </FormControl>
                </div>
                <div className="col-3">
                  <FormControl 
                    className={classes.formControl}
                    error={ this.state.featureThree.error && this.state.featureThree.error }
                  >
                    <InputLabel id="product-featureThree-select">Produit en vedette 3</InputLabel>
                    <Select
                      labelId="product-featureThree-select"
                      id="product-featureThree"
                      value={this.state.featureThree.value}
                      onChange={this.handleChangefeatureThree.bind(this)}
                      fullWidth
                    >
                      <MenuItem value={"1"}>Produit 1</MenuItem>
                      <MenuItem value={'2'}>Produit 2</MenuItem>
                      <MenuItem value={"3"}>Produit 3</MenuItem>
                    </Select>
                    { this.state.featureThree.error ? <FormHelperText>{this.state.featureThree.errorMessage}</FormHelperText> : null }
                  </FormControl>
                </div>
                <div className="col-3">
                  <FormControl 
                    className={classes.formControl}
                    error={ this.state.featureFour.error && this.state.featureFour.error }
                  >
                    <InputLabel id="product-featureFour-select">Produit en vedette 4</InputLabel>
                    <Select
                      labelId="product-featureFour-select"
                      id="product-featureFour"
                      value={this.state.featureFour.value}
                      onChange={this.handleChangefeatureFour.bind(this)}
                      fullWidth
                    >
                      <MenuItem value={"1"}>Produit 1</MenuItem>
                      <MenuItem value={'2'}>Produit 2</MenuItem>
                      <MenuItem value={"3"}>Produit 3</MenuItem>
                    </Select>
                    { this.state.featureFour.error ? <FormHelperText>{this.state.featureFour.errorMessage}</FormHelperText> : null }
                  </FormControl>
                </div>
              </div>
              <div className={`row ${classes.row}`} style={{ paddingLeft: 10 }}>
                <div className="col-6">
                  <TextField
                    id="facebookUrl-error-helper-text"
                    label="URL Facebook"
                    error={ this.state.facebookUrl.error && this.state.facebookUrl.error }
                    name="facebookUrl"
                    onChange={ this.handleChangeFacebookUrl.bind(this) }
                    placeholder={"Lien partage Facebook"}
                    value={this.state.facebookUrl.value}
                    type="text"
                    helperText={ this.state.facebookUrl.error ? this.state.facebookUrl.errorMessage : null }
                    fullWidth
                  />
                </div>
                <div className="col-6">
                  <TextField
                    id="twitterUrl-error-helper-text"
                    label="URL Twitter"
                    error={ this.state.twitterUrl.error && this.state.twitterUrl.error }
                    name="twitterUrl"
                    onChange={ this.handleChangeTwitterUrl.bind(this) }
                    placeholder={"Lien partage Twitter"}
                    value={this.state.twitterUrl.value}
                    type="text"
                    helperText={ this.state.twitterUrl.error ? this.state.twitterUrl.errorMessage : null }
                    fullWidth
                  />
                </div>
                <div className="col-6" style={{ marginTop: 20 }}>
                  <TextField
                    id="whatsappUrl-error-helper-text"
                    label="URL Whatsapp"
                    error={ this.state.whatsappUrl.error && this.state.whatsappUrl.error }
                    name="whatsappUrl"
                    onChange={ this.handleChangeWhatsappUrl.bind(this) }
                    placeholder={"Lien partage Whatsapp"}
                    value={this.state.whatsappUrl.value}
                    type="text"
                    helperText={ this.state.whatsappUrl.error ? this.state.whatsappUrl.errorMessage : null }
                    fullWidth
                  />
                </div>
                <div className="col-6" style={{ marginTop: 20 }}>
                  <TextField
                    id="mailUrl-error-helper-text"
                    label="URL Email"
                    error={ this.state.mailUrl.error && this.state.mailUrl.error }
                    name="mailUrl"
                    onChange={ this.handleChangemailUrl.bind(this) }
                    placeholder={"Lien partage par mail"}
                    value={this.state.mailUrl.value}
                    type="text"
                    helperText={ this.state.mailUrl.error ? this.state.mailUrl.errorMessage : null }
                    fullWidth
                  />
                </div>
              </div>

              <div className={`${classes.row} row`}>
                <div className={`col-3 ${classes.switch}`}>
                  <FormGroup style={{ paddingLeft: 20 }}>
                    <FormControlLabel
                      control={<Switch checked={this.state.cover.checked} onChange={this.handleChangeCover.bind(this)} name="cover" />}
                      label="A l'affiche"
                    />
                  </FormGroup>
                </div>
                <div className={`col-3 ${classes.switch}`}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch checked={this.state.mainMenu.checked} onChange={this.handleChangeMainMenu.bind(this)} name="mainMenu" />}
                      label="Menu principal"
                    />
                  </FormGroup>
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
                  <Button 
                    variant="contained"
                    onClick={ this._goToArticle.bind(this) }
                  >
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
