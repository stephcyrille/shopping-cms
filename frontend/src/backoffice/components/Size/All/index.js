import React from "react";
import { connect } from "react-redux";
import { Button, TextField, Paper } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText'
import { withStyles } from '@material-ui/core/styles';
import MaterialTable from "material-table";

import tableIcons from "../../Snippets/EditableTable/TableIcon";
import Dialog from '../../Snippets/MyDialog'
import slugify from '../../../utils/generic'
import Snackbar from '../../Snippets/FlashBagMessage/index'
import appConfig from '../../../config'


const useStyles = theme => ({
  root: {
    
  },
  formControl: {
    width: "100%",
  }
});



export default
@connect((state, props) => ({
}))
@withStyles(useStyles)
class AllSize extends React.Component {
  constructor(props){
    super(props)
    document.title = "Tailles | Afro Yaca Drum"

    this.state = {
      category : {
        value: '',
        error: false,
        errorMessage: null
      },
      name : {
        value: '',
        error: false,
        errorMessage: null
      },
      sizeSystem : {
        value: '',
        error: false,
        errorMessage: null
      },
      quantity : {
        value: '',
        error: false,
        errorMessage: null
      },
      dialogOpen: false,
      
      datas: [],
      categories_data: [],

      snack_open: false,
      snack_message: null,
      snack_color: null,
    }
  }

  componentWillMount(){
    this._fetchListItems()
    this._fetchCategories()
  }

  _fetchListItems(){
    const service = "size"
    const url = `${ appConfig.LISTSBASEURL }${service}`
    window.axios
    .get(`${url}`)
    .then(response => {
      this.setState({
        datas: response.data.results
      })
    })
    .catch(error => {
      console.error(error);
    });
  }

  _fetchCategories(){
    const service = "category"
    const url = `${ appConfig.LISTSBASEURL }${service}`
    window.axios
    .get(`${url}`)
    .then(response => {
      this.setState({
        categories_data: response.data.results
      })
    })
    .catch(error => {
      console.error(error);
    });
  }


  handleSetDialogOpen(){
    this.setState({
      dialogOpen: true
    })
  }

  handleSetDialogClose(){
    this.setState({
      dialogOpen: false,
      category: {
        value: '',
        error: false
      },
      name: {
        value: '',
        error: false
      },
      sizeSystem: {
        value: '',
        error: false
      },
      quantity: {
        value: '',
        error: false
      },
    })
  }

  handleEditCategory(e){
    this.setState({
      category: {
        value: e.target.value,
        error: false
      },
    })
  }

  handleEditName(e){
    this.setState({
      name: {
        value: e.target.value,
        error: false
      },
    })
  }

  handleEditSizeSystem(e){
    this.setState({
      sizeSystem: {
        value: e.target.value,
        error: false
      },
    })
  }

  handleEditQuantity(e){
    this.setState({
      quantity: {
        value: e.target.value,
        error: false
      },
    })
  }


