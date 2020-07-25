import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

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

  _goToProduct(){
    this.props.dispatch(push(`${urls.ADDPRODUCT}`))
  }


  render() {
    const title = "Tous les articles" 
    const columns = [
      { title: 'Titre', field: 'title' },
      { title: 'Auteur', field: 'author' },
      { title: 'Résumé', field: 'resume' },
      { title: 'Date publication', field: 'date_pub' },
    ];
    const datas = [
      { 
        title: 'Nouveaux Horizons', 
        author: 'Stephcyrille', 
        resume: 'A smoll pieces of word write and spell each seconds' , 
        date_pub: (new Date).toLocaleDateString()  
      },
      { 
        title: 'Rihanna en Fenty', 
        author: 'Stephcyrille', 
        resume: 'La nouvelle collection de la marque de l\'artiste' , 
        date_pub: (new Date).toLocaleDateString()  
      },
    ]

    return (
      <div>
        <section>
          <Table 
            table_title={title} 
            table_columns={columns} 
            table_datas={datas} 
            product={true} 
            addProduct={this._goToProduct.bind(this)} 
          />
        </section>
      </div>
    );
  }
}
