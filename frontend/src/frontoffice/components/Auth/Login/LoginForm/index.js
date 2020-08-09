import React from "react";
import { connect } from "react-redux";

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

import appConfig from '../../../../config'
import { saveToken, getToken } from '../../../../utils/auth_utils'
import urls from "../../../../routes/urls";



const useStyles = theme => ({
  root: {
    
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


export default
@connect((state, props) => ({}))
@withStyles(useStyles)
class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: "test",
      password: "test",
    }
  }

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

  handleSubmit(event){
    event.preventDefault();
    const params = {
      username: this.state.email,
      password: this.state.password,
    }
    this._loginAPI(params)
  }

  _loginAPI(params){
    const url = `${appConfig.LOGIN}`

    window.axios
    .post(`${url}`, { username: params.username, password: params.password })
    .then(response => {
      console.log("LOGIN DATA", response.data)
      saveToken(response.data.key);
      window.location.href = `${urls.HOME}`; 
    })
    .catch(
      error => {
        console.error("Errrorr", error)
      }  
    )
  }

  _handleEmailChange(e){
    this.setState({
      email : e.target.value
    })
  }
  
  _handlePasswordChange(e){
    this.setState({
      password: e.target.value
    })
  }

  render(){
    
    const { classes } = this.props;

  	return (
  		<div className="">
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={12} sm={8} md={6} elevation={6} square className={`${classes.left_menu} leftMenu`} >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Se connecter
              </Typography>
              <form className={classes.form} onSubmit={ this.handleSubmit.bind(this) }>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoFocus
                  value={this.state.email}
                  onChange={ this._handleEmailChange.bind(this) }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  value={this.state.password}
                  onChange={ this._handlePasswordChange.bind(this) }
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Se souvenir de moi"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  se connecter
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Mot de passe oublier?
                    </Link>
                  </Grid>
                  <Grid item>
                    <a href={`${urls.REGISTRATION}`} variant="body2">
                      {"Vous n'avez pas de compte? S'inscrire"}
                    </a>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
          <Grid item xs={false} sm={4} md={6} className={classes.image} />
        </Grid>
  		</div>
  	)
  }
}