  handdleAddNewRow(e){
    e.preventDefault()
    // Get the value to add on table
    let value = {
      category: this.state.category.value,
      name: this.state.name.value,
      size_system: this.state.sizeSystem.value,
      quantity: this.state.quantity.value,
    }

    if( !value.category ){
      this.setState({
        category: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !value.name ){
      this.setState({
        name: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !value.size_system ){
      this.setState({
        sizeSystem: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !value.quantity ){
      this.setState({
        quantity: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }

    // Check if everything is valid there
    if(
      (value.category) !== "" &&
      (value.name) !== "" &&
      (value.size_system) !== "" &&
      (value.quantity) !== "" 
    ){
      const service = "size/add"
      const formUrl = `${appConfig.FORMBASEURL}${service}`
      // SUBMIT TO THE BACKEND HERE
      this.postToApi(formUrl, value)

      //  Creating copy of the previous table
      // let newData = [...this.state.datas];
      
      // Add item to it 
      // newData.unshift(value)
      // Set State
      this.setState({
        // datas: newData,
        category: {
          value: '',
          error: false,
          errorMessage: null,
        },
        name: {
          value: '',
          error: false,
          errorMessage: null,
        },
        sizeSystem: {
          value: '',
          error: false,
          errorMessage: null,
        },
        quantity: {
          value: '',
          error: false,
          errorMessage: null,
        },
        dialogOpen: false,
      })
    }
  }


  postToApi(form_base_url, data){
    window
    .axios.post(`${form_base_url}`, data)
      .then((response) => {
          this._fetchListItems()
          this.setState({
            snack_open: true,
            snack_message: "Taille enregistrée avec success",
            snack_color: "success"
          })
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
          } else{
            this.setState({
              snack_message: "Erreur survenue lors de l'enregistrement des données sur le serveur",
              snack_color: "error",
              snack_open: true,
            })
          }
        }
      )
  }


  handleDeleteRow(oldData){
    this.setState((prevState) => {
      const datas = [...prevState.datas];
      datas.splice(datas.indexOf(oldData), 1);
      return { ...prevState, datas };
    })
  }

  handleClose = () => {
    this.setState({ snack_open: false });
  };



  render() {
    const { classes } = this.props
    const columns = [
      { title: 'N°', field: 'id' },
      { title: 'Catégorie', field: 'category' },
      { title: 'Titre', field: 'name' },
      { title: 'System de taille', field: 'size_system' },
    ];
    const title = "Tailles" 

    const actions = [
      {
        icon: () => <AddIcon />,
        tooltip: 'Ajouter un groupe',
        isFreeAction: true,
        onClick: (event, rowData) => {
          this.handleSetDialogOpen();
        },
      },
    ];

    const categories = this.state.categories_data


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
        <section>
        <MaterialTable
            data={this.state.datas}
            columns={columns}
            actions={actions}
            title={title}
            icons={tableIcons}
            editable={{
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    this.handleDeleteRow(oldData)
                  }, 600);
                }),
            }}
            options={{
              actionsColumnIndex: -1
            }}
          />
        </section>

        <Dialog title="Ajouter une taille" isOpen={ this.state.dialogOpen } onClose={ this.handleSetDialogClose.bind(this) }>
          <Paper style={{ padding: '2em' }}>
            <div className="row" style={{ marginLeft: 0, marginRight: 0 }}> 
              <div className="col-6">
                <FormControl 
                  className={classes.formControl}
                  error={ this.state.category.error && this.state.category.error }
                >
                  <InputLabel id="group-category-select">Categorie</InputLabel>
                  <Select
                    labelId="group-category-select"
                    id="group-category"
                    value={this.state.category.value}
                    onChange={this.handleEditCategory.bind(this)}
                    fullWidth
                  >
                    {
                      categories.map((val, key) => {
                        return (
                          <MenuItem value={val.id} key={key}>{val.title}</MenuItem>
                        )
                      })
                    }
                  </Select>
                  { this.state.category.error ? <FormHelperText>{this.state.category.errorMessage}</FormHelperText> : null }
                </FormControl>
              </div>
              <div className="col-6">
                <TextField 
                  value={ this.state.name.value } 
                  error={ this.state.name.error && this.state.name.error }
                  onChange={ this.handleEditName.bind(this) }  
                  label="Libéllé de la taille"
                  helperText={ this.state.name.error ? this.state.name.errorMessage : null } 
                  required 
                  fullWidth
                />
              </div>
              <div className="col-6" style={{ marginTop: 10 }}>
                <TextField 
                  value={ this.state.sizeSystem.value } 
                  error={ this.state.sizeSystem.error && this.state.sizeSystem.error }
                  onChange={ this.handleEditSizeSystem.bind(this) }  
                  label="Système de taille"
                  helperText={ this.state.sizeSystem.error ? this.state.sizeSystem.errorMessage : null } 
                  required 
                  fullWidth
                />
              </div>
              <div className="col-6" style={{ marginTop: 10 }}>
                <TextField 
                  value={ this.state.quantity.value } 
                  error={ this.state.quantity.error && this.state.quantity.error }
                  onChange={ this.handleEditQuantity.bind(this) }  
                  label="Quantité"
                  helperText={ this.state.quantity.error ? this.state.quantity.errorMessage : null } 
                  required 
                  fullWidth
                />
              </div>
            </div>
            <div className="row" style={{ marginTop: '2em', marginLeft: 0, marginRight: 0 }}>
              <Button 
                onClick={ this.handdleAddNewRow.bind(this) }
                className="ml-auto"
              >
                Enregistrer
              </Button>
              <Button 
                onClick={ this.handleSetDialogClose.bind(this) }
                className="mr-auto"
              >
                Annuler
              </Button>
            </div>
          </Paper>
        </Dialog>
      </div>
    );
  }
}
