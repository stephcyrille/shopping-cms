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
import Snackbar from '../../Snippets/FlashBagMessage/index'
import appConfig from '../../../config'
import { slugify } from '../../../utils/generic'


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
class AddCategory extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Ajouter une categorie | Afro Yaca Drum'

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


  handleChangeTitle = (event) => {
    event.preventDefault();
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
      title: this.state.title.value,
      slug: this.state.slug.value,
      picture: this.state.picture.fileInput,
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
    if( !(values.picture instanceof File) == true ){
      this.setState({
        picture: {
          error: true,
          errorMessage: "L'ajout d'image est obligatoire"
        },
      })
    }

    if(
      (values.title) !== "" &&
      (values.slug) !== "" &&
      (values.picture instanceof File) === true
    ){
      // SUBMIT THERE
      const service = "category/add"
      const formUrl = `${appConfig.FORMBASEURL}${service}`
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("slug", values.slug);
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
            snack_message: "Catégorie enregistrée avec success",
            snack_color: "success"
          })
          this.props.dispatch(push(`${urls.CATEGORY}`, { snack_open: true }));
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
        }
      )
  }

  _goToCategory(){
    this.props.dispatch(push(`${urls.CATEGORY}`))
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
            <h2 style={{ paddingLeft: 20 }}>Ajouter une categorie</h2>
            <hr />
            <form className={`${classes.form}`} noValidate autoComplete="off" onSubmit={ this._handleOnSubmit.bind(this) }>
              <div className={`${classes.row} row`}>
                <div className="col-8">
                  <TextField
                    id="category-title-text"
                    label="Nom de la categorie"
                    error={ this.state.title.error && this.state.title.error }
                    name="title"
                    onChange={ this.handleChangeTitle.bind(this) }
                    placeholder={"Catégorie"}
                    value={this.state.title.value}
                    type="text"
                    helperText={ this.state.title.error ? this.state.title.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="category-slug"
                    label="Slug de la catégorie"
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
                <div className="col-4" style={{ paddingLeft: 0, marginTop: 20 }}>
                  <label style={{ paddingLeft: 15, marginBottom: 0 }}>Photo de la categorie*</label>
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
                    onClick={ this._goToCategory.bind(this) }
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
