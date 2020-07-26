import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Button from '@material-ui/core/Button';

import Table from '../../Snippets/EditableTable/index'

import urls from '../../Dashboard/routes/urls'



export default
@connect((state, props) => ({
}))
class AllCatalog extends React.Component {
  constructor(props){
    super(props)
    document.title = "Catalogues | Afro Yaca Drum"
  }


  _goToAddCatalog(){
    this.props.dispatch(push(`${urls.ADDCATALOG}`))
  }
  
  _goToEditCatalog(){
    this.props.dispatch(push(`${urls.ADDCATALOG}`))
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
