import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';

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
}))
@withStyles(useStyles)
class AddSEO extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Ajouter SEO Page | Afro Yaca Drum'

    this.state = {
      pageTitle : {
        value: '',
        error: false,
        errorMessage: null
      },
      slug : {
        value: '',
        error: false,
        errorMessage: null
      },
      keywords : {
        value: null,
        error: false,
        errorMessage: null,
      },
      description : {
        value: null,
        error: false,
        errorMessage: null,
      },
      baseUrl : {
        value: null,
        error: false,
        errorMessage: null,
      },
      picture : {
        value: null,
        error: false,
        errorMessage: null,
        fileInput: React.createRef()
      },

      snack_open: false,
      snack_message: null,
      snack_color: null,
    }
  }


  handleChangePageTitle = (event) => {
    event.preventDefault();
    this.setState({
      pageTitle: {
        value: event.target.value,
        error: false
      },
      slug: {
        value: slugify(event.target.value)
      }
    })
	}

  handleChangeKeywords = (event) => {
    event.preventDefault();
    this.setState({
      keywords: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeDescription = (event) => {
    event.preventDefault();
    this.setState({
      description: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeDescription = (event) => {
    event.preventDefault();
    this.setState({
      description: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeBaseURL = (event) => {
    event.preventDefault();
    this.setState({
      baseUrl: {
        value: event.target.value,
        error: false
      }
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
          picture: {
            value: localImageUrl,
            fileInput: imageFile,
            error: false,
          },
        })
      }
    }
  };



  _handleRemovePicture(picNber){
    if(picNber==1){
      this.setState({
        picture: {
          value: null,
          error: false,
          fileInput: null
        },
      })
    }
  }

  
  _handleOnSubmit(event){
    event.preventDefault();
    // console.log("Form Values", event.target)
    // Make the validation process here
    var values = {
      pageTitle: this.state.pageTitle.value,
      slug: this.state.slug.value,
      keywords: this.state.keywords.value,
      description: this.state.description.value,
      baseUrl: this.state.baseUrl.value,
      picture: this.state.picture.fileInput,
    }

    if( !values.pageTitle ){
      this.setState({
        pageTitle: {
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
    if( !values.keywords ){
      this.setState({
        keywords: {
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
    if( !values.baseUrl ){
      this.setState({
        baseUrl: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !(values.picture instanceof File) == true ){
      this.setState({
        picture: {
          error: true,
          errorMessage: "L'ajout d'image est obligatoire"
        },
      })
    }

    if(
      (values.pageTitle) !== "" &&
      (values.slug) !== "" &&
      (values.keywords) !== "" &&
      (values.description) !== "" &&
      (values.baseUrl) !== "" &&
      (values.picture instanceof File) === true
    ){
      const service = "seo/add"
      const formUrl = `${appConfig.FORMBASEURL}${service}`
      const formData = new FormData();
      formData.append("title", values.pageTitle);
      formData.append("slug", values.slug);
      formData.append("keywords", values.keywords);
      formData.append("description", values.description);
      formData.append("url", values.baseUrl);
      formData.append("picture", values.picture);
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
            snack_message: "SEO page enregistré avec success",
            snack_color: "success"
          })
          this.props.dispatch(push(`${urls.SEO}`, { snack_open: true }));
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

  _goToSEOAll(){
    this.props.dispatch(push(`${urls.SEO}`))
  }


  handleClose = () => {
    this.setState({ snack_open: false });
  };
  
  

  render() {
    const { classes } = this.props
    
    return (
      <div>
        <section className="container">
        { this.state.snack_open &&
            <Snackbar 
              open={this.state.snack_open} 
              message={this.state.snack_message} 
              color={this.state.snack_color}
              closePopup={this.handleClose.bind(this)} 
            />
        }
          <Paper className={classes.paper}>
            <h2 style={{ paddingLeft: 20 }}>Ajout SEO page</h2>
						<hr />
            <form className={`${classes.form}`} noValidate autoComplete="off" onSubmit={ this._handleOnSubmit.bind(this) }>
              <div className={`${classes.row} row`}>
                <div className="col-4">
                  <TextField
                    id="page-title-text"
                    label="Titre de la page"
                    error={ this.state.pageTitle.error && this.state.pageTitle.error }
                    name="pageTitle"
                    onChange={ this.handleChangePageTitle.bind(this) }
                    placeholder={"Titre de la page"}
                    value={this.state.pageTitle.value}
                    type="text"
                    helperText={ this.state.pageTitle.error ? this.state.pageTitle.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="seo-slug"
                    label="Slug de la page"
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
                    id="keywords-page"
                    label="Mots clés de la page"
                    error={ this.state.keywords.error && this.state.keywords.error }
                    name="keywords"
                    onChange={ this.handleChangeKeywords.bind(this) }
                    placeholder={"(mot1, mot2, ...))"}
                    value={this.state.keywords.value}
                    type="text"
                    helperText={ this.state.keywords.error ? this.state.keywords.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
								<div className="col-4" style={{ marginTop: 20 }}>
                  <TextField
                    id="base-url-page"
                    label="URL de la page"
                    error={ this.state.baseUrl.error && this.state.baseUrl.error }
                    name="baseUrl"
                    onChange={ this.handleChangeBaseURL.bind(this) }
                    placeholder={"Saisissez l'URL"}
                    value={this.state.baseUrl.value}
                    type="text"
                    helperText={ this.state.baseUrl.error ? this.state.baseUrl.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
								<div className="col-12" style={{ marginTop: 20 }}>
                  <TextField
                    id="seo-page-description"
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
                <div className="col-4" style={{ paddingLeft: 10, marginTop: 20 }}>
                  <label style={{ paddingLeft: 15, marginBottom: 0 }}>Photo partage*</label>
                  {
                    this.state.picture.value ? 
                      (
                      <div>
                        <div className={classes.img}>
                          <img src={this.state.picture.value} width="100%" height="250px"/>
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
                          error={ this.state.picture.error && this.state.picture.error }
                        >
                          <Button 
                            variant="contained" 
                            className=""
                            fullWidth
                          >
                            <label for="raised-input-file-1" style={{ marginBottom: 0 }}>
                              <CloudUploadOutlinedIcon style={{ padding: 5, fontSize: 35 }} />
                              Photo (PNG, JPG)*
                            </label>
                            <input
                              accept=".png, .jpg, .jpeg"
                              id="raised-input-file-1"
                              name="picture"
                              type="file"
                              onChange={ event => this.handlePictureChange(event, 1)}
                              ref={this.state.picture.fileInput}
                              style={{ display: "none" }}
                            />
                          </Button>
                          { this.state.picture.error ? 
                            <FormHelperText 
                              style={{ textAlign: "center", fontWeight: 400 }}
                            >
                              {this.state.picture.errorMessage}
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
                    onClick={ this._goToSEOAll.bind(this) }
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
