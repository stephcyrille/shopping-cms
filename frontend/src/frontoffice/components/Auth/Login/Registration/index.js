import React from "react";
import { connect } from "react-redux";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {Helmet} from "react-helmet";


import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"

import { step3CStoreActions } from './store';

import './style.local.css'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = theme => ({
  body: {
    backgroundColor: "#fff",
    paddingBottom: 50,
  },
  paper: {
    // marginTop: theme.spacing(8),
    paddingTop: 10,
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
  }
});


export default
@connect((state, props) => ({
  registrationCStore : state.registrationCStore,
}))
@withStyles(useStyles)
class RegistrationPage extends React.Component {

  _handleCheckBoxChange(e){
    console.log("Targettttttt", e.target.value)
    this.props.dispatch(registrationCStoreActions.setChangeBoxValue(e.target.value))
  }

  render(){
    
    const { classes } = this.props;
    const baseUrl = "https://google.com"
    const pagetitle = "Registration | Shop"
    const description = "Ma description du site"
    const siteImage = "/static/images/logo.png"
    const { gender } = this.props.registrationCStore

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

        <Navbar topNav={true} middleNav={true} megaNav={false} middleRightShow={true} />

        <div className="" className={classes.body}>
          <CssBaseline />
          <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Creation de compte
              </Typography>
              <form className={`${classes.form}`} noValidate>
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
                />

                <br /> 
                <Grid item xs={12} sm={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="gender">Votre sexe</InputLabel>
                    <Select
                      labelId="gender"
                      id="gender"
                      value="gender"
                      // onChange={handleChange}
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
                        value="country"
                        // onChange={handleChange}
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
                        value="city"
                        // onChange={handleChange}
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
                  id="phone_number"
                  label="Numéro de téléphone"
                  name="phone_number"
                />
                  
                <FormControlLabel
                  className={classes.checkboxSouscription}
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
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
              </form>
            </div>
          </Container>
        </div>

        <Footer />
    </div>
  	)
  }
}
