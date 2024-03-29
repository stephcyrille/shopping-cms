import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
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
class AddHomeBanner extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Ajouter une banière | Afro Yaca Drum'

    this.state = {
      name : {
        value: '',
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
      subTitle : {
        value: null,
        error: false,
        errorMessage: null,
      },
      linkText : {
        value: null,
        error: false,
        errorMessage: null,
      },
      linkUrl : {
        value: null,
        error: false,
        errorMessage: null,
      },
      active : {
        value: '',
        checked: false,
        error: false,
        errorMessage: null
      },
      home : {
        value: '',
        checked: false,
        error: false,
        errorMessage: null
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


  handleChangeName = (event) => {
    event.preventDefault();
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

  handleChangeTitle = (event) => {
    event.preventDefault();
    this.setState({
      title: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeSubTitle = (event) => {
    event.preventDefault();
    this.setState({
      subTitle: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeLinkText = (event) => {
    event.preventDefault();
    this.setState({
      linkText: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeLinkUrl = (event) => {
    event.preventDefault();
    this.setState({
      linkUrl: {
        value: event.target.value,
        error: false
      }
    })
  }

  handleChangeActive(event){
    this.setState({
      active: {
        checked : event.target.checked,
        error: false,
        errorMessage: null
      }
    })
  }

  handleChangeHome(event){
    this.setState({
      home: {
        checked : event.target.checked,
        error: false,
        errorMessage: null
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
      name: this.state.name.value,
      title: this.state.title.value,
      subTitle: this.state.subTitle.value,
      slug: this.state.slug.value,
      linkText: this.state.linkText.value,
      linkUrl: this.state.linkUrl.value,
      active: this.state.active.checked,
      home: this.state.home.checked,
      picture: this.state.picture.fileInput,
    }

    if( !values.name ){
      this.setState({
        name: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.title ){
      this.setState({
        title: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.subTitle ){
      this.setState({
        subTitle: {
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
    if( !values.linkText ){
      this.setState({
        linkText: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.linkUrl ){
      this.setState({
        linkUrl: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !values.linkUrl ){
      this.setState({
        linkUrl: {
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
      (values.name) !== "" &&
      (values.title) !== "" &&
      (values.subTitle) !== "" &&
      (values.slug) !== "" &&
      (values.linkText) !== "" &&
      (values.linkUrl) !== "" &&
      (values.picture instanceof File) === true
    ){
      const service = "banner/add"
      const formUrl = `${appConfig.FORMBASEURL}${service}`
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("title", values.title);
      formData.append("subTitle", values.subTitle);
      formData.append("slug", values.slug);
      formData.append("linkText", values.linkText);
      formData.append("linkUrl", values.linkUrl);
      formData.append("active", this.state.active.checked);
      formData.append("picture", values.picture);
      formData.append("is_home", values.home);
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
            snack_message: "Banière enregistrée avec success",
            snack_color: "success"
          })
          this.props.dispatch(push(`${urls.HOMEBANNER}`, { snack_open: true }));
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

  _goToHomeBanner(){
    this.props.dispatch(push(`${urls.HOMEBANNER}`))
  }


  handleClose = () => {
    this.setState({ snack_open: false });
  };

  

  render() {
    const { classes } = this.props
    
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
            <h2 style={{ paddingLeft: 20 }}>Ajout une bannière</h2>
						<hr />
            <form className={`${classes.form}`} noValidate autoComplete="off" onSubmit={ this._handleOnSubmit.bind(this) }>
              <div className={`${classes.row} row`}>
                <div className="col-4">
                  <TextField
                    id="name-text"
                    label="Nom de la banière"
                    error={ this.state.name.error && this.state.name.error }
                    name="name"
                    onChange={ this.handleChangeName.bind(this) }
                    placeholder={"Nom de la banière"}
                    value={this.state.name.value}
                    type="text"
                    helperText={ this.state.name.error ? this.state.name.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="title-text"
                    label="Titre de la banière"
                    error={ this.state.title.error && this.state.title.error }
                    name="title"
                    onChange={ this.handleChangeTitle.bind(this) }
                    placeholder={"Titre de la banière"}
                    value={this.state.title.value}
                    type="text"
                    helperText={ this.state.title.error ? this.state.title.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="subtitle-text"
                    label="Sous titre de la banière"
                    error={ this.state.subTitle.error && this.state.subTitle.error }
                    name="subTitle"
                    onChange={ this.handleChangeSubTitle.bind(this) }
                    placeholder={"Sous titre de la banière"}
                    value={this.state.subTitle.value}
                    type="text"
                    helperText={ this.state.subTitle.error ? this.state.subTitle.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-4" style={{ marginTop: 20 }}>
                  <TextField
                    id="seo-slug"
                    label="Slug de la banière"
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
								<div className="col-4" style={{ marginTop: 20 }}>
                  <TextField
                    id="link-text-page"
                    label="Texte du lien"
                    error={ this.state.linkText.error && this.state.linkText.error }
                    name="linkText"
                    onChange={ this.handleChangeLinkText.bind(this) }
                    placeholder={"Texte du lien"}
                    value={this.state.linkText.value}
                    type="text"
                    helperText={ this.state.linkText.error ? this.state.linkText.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
								<div className="col-4" style={{ marginTop: 20 }}>
                  <TextField
                    id="link-url"
                    label="URL de redirection"
                    error={ this.state.linkUrl.error && this.state.linkUrl.error }
                    name="linkUrl"
                    onChange={ this.handleChangeLinkUrl.bind(this) }
                    placeholder={"Saisissez l'URL"}
                    value={this.state.linkUrl.value}
                    type="text"
                    helperText={ this.state.linkUrl.error ? this.state.linkUrl.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
              </div>

              <div className={`${classes.row} row`}>
                <div className={`col-4 ${classes.switch}`}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch checked={this.state.active.checked} onChange={this.handleChangeActive.bind(this)} name="active" />}
                      label="Banière active ?"
                    />
                  </FormGroup>
                </div>
                <div className={`col-4 ${classes.switch}`}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch checked={this.state.home.checked} onChange={this.handleChangeHome.bind(this)} name="home" />}
                      label="Banière page d'accueil"
                    />
                  </FormGroup>
                </div>
              </div>

              <div className={`${classes.row} row`}>
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
                    onClick={ this._goToHomeBanner.bind(this) }
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
