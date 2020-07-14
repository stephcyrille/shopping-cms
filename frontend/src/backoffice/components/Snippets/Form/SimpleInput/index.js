import React from "react";
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';



export default function SimpleInput(props){
  const [state, setState] = React.useState({
    name : '',
    error: false,
    errorMessage: null,
  });



  const handleChange = (event) => {
    event.preventDefault();
    

    if(event.target.value.length < 5){
      setState({
        name: event.target.value,
        error: true,
        errorMessage: "Le champ doit être contenir au moins 4 caractères"
      })
    } else {
      setState({
        name: event.target.value,
        error: false
      })
    }

    console.log("Event", event.target.value, state.name)
  }
  

  return (
    <FormControl error={ state.error ? state.error : state.error }>
      <InputLabel htmlFor="component-error">Name</InputLabel>
      <Input
        id="component-error"
        value={state.name}
        onChange={ handleChange }
        aria-describedby="component-error-text"
      />
      { state.error ? <FormHelperText id="component-error-text">{state.errorMessage}</FormHelperText> : null }
    </FormControl>
  );
}
