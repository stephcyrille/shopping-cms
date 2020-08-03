import React from "react";
import { connect } from "react-redux";
import { Button, TextField, Paper } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Add as AddIcon } from "@material-ui/icons";
import { withStyles } from '@material-ui/core/styles';
import MaterialTable from "material-table";

import tableIcons from "../../Snippets/EditableTable/TableIcon";
import Dialog from '../../Snippets/MyDialog'
import { slugify } from '../../../utils/generic'
import Snackbar from '../../Snippets/FlashBagMessage/index'
import appConfig from '../../../config'



const useStyles = theme => ({
  root: {
    
  },
  formControl: {
    marginTop: 10,
    width: "100%",
  }
});



export default
@connect((state, props) => ({
}))
@withStyles(useStyles)
class AllGroup extends React.Component {
  constructor(props){
    super(props)
    document.title = "Type de produit | Afro Yaca Drum"

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
      category : {
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
    const service = "group"
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
      title: {
        value: '',
        error: false
      },
      slug: {
        value: '',
        error: false
      },
      category: {
        value: '',
        error: false
      }
    })
  }

  handleEditTitle(e){
    if((e.target.value).length < 51){
      this.setState({
        title: {
          value: e.target.value,
          error: false
        },
        slug: {
          value: slugify(e.target.value),
          error: false
        }
      })
    } else {
      this.setState({
        title: {
          error: true,
          errorMessage: "La valeur du champ ne doit pas être supérieur à 50"
        }
      })
    }
  }

  handleEditSlug(e){
    this.setState({
      slug: {
        value: slugify(e.target.value),
        error: false
      }
    })
  }

  handleEditCategory(e){    
    this.setState({
      category: {
        value: e.target.value,
        error: false
      }
    })
  }

  handdleAddNewRow(e){
    e.preventDefault()
    // Get the value to add on table
    let value = {
      title: this.state.title.value,
      slug: this.state.slug.value,
      category: this.state.category.value,
    }

    if( !value.title ){
      this.setState({
        title: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !value.slug ){
      this.setState({
        slug: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }
    if( !value.category ){
      this.setState({
        category: {
          error: true,
          errorMessage: "Le champ ne doit pas être vide"
        },
      })
    }

    // Check if everything is valid there
    if(
      (value.title) !== "" &&
      (value.slug) !== "" &&
      (value.category) !== "" 
    ){
      const service = "group/add"
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
        title: {
          value: '',
          error: false,
          errorMessage: null,
        },
        slug: {
          value: '',
          error: false,
          errorMessage: null,
        },
        category: {
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
      .then(() => {
          this._fetchListItems()
          this.setState({
            snack_open: true,
            snack_message: "Type de produit enregistré avec success",
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
      { title: 'Titre', field: 'title' },
      { title: 'Slug', field: 'slug' },
      { title: 'Catégorie', field: 'category' },
    ];
    const title = "Type de produit" 

    const actions = [
      {
        icon: () => <AddIcon />,
        tooltip: 'Ajouter un type de produit',
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

        <Dialog title="Ajouter un type de produit" isOpen={ this.state.dialogOpen } onClose={ this.handleSetDialogClose.bind(this) }>
          <Paper style={{ padding: '2em' }}>
            <div className="row" style={{ marginLeft: 0, marginRight: 0 }}> 
              <div className="col-6">
                <TextField 
                  value={ this.state.title.value } 
                  error={ this.state.title.error && this.state.title.error }
                  onChange={ this.handleEditTitle.bind(this) } 
                  label="Nom du type" 
                  helperText={ this.state.title.error ? this.state.title.errorMessage : null }
                  fullWidth
                  required
                />
              </div>
              <div className="col-6">
                <TextField 
                  value={ this.state.slug.value } 
                  error={ this.state.slug.error && this.state.slug.error }
                  onChange={ this.handleEditSlug.bind(this) }  
                  label="Slug"
                  helperText={ this.state.slug.error ? this.state.slug.errorMessage : null } 
                  disabled 
                  fullWidth
                />
              </div>
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
