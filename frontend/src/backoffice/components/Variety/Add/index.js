import React from "react";
import { connect } from "react-redux";
import { Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';




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

      top100Films : [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 }
      ],

      formSubmitDisabled: true
    }
  }


  handleChangeColor = (event) => {
    // Because the autocomplete element don't trigger the change action on the form component
    // To preserve system resource, we will check if the formSubmitDisabled state is already false 
    if(this.state.formSubmitDisabled==false){
      this.setState({
        color: {
          value: this.state.top100Films[event.target.value],
          error: false
        },
      })
    } else {
      this.setState({
        color: {
          value: this.state.top100Films[event.target.value],
          error: false
        },
        formSubmitDisabled: false
      })
    }
  }

  handleChangeSize = (event) => {
    // Because the autocomplete element don't trigger the change action on the form component
    // To preserve system resource, we will check if the formSubmitDisabled state is already false 
    if(this.state.formSubmitDisabled==false){
      this.setState({
        size: {
          value: this.state.top100Films[event.target.value],
          error: false
        },
      })
    } else {
      this.setState({
        size: {
          value: this.state.top100Films[event.target.value],
          error: false
        },
        formSubmitDisabled: false
      })
    }
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


  _handleOnSubmit(event){
    event.preventDefault();
    // console.log("Form Values", event.target)
    // Make the validation process here

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

    // Call validator here, then return erros
    // const validator = validator(valuer) 

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
  
  

  render() {
    const { classes } = this.props


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
                  <Autocomplete
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
                  />
                </div>
                <div className="col-3">
                  <Autocomplete
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
                  />
                </div>
                <div className="col-3">
                  <TextField
                    id="variety-quantity"
                    label="Quantité"
                    name="name"
                    type="number"
                    onChange={ this.handleChangeQuantity.bind(this) }
                    placeholder={"Quantité"}
                    value={this.state.quantity.value}
                    type="text"
                    error={ this.state.quantity.error && this.state.quantity.error }
                    helperText={ this.state.quantity.error ? this.state.quantity.errorMessage : null }
                    required
                    fullWidth
                  />
                </div>
              </div>

             
              <div className={`row ${classes.row}`} style={{ paddingLeft: 10 }}>
                <div className="col-3" style={{ paddingLeft: 0 }}>
                  {
                    this.state.picture1.value ? 
                      (
                      <div>
                        <div className={classes.img}>
                          <img src={this.state.picture1.value} width="100%" height="250px"/>
                        </div>
                        <div className={classes.imgHover}>
                          <i className={`${classes.deleteIco} deleteIco fa fa-times fa-2x`} onClick={this._handleRemovePicture.bind(this, 1)} />
                        </div>
                      </div>
                      )
                      :
                      <div>
                        <Button 
                          variant="raised" 
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
                        <Button 
                          variant="raised" 
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
                        <Button 
                          variant="raised" 
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
                        <Button 
                          variant="raised" 
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


