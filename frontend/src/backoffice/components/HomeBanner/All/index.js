import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Button from '@material-ui/core/Button';

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

  _goToAddHomeBanner(){
    this.props.dispatch(push(`${urls.ADDHOMEBANNER}`))
  }

  _goToEditHomeBanner(){
    this.props.dispatch(push(`${urls.ADDHOMEBANNER}`))
  }


  render() {
    const title = "Bannières index" 
    const columns = [
      { title: 'N°', field: 'id' },
      { title: 'Nom', field: 'name' },
      { title: 'Titre', field: 'title' },
      { title: 'Sous titre', field: 'subTitle' },
      { title: 'Text lien', field: 'linkText' },
      { title: 'Lien Url', field: 'linkUrl' },
      { title: 'Actif', field: 'active' },
    ];
    const datas = [
      { 
        id: 1,
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
          <Button
            onClick={ this._goToAddHomeBanner.bind(this) }
            variant="contained"
            color="primary"
          >
            <i className="fa fa-plus"/> &nbsp;&nbsp;
            Ajouter une Banière
          </Button>

          <br />
          <br />

          <Table 
            table_title={title} 
            table_columns={columns} 
            table_datas={datas} 
            simple={true} 
            goToEdit={this._goToEditHomeBanner.bind(this)} 
          />
        </section>
      </div>
    );
  }
}
