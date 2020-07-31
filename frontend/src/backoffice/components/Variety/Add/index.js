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
class AddVariety extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Variété | Afro Yaca Drum'

    this.state = {
      color : {
        value: '',
        error: false,
        errorMessage: null
      },
      size : {
        value: '',
        error: false,
        errorMessage: null
      },
      quantity : {
        value: '',
        error: false,
        errorMessage: null
      },

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
      formSubmitDisabled: true,
      formValid: false,
      editMode: this.props.editMode,
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

      this.setState({
        color: {
          value: this.props.initialsValues.color},
        size: {
          value: this.props.initialsValues.size},
        quantity: {
          value: this.props.initialsValues.quantity},
      })
    }
    else{
      this.setState({
        color: {
          value: ''
        },
        size: {
          value: ''
        },
        quantity: {
          value: ''
        },
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


  handleChangeColor = (event) => {
    this.setState({
      color: {
        value: event.target.value,
        error: false,
      },
      formSubmitDisabled: false
    })
  }


  handleChangeSize = (event) => {
    this.setState({
      size: {
        value: event.target.value,
        error: false
      }, 
      formSubmitDisabled: false
    })
  }


  handleChangeQuantity = (event) => {
    event.preventDefault();
    
    this.setState({
      quantity: {
        value: event.target.value,
        error: false
      }
    })
  }
  
  _handleFormOnChange(event){
    event.preventDefault();
  
    this.setState({
      formSubmitDisabled: false
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
      else{
        this.setState({
          picture4: {
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
    else{
      this.setState({
        picture4: {
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

    console.log("EDIT MODEEEEEEEE", this.state.editMode);
    

    if(!this.state.editMode){
      var values = {
        color: this.state.color.value,
        size: this.state.size.value,
        quantity: this.state.quantity.value,
        picture1: this.state.picture1.fileInput,
        picture2: this.state.picture2.fileInput,
        picture3: this.state.picture3.fileInput,
        picture4: this.state.picture4.fileInput,
      }

      console.log("Form Values", values)
      if( !values.color ){
        this.setState({
          color: {
            error: true,
            errorMessage: "Selectionner une valeur"
          },
        })
      }
      if( !values.size ){
        this.setState({
          size: {
            error: true,
            errorMessage: "Selectionner une valeur"
          },
        })
      }
      if( !values.quantity ){
        this.setState({
          quantity: {
            error: true,
            errorMessage: "La valeur du champ ne doit pas être vide"
          },
        })
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
      
      // Form s valid here
      if(
        (values.color) !== "" &&
        (values.size) !== "" &&
        (values.quantity) !== "" &&
        (values.picture1 instanceof File) === true &&
        (values.picture2 instanceof File) === true &&
        (values.picture3 instanceof File) === true &&
        (values.picture4 instanceof File) === true
      ){
        console.log("Data Posted! Greatttt=== Verif new pics====", values)
        // Post form data on server
        // We will use redux for updating the varieties table values

        const { id_initial } = this.props.addProductStore
        const variety = {
          id : id_initial,
          color: values.color,
          size: values.size,
          quantity: parseInt(values.quantity),
          picture1: values.picture1,
          picture2: values.picture2,
          picture3: values.picture3,
          picture4: values.picture4,
        }

        var varieties = this.props.addProductStore.varieties
        varieties.push(variety)

        this.props.dispatch(addProductStoreActions.addVariety(varieties))
        this.props.dispatch(addProductStoreActions.increaseId(id_initial + 1))

        // Close modal when everything is ok
        this.props.handleClose()
      } 
    }
    else {
      var values = {
        color: this.state.color.value,
        size: this.state.size.value,
        quantity: this.state.quantity.value,
        picture1: this.state.picture1.fileInput,
        picture2: this.state.picture2.fileInput,
        picture3: this.state.picture3.fileInput,
        picture4: this.state.picture4.fileInput,
      }

      console.log("Form Values state", this.state)
      if( !values.color ){
        this.setState({
          color: {
            error: true,
            errorMessage: "Selectionner une valeur"
          },
        })
      }
      if( !values.size ){
        this.setState({
          size: {
            error: true,
            errorMessage: "Selectionner une valeur"
          },
        })
      }
      if( !values.quantity ){
        this.setState({
          quantity: {
            error: true,
            errorMessage: "La valeur du champ ne doit pas être vide"
          },
        })
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

      
      const variety = {
        id : this.state.initial.id,
        color: values.color,
        size: values.size,
        quantity: parseInt(values.quantity),
        picture1: values.picture1,
        picture2: values.picture2,
        picture3: values.picture3,
        picture4: values.picture4,
      }
      const varieties = this.props.addProductStore.varieties

      // replacing without caring about position
      // const newArray = [...varieties.slice(0, this.state.initial.id), variety, ...varieties.slice(this.state.initial.id + 1)]
      
      const newArray = [...varieties.filter(item => item.id !== variety.id), variety]
      this.props.dispatch(addProductStoreActions.addVariety(newArray))

      console.log("new array ======", newArray)
      this.props.handleClose()
    }

  }


  

  render() {
    const { classes } = this.props

    console.log("Update mode initials values =========", this.state.initial)



    return (
      <div>
        <section className="container">
          <Paper className={classes.paper}>
            <h2>Ajouter une variété</h2>
            <form 
              className={`${classes.form}`} 
              autoComplete="off" 
              onSubmit={ this._handleOnSubmit.bind(this) } 
              onChange={ this._handleFormOnChange.bind(this) }
              noValidate 
            >
              <div className={`${classes.row} row`}>
                <div className="col-3">
                  {/* <Autocomplete
                    id="size-small-standard"
                    size="small"
                    options={this.state.top100Films}
                    getOptionLabel={(option) => option.title}
                    onChange={this.handleChangeColor.bind(this)}
                    value={this.state.top100Films[this.state.color.value]}
                    renderInput={(params) => (
                      <TextField 
                        {...params} 
                        variant="standard" 
                        label="Selectionner la couleur" 
                        name="color" 
                        placeholder="Couleur" 
                        error={ this.state.color.error && this.state.color.error }
                        helperText={ this.state.color.error ? this.state.color.errorMessage : null }
                        required
                        fullWidth
                      />
                    )}
                  /> */}
                  <FormControl 
                    className={classes.formControl}
                    error={ this.state.color.error && this.state.color.error }
                  >
                    <InputLabel id="product-color-select">Couleur</InputLabel>
                    <Select
                      labelId="product-color-select"
                      id="variety-color"
                      value={ this.state.color.value }
                      onChange={this.handleChangeColor.bind(this)}
                      fullWidth
                    >
                      <MenuItem value={"1"}>Rouge</MenuItem>
                      <MenuItem value={'2'}>Bleu</MenuItem>
                      <MenuItem value={"3"}>Vert</MenuItem>
                      <MenuItem value={"4"}>Noir</MenuItem>
                    </Select>
                    { this.state.color.error ? <FormHelperText>{this.state.color.errorMessage}</FormHelperText> : null }
                  </FormControl>
                </div>
                <div className="col-3">
                  {/* <Autocomplete
                    id="size-small-standard"
                    size="small"
                    options={this.state.top100Films}
                    getOptionLabel={(option) => option.title}
                    onChange={this.handleChangeSize.bind(this)}
                    value={this.state.top100Films[this.state.size.value]}
                    renderInput={(params) => (
                      <TextField 
                        {...params} 
                        variant="standard" 
                        label="Selectionner la taille" 
                        placeholder="Produit" 
                        name="size" 
                        error={ this.state.size.error && this.state.size.error }
                        helperText={ this.state.size.error ? this.state.size.errorMessage : null }
                        required
                        fullWidth
                      />
                    )}
                  /> */}
                   <FormControl 
                    className={classes.formControl}
                    error={ this.state.size.error && this.state.size.error }
                  >
                    <InputLabel id="variety-size-select">Taille</InputLabel>
                    <Select
                      labelId="variety-size-select"
                      id="product-collection"
                      value={ this.state.size.value}
                      onChange={this.handleChangeSize.bind(this)}
                      fullWidth
                    >
                      <MenuItem value={"1"}>M</MenuItem>
                      <MenuItem value={'2'}>S</MenuItem>
                      <MenuItem value={"3"}>XS</MenuItem>
                      <MenuItem value={"4"}>XXL</MenuItem>
                    </Select>
                    { this.state.size.error ? <FormHelperText>{this.state.size.errorMessage}</FormHelperText> : null }
                  </FormControl>
                </div>
                <div className="col-3">
                  <FormControl 
                      className={classes.formControl}
                  >
                    <TextField
                      id="variety-quantity"
                      label="Quantité"
                      name="name"
                      type="number"
                      onChange={ this.handleChangeQuantity.bind(this) }
                      placeholder={"Quantité"}
                      value={ this.state.quantity.value }
                      type="text"
                      error={ this.state.quantity.error && this.state.quantity.error }
                      helperText={ this.state.quantity.error ? this.state.quantity.errorMessage : null }
                      required
                      fullWidth
                    />
                  </FormControl>
                </div>
              </div>

             
              <div className={`row ${classes.row}`} style={{ paddingLeft: 10 }}>
                <div className="col-3" style={{ paddingLeft: 0 }}>
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
                            <label htmlFor="raised-input-file-1" style={{ marginBottom: 0 }}>
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
                            <label htmlFor="raised-input-file-2" style={{ marginBottom: 0 }}>
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
                            <label htmlFor="raised-input-file-3" style={{ marginBottom: 0 }}>
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
                            <label htmlFor="raised-input-file-4" style={{ marginBottom: 0 }}>
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


