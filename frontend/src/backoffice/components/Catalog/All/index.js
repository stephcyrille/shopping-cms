import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Button from '@material-ui/core/Button';

import Table from '../../Snippets/EditableTable/index'
import Snackbar from '../../Snippets/FlashBagMessage/index'
import urls from '../../Dashboard/routes/urls'



export default
@connect((state, props) => ({
}))
class AllCatalog extends React.Component {
  constructor(props){
    super(props)
    document.title = "Catalogues | Afro Yaca Drum"
    this.state = {
      snack_open: false,
      snack_message: null,
      snack_color: null,
    }
  }

  componentWillMount(){
    let param = this.props.location.state ? this.props.location.state.snack_open : false

    if(param==true){
      this.setState({
        snack_open: true,
        snack_message: "Catalogue enregistrée avec success",
        snack_color: "success"
      })
    }
  }

  _goToAddCatalog(){
    this.props.dispatch(push(`${urls.ADDCATALOG}`))
  }
  
  _goToEditCatalog(){
    this.props.dispatch(push(`${urls.ADDCATALOG}`))
  }

  handleClose = () => {
    this.setState({ snack_open: false });
  }
  
  

  render() {
    const columns = [
      { title: 'N°', field: 'id' },
      { title: 'Titre', field: 'title' },
      { title: 'Slug', field: 'slug' },
    ];
    const title = "Catalogues" 
    const datas = [
      { id: 1 ,title: 'Femme', slug: 'femme', },
      { id: 2 ,title: 'Enfant', slug: 'enfant' },
      { id: 3 ,title: 'Homme', slug: 'homme', },
    ]

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
          <Button
            onClick={ this._goToAddCatalog.bind(this) }
            variant="contained"
            color="primary"
          >
            <i className="fa fa-plus"/> &nbsp;&nbsp;
            Ajouter un catalogue
          </Button>

          <br />
          <br />

          <Table 
            table_title={title} 
            table_columns={columns} 
            table_datas={datas} 
            simple={true} 
            goToEdit={this._goToEditCatalog.bind(this)} 
          />
        </section>
      </div>
    );
  }
}
