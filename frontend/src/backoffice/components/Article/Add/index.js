import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
// Rich text importation
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';

import urls from '../../Dashboard/routes/urls'
import { slugify } from "../../../utils/generic";
import Snackbar from '../../Snippets/FlashBagMessage/index'
import appConfig from '../../../config'




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
  img: {
    position: "relative"
  },
  imgHover: {
    position: "absolute",
    height: "100%",
    width: "94%",
    top: 0,
    transition: "ease-out",
    transitionDuration: "0.6s",
    "&:hover": {
      backgroundColor: '#00000066',
      cursor: "pointer",
      transition: "ease-in",
      transitionDuration: "0.6s"
    },
    "&:hover .deleteIco": {
      transform: "translateY(0px)",
      zIndex: 10,
      transition: "ease-in",
      transitionDuration: "0.4s"
    }
  },
  deleteIco: {
    top: "40%",
    position: "relative",
    left: "40%",
    color: "#d5d5d5",
    transform: "translateY(-200px)",
    zIndex: -1,
    transition: "ease-out",
    transitionDuration: "0.3s",
    color: "white",
    border: "2px solid #d5d5d5",
    borderRadius: "50%",
    padding: "10px 13px",
    "&:hover": {
      color: "white",
      border: "2px solid white",
    },
    "&:active": {
      color: "white",
      border: "2px solid rgba(0,0,0,0)",
    }
  }
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
      resume : {
        value: '',
        error: false,
        errorMessage: null
      },
      content : {
        value: '',
        error: false,
        errorMessage: null
      },
      articleImage : {
        value: null,
        error: false,
        errorMessage: null,
        fileInput: React.createRef()
      },
      coverImage : {
        value: null,
        error: false,
        errorMessage: null,
        fileInput: React.createRef()
      },
      
      editMode: false,
      initialsValues: null,

      snack_open: false,
      snack_message: null,
      snack_color: null,
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


  updateResumeContent(value) {
    this.setState({
      resume: {
        value: value,
        error: false,
      },
    })
  }


  updateContent(value) {
    this.setState({
      content: {
        value: value,
        error: false,
      },
    })
  }


  handlePictureChange = (event, picNber) => {
    event.preventDefault();
    let imageFile = event.target.files[0];
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      const imageObject = new window.Image();
      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
      
      if(picNber==1){
        this.setState({
          coverImage: {
            value: localImageUrl,
            fileInput: imageFile,
            error: false,
          },
        })
      } else {
        this.setState({
          articleImage: {
            value: localImageUrl,
            fileInput: imageFile,
            error: false,
          },
        })
      }
    }
  }

  _handleRemovePicture(picNber){
    if(picNber==1){
      this.setState({
        coverImage: {
          value: null,
          error: false,
          fileInput: null
        },
      })
    }
    else if(picNber==2){
      this.setState({
        articleImage: {
          value: null,
          error: false,
          fileInput: null
        },
      })
    }
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
      facebookUrl: this.state.facebookUrl.value,
      twitterUrl: this.state.twitterUrl.value,
      whatsappUrl: this.state.whatsappUrl.value,
      mailUrl: this.state.mailUrl.value,
      resume: this.state.resume.value,
      content: this.state.content.value,
      coverImage: this.state.coverImage.fileInput,
      articleImage: this.state.articleImage.fileInput,
    }

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
    if( !(values.coverImage instanceof File) == true ){
      this.setState({
        coverImage: {
          error: true,
          errorMessage: "L'ajout d'image est obligatoire"
        },
      })
    }
    if( !(values.articleImage instanceof File) == true ){
      this.setState({
        articleImage: {
          error: true,
          errorMessage: "L'ajout d'image est obligatoire"
        },
      })
    }

    if(
      (values.title) !== "" &&
      (values.slug) !== "" &&
      (values.guess) !== "" &&
      (values.author) !== "" &&
      (values.photograph) !== "" &&
      (values.coverImage instanceof File) === true &&
      (values.articleImage instanceof File) === true 
    ){
      const service = "article/add"
      const formUrl = `${appConfig.FORMBASEURL}${service}`
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("slug", values.slug);
      formData.append("guess", values.guess);
      formData.append("date", values.date);
      formData.append("author", values.author);
      formData.append("photograph", values.photograph);
      formData.append("facebookUrl", values.facebookUrl);
      formData.append("twitterUrl", values.twitterUrl);
      formData.append("whatsappUrl", values.whatsappUrl);
      formData.append("mailUrl", values.mailUrl);
      formData.append("resume", values.resume);
      formData.append("content", values.content);
      formData.append("coverImage", values.coverImage);
      formData.append("articleImage", values.articleImage);
      formData.append("cover", this.state.cover.checked);
      formData.append("mainMenu", this.state.mainMenu.checked);
      // SUBMIT THERE
      this.postToApi(formUrl, formData)
    }
  }


  postToApi(form_base_url, data){
    window
    .file_axios.post(`${form_base_url}`, data)
      .then((response) => {
          console.log("Success", response)
          this.setState({
            snack_open: true,
            snack_message: "Article enregistré avec success",
            snack_color: "success"
          })
          this.props.dispatch(push(`${urls.ARTICLE}`, { snack_open: true }));
        }
      )
      .catch((error) =>{
          console.log("Error", error.response)
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

          else{
            this.setState({
              snack_message: "Une erreur est survenue lors de l'enregistrement",
              snack_color: "error",
              snack_open: true,
            })
          }
        }
      )
  }


  _goToArticle(){
    this.props.dispatch(push(`${urls.ARTICLE}`))
  }

  handleClose = () => {
    this.setState({ snack_open: false });
  };
  

  render() {
    const { classes } = this.props
    const config1 ={
      placeholderText: 'Modifier le résumé',
      charCounterCount: false
    }
    const config2 = {
      placeholderText: 'Modifier le contenu',
      charCounterCount: false,
      fileUpload: true
    }
    
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

              <div className={`row ${classes.row}`} style={{ marginTop: 20 }}>
                <div className="col-12">
                  <label>Résumé de l'article</label>
                  <FroalaEditor
                    model={this.state.resume.value }
                    onModelChange={ this.updateResumeContent.bind(this) }
                    config={ config1 }
                  />
                </div>
              </div>
              
              <div className={`row ${classes.row}`} style={{ marginTop: 20 }}>
                <div className="col-12">
                  <label>Contenu de l'article</label>
                  <FroalaEditor
                    tag='textarea'
                    model={this.state.content.value }
                    onModelChange={ this.updateContent.bind(this) }
                    config={ config2 }
                  />
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
                <div className="col-4" style={{ paddingLeft: 15}}>
                  <label style={{ marginBottom: 0, fontSize: "1.3em" }}>Photo de couverture*</label>
                  {
                    this.state.coverImage.value ? 
                      (
                      <div>
                        <div className={classes.img}>
                          <img src={ this.state.coverImage.value } width="100%" height="400px"/>
                        </div>
                        <div className={classes.imgHover}>
                          <i className={`${classes.deleteIco} deleteIco fa fa-times fa-2x`} onClick={this._handleRemovePicture.bind(this, 1)} />
                        </div>
                      </div>
                      )
                      :
                      <div>
                        <FormControl 
                          className={classes.formControl}
                          error={ this.state.coverImage.error && this.state.coverImage.error }
                        >
                          <Button 
                            variant="contained" 
                            className=""
                            fullWidth
                          >
                            <label htmlFor="cover-input-file-1" style={{ marginBottom: 0 }}>
                              <CloudUploadOutlinedIcon style={{ padding: 5, fontSize: 35 }} />
                              Photo 1 (PNG, JPG)*
                            </label>
                            <input
                              accept=".png, .jpg, .jpeg"
                              id="cover-input-file-1"
                              name="coverImage"
                              type="file"
                              onChange={ event => this.handlePictureChange(event, 1)}
                              ref={this.state.coverImage.fileInput}
                              style={{ display: "none" }}
                            />
                          </Button>
                          { this.state.coverImage.error ? 
                            <FormHelperText 
                              style={{ textAlign: "center", fontWeight: 400 }}
                            >
                              {this.state.coverImage.errorMessage}
                            </FormHelperText> 
                            : 
                            null 
                          }
                        </FormControl>
                      </div>
                  }
                </div>
                <div className="col-4" style={{ paddingLeft: 15 }}>
                  <label style={{ paddingLeft: 15, marginBottom: 0,  fontSize: "1.3em" }}>Photo de l'article*</label>
                  {
                    this.state.articleImage.value ? 
                      (
                      <div>
                        <div className={classes.img}>
                          <img src={this.state.articleImage.value} width="100%" height="200px"/>
                        </div>
                        <div className={classes.imgHover}>
                          <i className={`${classes.deleteIco} deleteIco fa fa-times fa-2x`} onClick={this._handleRemovePicture.bind(this, 2)} />
                        </div>
                      </div>
                      )
                      :
                      <div>
                        <FormControl 
                          className={classes.formControl}
                          error={ this.state.articleImage.error && this.state.articleImage.error }
                        >
                          <Button 
                            variant="contained" 
                            className=""
                            fullWidth
                          >
                            <label htmlFor="main-pic-input-file-4" style={{ marginBottom: 0 }}>
                              <CloudUploadOutlinedIcon style={{ padding: 5, fontSize: 35 }} />
                              Photo 4 (PNG, JPG)*
                            </label>
                            <input
                              accept=".png, .jpg, .jpeg"
                              id="main-pic-input-file-4"
                              name="articleImage"
                              type="file"
                              onChange={ event => this.handlePictureChange(event, 2)}
                              ref={this.state.articleImage.fileInput}
                              style={{ display: "none" }}
                            />
                          </Button>
                          { this.state.articleImage.error ? 
                            <FormHelperText 
                              style={{ textAlign: "center", fontWeight: 400 }}
                            >
                              {this.state.articleImage.errorMessage}
                            </FormHelperText> 
                            : 
                            null 
                          }
                        </FormControl>
                      </div>
                  } 
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
