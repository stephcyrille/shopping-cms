import React from "react";
import { connect } from "react-redux";
import { Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';


import { addProductStoreActions } from '../../Product/Add/store'



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
class AddMenuPic extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Add Menu pic | Afro Yaca Drum'

    this.state = {
      picture1 : {
        value: null,
        error: false,
        errorMessage: null,
        fileInput: React.createRef()
      },
      picture2 : {
        value: null,
        error: false,
        errorMessage: null,
        fileInput: React.createRef()
      },
      picture3 : {
        value: null,
        error: false,
        errorMessage: null,
        fileInput: React.createRef()
      },
      picture4 : {
        value: null,
        error: false,
        errorMessage: null,
        fileInput: React.createRef()
      },
      picture5 : {
        value: null,
        error: false,
        errorMessage: null,
        fileInput: React.createRef()
      },
      picture6 : {
        value: null,
        error: false,
        errorMessage: null,
        fileInput: React.createRef()
      },
      picture7 : {
        value: null,
        error: false,
        errorMessage: null,
        fileInput: React.createRef()
      },
      formSubmitDisabled: true,
      formValid: false,
      editMode: false,
      initial: this.props.initialsValues,
    }
  }

  componentDidMount(){
    console.log("Value ofs props inititals",  this.props.initialsValues);
    
    if(this.state.editMode){

      if(this.props.initialsValues.picture1){
        this.fileToDataURL(this.props.initialsValues.picture1)
        .then(dataUrl => {
          var file = this.dataURLtoFile(dataUrl, 'picture1.jpg');
          this.setState({
            picture1: {
              value: this.props.initialsValues.picture1,
              fileInput: file
            }
          })
        })
      }
      if(this.props.initialsValues.picture2){
        this.fileToDataURL(this.props.initialsValues.picture2)
        .then(dataUrl => {
          var file = this.dataURLtoFile(dataUrl, 'picture2.jpg');
          this.setState({
            picture2: {
              value: this.props.initialsValues.picture2,
              fileInput: file
            }
          })
        })
      }
      if(this.props.initialsValues.picture3){
        this.fileToDataURL(this.props.initialsValues.picture3)
        .then(dataUrl => {
          var file = this.dataURLtoFile(dataUrl, 'picture3.jpg');
          this.setState({
            picture3: {
              value: this.props.initialsValues.picture3,
              fileInput: file
            }
          })
        })
      }
      if(this.props.initialsValues.picture4){
        this.fileToDataURL(this.props.initialsValues.picture4)
        .then(dataUrl => {
          var file = this.dataURLtoFile(dataUrl, 'Picture4.jpg');
          this.setState({
            picture4: {
              value: this.props.initialsValues.picture4,
              fileInput: file
            }
          })
        })
      }
      if(this.props.initialsValues.picture5){
        this.fileToDataURL(this.props.initialsValues.picture5)
        .then(dataUrl => {
          var file = this.dataURLtoFile(dataUrl, 'Picture5.jpg');
          this.setState({
            picture5: {
              value: this.props.initialsValues.picture5,
              fileInput: file
            }
          })
        })
      }
      if(this.props.initialsValues.picture6){
        this.fileToDataURL(this.props.initialsValues.picture6)
        .then(dataUrl => {
          var file = this.dataURLtoFile(dataUrl, 'Picture6.jpg');
          this.setState({
            picture6: {
              value: this.props.initialsValues.picture6,
              fileInput: file
            }
          })
        })
      }
      if(this.props.initialsValues.picture7){
        this.fileToDataURL(this.props.initialsValues.picture7)
        .then(dataUrl => {
          var file = this.dataURLtoFile(dataUrl, 'Picture7.jpg');
          this.setState({
            picture7: {
              value: this.props.initialsValues.picture7,
              fileInput: file
            }
          })
        })
      }
    }
    else{
      this.setState({
        picture1: {
          value: ''        
        },
        picture2: {
          value: null
        },
        picture3: {
          value: null
        },
        picture4: {
          value: null
        },
        picture5: {
          value: null
        },
        picture6: {
          value: null
        },
        picture7: {
          value: null
        },
      })
    }
  }

  fileToDataURL = url => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
  }))


  dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
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
          picture1: {
            value: localImageUrl,
            fileInput: imageFile,
            error: false,
          },
        })
      }
      else if(picNber==2){
        this.setState({
          picture2: {
            value: localImageUrl,
            fileInput: imageFile,
            error: false,
          },
        })
      }
      else if(picNber==3){
        this.setState({
          picture3: {
            value: localImageUrl,
            fileInput: imageFile,
            error: false,
          },
        })
      }
      else if(picNber==4){
        this.setState({
          picture4: {
            value: localImageUrl,
            fileInput: imageFile,
            error: false,
          },
        })
      }
      else if(picNber==5){
        this.setState({
          picture5: {
            value: localImageUrl,
            fileInput: imageFile,
            error: false,
          },
        })
      }
      else if(picNber==6){
        this.setState({
          picture6: {
            value: localImageUrl,
            fileInput: imageFile,
            error: false,
          },
        })
      }
      else{
        this.setState({
          picture7: {
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
        picture1: {
          value: null,
          error: false,
          fileInput: null
        },
      })
    }
    else if(picNber==2){
      this.setState({
        picture2: {
          value: null,
          error: false,
          fileInput: null
        },
      })
    }
    else if(picNber==3){
      this.setState({
        picture3: {
          value: null,
          error: false,
          fileInput: null
        },
      })
    }
    else if(picNber==4){
      this.setState({
        picture4: {
          value: null,
          error: false,
          fileInput: null
        },
      })
    }
    else if(picNber==5){
      this.setState({
        picture5: {
          value: null,
          error: false,
          fileInput: null
        },
      })
    }
    else if(picNber==6){
      this.setState({
        picture6: {
          value: null,
          error: false,
          fileInput: null
        },
      })
    }
    else{
      this.setState({
        picture7: {
          value: null,
          error: false,
          fileInput: null
        },
      })
    }
  }

  _handleFormOnChange(event){
    event.preventDefault();
  
    this.setState({
      formSubmitDisabled: false
    })
  }
  


  _handleOnSubmit(event){
    event.preventDefault();
    // console.log("Form Values", event.target)
    // Make the validation process here
    console.log("EDIT MODEEEEEEEE", this.state.editMode);
    
    if(!this.state.editMode){
      var values = {
        picture1: this.state.picture1.fileInput,
        picture2: this.state.picture2.fileInput,
        picture3: this.state.picture3.fileInput,
        picture4: this.state.picture4.fileInput,
        picture5: this.state.picture5.fileInput,
        picture6: this.state.picture6.fileInput,
        picture7: this.state.picture7.fileInput,
      }

      console.log("Form Values", values)

      if( !(values.picture1 instanceof File) == true ){
        this.setState({
          picture1: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      if( !(values.picture2 instanceof File) == true  ){
        this.setState({
          picture2: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      if( !(values.picture3 instanceof File) == true  ){
        this.setState({
          picture3: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      if( !(values.picture4 instanceof File) == true  ){
        this.setState({
          picture4: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      if( !(values.picture5 instanceof File) == true  ){
        this.setState({
          picture5: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      if( !(values.picture6 instanceof File) == true  ){
        this.setState({
          picture6: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      if( !(values.picture7 instanceof File) == true  ){
        this.setState({
          picture7: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      
      // Form s valid here
      if(
        (values.picture1 instanceof File) === true &&
        (values.picture2 instanceof File) === true &&
        (values.picture3 instanceof File) === true &&
        (values.picture4 instanceof File) === true &&
        (values.picture5 instanceof File) === true &&
        (values.picture6 instanceof File) === true &&
        (values.picture7 instanceof File) === true 
      ){
        console.log("Data Posted! Greatttt=== Verif new pics====", values)
        // Post form data on server
        // We will use redux for updating the varieties table values

        const values = {
          picture1: values.picture1,
          picture2: values.picture2,
          picture3: values.picture3,
          picture4: values.picture4,
          picture5: values.picture5,
          picture6: values.picture6,
          picture7: values.picture7,
        }
        
        // SUBLMIT TO API THERE
        // ======================================================= 
        // ======================================================= 
      } 
    }
    else {
      var values = {
        picture1: this.state.picture1.fileInput,
        picture2: this.state.picture2.fileInput,
        picture3: this.state.picture3.fileInput,
        picture4: this.state.picture4.fileInput,
        picture5: this.state.picture5.fileInput,
        picture6: this.state.picture6.fileInput,
        picture7: this.state.picture7.fileInput,
      }

      if( !(values.picture1 instanceof File) == true ){
        this.setState({
          picture1: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      if( !(values.picture2 instanceof File) == true  ){
        this.setState({
          picture2: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      if( !(values.picture3 instanceof File) == true  ){
        this.setState({
          picture3: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      if( !(values.picture4 instanceof File) == true  ){
        this.setState({
          picture4: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      if( !(values.picture5 instanceof File) == true  ){
        this.setState({
          picture5: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      if( !(values.picture6 instanceof File) == true  ){
        this.setState({
          picture6: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
      if( !(values.picture7 instanceof File) == true  ){
        this.setState({
          picture7: {
            error: true,
            errorMessage: "L'ajout d'image est obligatoire"
          },
        })
      }
    }

  }


  

  render() {
    const { classes } = this.props

    console.log("Update mode initials values =========", this.state.initial)



    return (
      <div>
        <section className="container">
          <Paper className={classes.paper}>
            <h2>Ajouter des images du menu principal</h2>
            <form 
              className={`${classes.form}`} 
              autoComplete="off" 
              onSubmit={ this._handleOnSubmit.bind(this) } 
              onChange={ this._handleFormOnChange.bind(this) }
              noValidate 
            >             
              <div className={`row ${classes.row}`} style={{ paddingLeft: 10 }}>
                <div className="col-3" style={{ paddingLeft: 0 }}>
                  <label style={{marginBottom: 10, paddingLeft: 10 }}>Menu Vêtements</label>
                  {
                    this.state.picture1.value ? 
                      (
                      <div>
                        <div className={classes.img}>
                          <img src={ this.state.picture1.value } width="100%" height="250px"/>
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
                          error={ this.state.picture1.error && this.state.picture1.error }
                        >
                          <Button 
                            variant="contained" 
                            className=""
                            fullWidth
                          >
                            <label for="raised-input-file-1" style={{ marginBottom: 0 }}>
                              <CloudUploadOutlinedIcon style={{ padding: 5, fontSize: 35 }} />
                              Photo 1 (PNG, JPG)*
                            </label>
                            <input
                              accept=".png, .jpg, .jpeg"
                              id="raised-input-file-1"
                              name="picture1"
                              type="file"
                              onChange={ event => this.handlePictureChange(event, 1)}
                              ref={this.state.picture1.fileInput}
                              style={{ display: "none" }}
                            />
                          </Button>
                          { this.state.picture1.error ? 
                            <FormHelperText 
                              style={{ textAlign: "center", fontWeight: 400 }}
                            >
                              {this.state.picture1.errorMessage}
                            </FormHelperText> 
                            : 
                            null 
                          }
                        </FormControl>
                      </div>
                  }
                </div>
                <div className="col-3" style={{ paddingLeft: 0 }}>
                  <label style={{ paddingLeft: 10 }}>Menu chaussures</label>
                  {
                    this.state.picture2.value ? 
                      (
                      <div>
                        <div className={classes.img}>
                          <img src={this.state.picture2.value} width="100%" height="250px"/>
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
                          error={ this.state.picture2.error && this.state.picture2.error }
                        >
                          <Button 
                            variant="contained" 
                            className=""
                            fullWidth
                          >
                            <label for="raised-input-file-2" style={{ marginBottom: 0 }}>
                              <CloudUploadOutlinedIcon style={{ padding: 5, fontSize: 35 }} />
                              Photo 2 (PNG, JPG)*
                            </label>
                            <input
                              accept=".png, .jpg, .jpeg"
                              id="raised-input-file-2"
                              name="picture2"
                              type="file"
                              onChange={ event => this.handlePictureChange(event, 2)}
                              ref={this.state.picture2.fileInput}
                              style={{ display: "none" }}
                            />
                          </Button>
                          { this.state.picture2.error ? 
                            <FormHelperText 
                              style={{ textAlign: "center", fontWeight: 400 }}
                            >
                              {this.state.picture2.errorMessage}
                            </FormHelperText> 
                            : 
                            null 
                          }
                        </FormControl>
                      </div>
                  }
                </div>
                <div className="col-3" style={{ paddingLeft: 0 }}>
                  <label style={{ paddingLeft: 10 }}>Menu sacs</label>
                  {
                    this.state.picture3.value ? 
                      (
                      <div>
                        <div className={classes.img}>
                          <img src={this.state.picture3.value} width="100%" height="250px"/>
                        </div>
                        <div className={classes.imgHover}>
                          <i className={`${classes.deleteIco} deleteIco fa fa-times fa-2x`} onClick={this._handleRemovePicture.bind(this, 3)} />
                        </div>
                      </div>
                      )
                      :
                      <div>
                        <FormControl 
                          className={classes.formControl}
                          error={ this.state.picture3.error && this.state.picture3.error }
                        >
                          <Button 
                            variant="contained" 
                            className=""
                            fullWidth
                          >
                            <label for="raised-input-file-3" style={{ marginBottom: 0 }}>
                              <CloudUploadOutlinedIcon style={{ padding: 5, fontSize: 35 }} />
                              Photo 3 (PNG, JPG)*
                            </label>
                            <input
                              accept=".png, .jpg, .jpeg"
                              id="raised-input-file-3"
                              name="picture3"
                              type="file"
                              onChange={ event => this.handlePictureChange(event, 3)}
                              ref={this.state.picture3.fileInput}
                              style={{ display: "none" }}
                            />
                          </Button>
                          { this.state.picture3.error ? 
                            <FormHelperText 
                              style={{ textAlign: "center", fontWeight: 400 }}
                            >
                              {this.state.picture3.errorMessage}
                            </FormHelperText> 
                            : 
                            null 
                          }
                        </FormControl>
                      </div>
                  }
                </div>
                <div className="col-3" style={{ paddingLeft: 0 }}>
                  <label style={{ paddingLeft: 10 }}>Menu accessoires</label>
                  {
                    this.state.picture4.value ? 
                      (
                      <div>
                        <div className={classes.img}>
                          <img src={this.state.picture4.value} width="100%" height="250px"/>
                        </div>
                        <div className={classes.imgHover}>
                          <i className={`${classes.deleteIco} deleteIco fa fa-times fa-2x`} onClick={this._handleRemovePicture.bind(this, 4)} />
                        </div>
                      </div>
                      )
                      :
                      <div>
                        <FormControl 
                          className={classes.formControl}
                          error={ this.state.picture4.error && this.state.picture4.error }
                        >
                          <Button 
                            variant="contained" 
                            className=""
                            fullWidth
                          >
                            <label for="raised-input-file-4" style={{ marginBottom: 0 }}>
                              <CloudUploadOutlinedIcon style={{ padding: 5, fontSize: 35 }} />
                              Photo 4 (PNG, JPG)*
                            </label>
                            <input
                              accept=".png, .jpg, .jpeg"
                              id="raised-input-file-4"
                              name="picture4"
                              type="file"
                              onChange={ event => this.handlePictureChange(event, 4)}
                              ref={this.state.picture4.fileInput}
                              style={{ display: "none" }}
                            />
                          </Button>
                          { this.state.picture4.error ? 
                            <FormHelperText 
                              style={{ textAlign: "center", fontWeight: 400 }}
                            >
                              {this.state.picture4.errorMessage}
                            </FormHelperText> 
                            : 
                            null 
                          }
                        </FormControl>
                      </div>
                  } 
                </div>
                <div className="col-3" style={{ paddingLeft: 0, marginTop: 20 }}>
                  <label style={{ paddingLeft: 10 }}>Menu bijoux</label>
                  {
                    this.state.picture5.value ? 
                      (
                      <div>
                        <div className={classes.img}>
                          <img src={this.state.picture5.value} width="100%" height="250px"/>
                        </div>
                        <div className={classes.imgHover}>
                          <i className={`${classes.deleteIco} deleteIco fa fa-times fa-2x`} onClick={this._handleRemovePicture.bind(this, 5)} />
                        </div>
                      </div>
                      )
                      :
                      <div>
                        <FormControl 
                          className={classes.formControl}
                          error={ this.state.picture5.error && this.state.picture5.error }
                        >
                          <Button 
                            variant="contained" 
                            className=""
                            fullWidth
                          >
                            <label for="raised-input-file-4" style={{ marginBottom: 0 }}>
                              <CloudUploadOutlinedIcon style={{ padding: 5, fontSize: 35 }} />
                              Photo 4 (PNG, JPG)*
                            </label>
                            <input
                              accept=".png, .jpg, .jpeg"
                              id="raised-input-file-4"
                              name="picture5"
                              type="file"
                              onChange={ event => this.handlePictureChange(event, 5)}
                              ref={this.state.picture5.fileInput}
                              style={{ display: "none" }}
                            />
                          </Button>
                          { this.state.picture5.error ? 
                            <FormHelperText 
                              style={{ textAlign: "center", fontWeight: 400 }}
                            >
                              {this.state.picture5.errorMessage}
                            </FormHelperText> 
                            : 
                            null 
                          }
                        </FormControl>
                      </div>
                  } 
                </div>
                <div className="col-3" style={{ paddingLeft: 0, marginTop: 20 }}>
                  <label style={{ paddingLeft: 10 }}>Menu lingerie</label>
                  {
                    this.state.picture6.value ? 
                      (
                      <div>
                        <div className={classes.img}>
                          <img src={this.state.picture6.value} width="100%" height="250px"/>
                        </div>
                        <div className={classes.imgHover}>
                          <i className={`${classes.deleteIco} deleteIco fa fa-times fa-2x`} onClick={this._handleRemovePicture.bind(this, 6)} />
                        </div>
                      </div>
                      )
                      :
                      <div>
                        <FormControl 
                          className={classes.formControl}
                          error={ this.state.picture6.error && this.state.picture6.error }
                        >
                          <Button 
                            variant="contained" 
                            className=""
                            fullWidth
                          >
                            <label for="raised-input-file-4" style={{ marginBottom: 0 }}>
                              <CloudUploadOutlinedIcon style={{ padding: 5, fontSize: 35 }} />
                              Photo 4 (PNG, JPG)*
                            </label>
                            <input
                              accept=".png, .jpg, .jpeg"
                              id="raised-input-file-4"
                              name="picture6"
                              type="file"
                              onChange={ event => this.handlePictureChange(event, 6)}
                              ref={this.state.picture6.fileInput}
                              style={{ display: "none" }}
                            />
                          </Button>
                          { this.state.picture6.error ? 
                            <FormHelperText 
                              style={{ textAlign: "center", fontWeight: 400 }}
                            >
                              {this.state.picture6.errorMessage}
                            </FormHelperText> 
                            : 
                            null 
                          }
                        </FormControl>
                      </div>
                  } 
                </div>
                <div className="col-3" style={{ paddingLeft: 0, marginTop: 20 }}>
                  <label style={{ paddingLeft: 10 }}>Menu beauté</label>
                  {
                    this.state.picture7.value ? 
                      (
                      <div>
                        <div className={classes.img}>
                          <img src={this.state.picture7.value} width="100%" height="250px"/>
                        </div>
                        <div className={classes.imgHover}>
                          <i className={`${classes.deleteIco} deleteIco fa fa-times fa-2x`} onClick={this._handleRemovePicture.bind(this, 7)} />
                        </div>
                      </div>
                      )
                      :
                      <div>
                        <FormControl 
                          className={classes.formControl}
                          error={ this.state.picture7.error && this.state.picture7.error }
                        >
                          <Button 
                            variant="contained" 
                            className=""
                            fullWidth
                          >
                            <label for="raised-input-file-4" style={{ marginBottom: 0 }}>
                              <CloudUploadOutlinedIcon style={{ padding: 5, fontSize: 35 }} />
                              Photo 4 (PNG, JPG)*
                            </label>
                            <input
                              accept=".png, .jpg, .jpeg"
                              id="raised-input-file-4"
                              name="picture7"
                              type="file"
                              onChange={ event => this.handlePictureChange(event, 7)}
                              ref={this.state.picture7.fileInput}
                              style={{ display: "none" }}
                            />
                          </Button>
                          { this.state.picture7.error ? 
                            <FormHelperText 
                              style={{ textAlign: "center", fontWeight: 400 }}
                            >
                              {this.state.picture7.errorMessage}
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
                    disabled={ this.state.formSubmitDisabled && this.state.formSubmitDisabled }
                  >
                    Enregistrer 
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button 
                    variant="contained"
                    onClick={this.props.handleClose}
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


