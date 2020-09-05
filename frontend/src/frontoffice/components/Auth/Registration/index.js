import React from "react";
import { connect } from "react-redux";
import {Helmet} from "react-helmet";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"

import { getToken } from '../../../utils/auth_utils'
import appConfig from '../../../config'
import urls from "../../../routes/urls";
import './style.local.css'


const useStyles = theme => ({
  body: {
    backgroundColor: "#fff",
    paddingBottom: 50,
  },
  paper: {
    // marginTop: theme.spacing(8),
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    paddingBottom: 50,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
    padding: "0 10px 0 0",
  },
  checkboxSouscription: {
    paddingTop: 25,
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
});


export default
@connect((state, props) => ({
  registrationCStore : state.registrationCStore,
}))
@withStyles(useStyles)
class RegistrationPage extends React.Component {

  componentWillMount(){
    var token = getToken()
    if(token){
      window.axios
      .get("/auth/user/", {
        headers: { Authorization: `Token ${token}` }
      })
        .then(response => {
          if(response.status == 200){
            window.location.href = `${urls.HOME}`; 
          }
        })
        .catch(err => {
          console.error('User informations', err)
        })
    }
  }

  _handleCheckBoxChange(e){
    console.log("Targettttttt", e.target.value)
    this.props.dispatch(registrationCStoreActions.setChangeBoxValue(e.target.value))
  }

  handleSUbmitForm(e){
    e.preventDefault()

    const values = {
      username: e.target.email.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password1: e.target.password1.value,
      password2: e.target.password2.value,
      gender: e.target.gender.value,
      country: e.target.country.value,
      address: e.target.address.value,
      city: e.target.city.value,
      phone_number: e.target.phone_number.value,
      newsletter: e.target.newsletter.checked,
      birth_date: e.target.birth_date.value,
    }

    this._singUpAPI(values)
  }

  _singUpAPI(params){
    const url = `${appConfig.SINGUP}`

    window.axios
    .post(`${url}`, params )
    .then(response => {
      window.location.href = `${urls.REGISTRATIONSUCCESS}`
    })
    .catch(
      error => {
        console.error("Errrorr", error)
      }  
    )
  }



  render(){
    
    const { classes } = this.props;
    const baseUrl = "https://google.com"
    const pagetitle = "Registration | Shop"
    const description = "Ma description du site"
    const siteImage = "/static/images/logo.png"
    

  	return (
      <div className="">
        <Helmet>
            <meta charSet="utf-8" />
            <title>{pagetitle}</title>
            <link rel="canonical" href={baseUrl} />
            <meta property="og:url" content={baseUrl} />
            {/* <meta property="og:type" content={props.type} /> */}
            <meta property="og:title" content={pagetitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={siteImage} />
        </Helmet>

        <Navbar topNav={true} middleNav={true} megaNav={true} middleRightShow={true} />


        <div className="">
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={12} sm={8} md={6} elevation={6} square className="leftMenu">
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                S'inscrire
              </Typography>
              <form className={`${classes.form}`} noValidate onSubmit={ this.handleSUbmitForm.bind(this) }>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="first_name"
                      label="Nom"
                      name="first_name"
                      autoComplete="first_name"
                      autoFocus
                      size='small'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="last_name"
                      label="Prénom"
                      type="text"
                      id="last_name"
                      autoComplete="last_name"
                      size='small'
                    />
                  </Grid>
                </Grid>
                    
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Adresse mail"
                  name="email"
                  autoComplete="email"
                  size='small'
                />

                <TextField
                  style={{ marginTop: 10 }}
                  variant="outlined"
                  id="date"
                  label="Date de naissance"
                  type="date"
                  name="birth_date"
                  defaultValue="1990-01-01"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password1"
                  label="Mot de passe"
                  type="password"
                  id="password1"
                  size='small'
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password2"
                  label="confirmation mot de passe"
                  type="password"
                  id="password2"
                  size='small'
                />

                <br /> 
                <Grid item xs={12} sm={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="gender">Votre sexe</InputLabel>
                    <Select
                      labelId="gender"
                      id="gender"
                      name="gender"
                      defaultValue="female"
                      // onChange={this.handleChangeGender.bind(this)}
                    >
                      <MenuItem value={"female"}>Femme</MenuItem>
                      <MenuItem value={"male"}>Homme</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="country">Pays de residence</InputLabel>
                      <Select
                        labelId="country"
                        id="country"
                        name="country"
                        defaultValue="cameroun"
                        // onChange={this.handleChangeCountry.bind(this)}
                      >
                        <MenuItem value={"cameroun"}>Cameroun</MenuItem>
                        <MenuItem value={"nigeria"}>Nigeria</MenuItem>
                        <MenuItem value={"angola"}>Angola</MenuItem>
                        <MenuItem value={"kenya"}>Kenya</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
               
                  <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="city">Ville de résidence</InputLabel>
                      <Select
                        labelId="city"
                        id="city"
                        name="city"
                        defaultValue="douala"
                        // onChange={this.handleChangeCity.bind(this)}
                      >
                        <MenuItem value={"yaounde"}>Yaoundé</MenuItem>
                        <MenuItem value={"douala"}>Douala</MenuItem>
                        <MenuItem value={"buea"}>Buea</MenuItem>
                        <MenuItem value={"mbankomo"}>Mbankomo</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="address"
                  label="Adresse de résidence"
                  name="address"
                  size='small'
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="phone_number"
                  label="Numéro de téléphone"
                  name="phone_number"
                  size='small'
                />
                  
                <FormControlLabel
                  style={{ textAlign: "justify" }}
                  className={classes.checkboxSouscription}
                  control={<Checkbox name="newsletter" value="allowExtraEmails" color="primary" />}
                  label="Je veux recevoir les annonces sur les campagnes et offres publicitaires que Afro Yaca Drum offre."
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  S'inscrire
                </Button>
                <Grid container>
                  <Grid item>
                    <a href={`${urls.LOGIN}`}>
                      {"Ou se connecter"}
                    </a>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
          <Grid item xs={false} sm={4} md={6} className={classes.image} />
        </Grid>
  		</div>

      <Footer />
    </div>
  	)
  }
}
