import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import urls from '../../Dashboard/routes/urls'



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
    }
  }

  convertToSlug(text){
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
  }


  handleChangeName = (event) => {
    event.preventDefault();
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

    if(
      (values.name) !== "" &&
      (values.title) !== "" &&
      (values.subTitle) !== "" &&
      (values.slug) !== "" &&
      (values.linkText) !== "" &&
      (values.linkUrl) !== ""
    ){
      // SUBMIT THERE
      console.log("Home banner add Form values ", values)
    }
  }

  _goToHomeBanner(){
    this.props.dispatch(push(`${urls.HOMEBANNER}`))
  }

  

  render() {
    const { classes } = this.props
    
    return (
      <div>
        <section className="container">
          <Paper className={classes.paper}>
            <h2 style={{ paddingLeft: 20 }}>Ajout SEO page</h2>
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
