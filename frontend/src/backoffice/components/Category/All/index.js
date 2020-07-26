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
class AllCategory extends React.Component {
  constructor(props){
    super(props)
    document.title = "Categories | Afro Yaca Drum"
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
        snack_message: "Categorie enregistrée avec success",
        snack_color: "success"
      })
    }
  }


  _goToAddCategory(){
    this.props.dispatch(push(`${urls.ADDCATEGORY}`))
  }
  
  _goToEditCategory(){
    this.props.dispatch(push(`${urls.ADDCATEGORY}`))
  }

  handleClose = () => {
    this.setState({ snack_open: false });
  };


  render() {
    const columns = [
      { title: 'N°', field: 'title' },
      { title: 'Titre', field: 'title' },
      { title: 'Slug', field: 'slug' },
    ];
    const title = "Categories" 
    const datas = [
      { id: 1, title: 'Robe', slug: 'robe' },
      { id: 2, title: 'Jupe', slug: 'jupe' },
      { id: 3, title: 'Leggins', slug: 'leggins' },
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
            onClick={ this._goToAddCategory.bind(this) }
            variant="contained"
            color="primary"
          >
            <i className="fa fa-plus"/> &nbsp;&nbsp;
            ajouter une categorie
          </Button>

          <br />
          <br />

          <Table 
            table_title={title} 
            table_columns={columns} 
            table_datas={datas} 
            simple={true} 
            goToEdit={this._goToEditCategory.bind(this)} 
          />
        </section>
      </div>
    );
  }
}
