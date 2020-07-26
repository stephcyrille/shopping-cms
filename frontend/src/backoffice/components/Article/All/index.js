import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Button from '@material-ui/core/Button';

import Table from '../../Snippets/EditableTable/index'
import urls from "../../Dashboard/routes/urls"



export default
@connect((state, props) => ({
}))
class AllArticle extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Articles | Afro Yaca Drum'
  }

  _goToAddArticle(){
    this.props.dispatch(push(`${urls.ADDARTICLE}`))
  }

  _goToEditArticle(){
    this.props.dispatch(push(`${urls.ADDARTICLE}`))
  }


  render() {
    const title = "Tous les articles" 
    const columns = [
      { title: 'N°', field: 'id' },
      { title: 'Titre', field: 'title' },
      { title: 'Auteur', field: 'author' },
      { title: 'Résumé', field: 'resume' },
      { title: 'Date pub.', field: 'date_pub' },
    ];
    const datas = [
      { 
        id: 1,
        title: 'Nouveaux Horizons', 
        author: 'Stephcyrille', 
        resume: 'A smoll pieces of word write and spell each seconds' , 
        date_pub: (new Date).toLocaleDateString()  
      },
      { 
        id: 2,
        title: 'Rihanna en Fenty', 
        author: 'Stephcyrille', 
        resume: 'La nouvelle collection de la marque de l\'artiste' , 
        date_pub: (new Date).toLocaleDateString()  
      },
    ]

    return (
      <div>
        <section>
          <Button
            onClick={ this._goToAddArticle.bind(this) }
            variant="contained"
            color="primary"
          >
            <i className="fa fa-plus"/> &nbsp;&nbsp;
            Ajouter un article
          </Button>

          <br />
          <br />

          <Table 
            table_title={title} 
            table_columns={columns} 
            table_datas={datas} 
            simple={true} 
            goToEdit={this._goToEditArticle.bind(this)} 
          />
        </section>
      </div>
    );
  }
}
