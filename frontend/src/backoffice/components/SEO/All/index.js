import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Button from '@material-ui/core/Button';

import Table from '../../Snippets/EditableTable/index'

import urls from "../../Dashboard/routes/urls"



export default
@connect((state, props) => ({
}))
class SEO extends React.Component {
  constructor(props){
    super(props)
    document.title = "SEO | Afro Yaca Drum"
  }


  _goToAddSEO(){
    this.props.dispatch(push(`${urls.ADDSEO}`))
  }

  _goToEditSEO(){
    this.props.dispatch(push(`${urls.ADDSEO}`))
  }


  render() {
    const title = "Optimisation sur les moteurs de recherche" 
    const columns = [
        { title: 'N°', field: 'id' },
        { title: 'Titre Page', field: 'pageTitle' },
        { title: 'Slug', field: 'slug' },
        { title: 'Description', field: 'description' },
        { title: 'Mots clés', field: 'keywords' },
        { title: 'URL', field: 'baseUrl' },
      ];
    const datas = [
      { 
        id: 1, 
        pageTitle: 'Acceuil', 
        description: 'Page d\'accueil de Afro yaca drum description et voila le reste ici', 
        keywords: 'Afro, Vêtement, Mode, Fshion', 
        baseUrl: '/shop',
        slug: 'home', 
      },
    ]

    return (
      <div>
        <section>
          <Button
            onClick={ this._goToAddSEO.bind(this) }
            variant="contained"
            color="primary"
          >
            <i className="fa fa-plus"/> &nbsp;&nbsp;
            Ajouter seo page
          </Button>

          <br />
          <br />

          <Table 
            table_title={title} 
            table_columns={columns} 
            table_datas={datas} 
            simple={true} 
            goToEdit={this._goToEditSEO.bind(this)} 
          />
        </section>
      </div>
    );
  }
}
