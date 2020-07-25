import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import Table from '../../Snippets/EditableTable/index'
import urls from "../../Dashboard/routes/urls"



export default
@connect((state, props) => ({
}))
class HomeBanner extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Bannière Accueil | Afro Yaca Drum'
  }

  _goToProduct(){
    this.props.dispatch(push(`${urls.ADDPRODUCT}`))
  }


  render() {
    const title = "Bannières index" 
    const columns = [
      { title: 'Nom', field: 'name' },
      { title: 'Titre', field: 'title' },
      { title: 'Sous titre', field: 'subTitle' },
      { title: 'Text lien', field: 'linkText' },
      { title: 'Lien Url', field: 'linkUrl' },
      { title: 'Actif', field: 'active' },
    ];
    const datas = [
      { 
        name: 'Banière Collection', 
        title: 'Découvrez la collection Madame', 
        subTitle: "Explorer toute la collection que madame vous propose chez Afro Yaca Drum" , 
        linkText: 'Découvrir maintenant' , 
        linkUrl: '/shop' , 
        active: true  
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
