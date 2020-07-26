import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Button from '@material-ui/core/Button';

import Table from '../../Snippets/EditableTable/index'
import urls from "../../Dashboard/routes/urls"



export default
@connect((state, props) => ({
}))
class AllMenuPicture extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Images menu principal | Afro Yaca Drum'
  }

  _goToAddNew(){
    this.props.dispatch(push(`${urls.ADDMAINMENUPIC}`))
  }

  _goToEditNew(){
    this.props.dispatch(push(`${urls.ADDMAINMENUPIC}`))
  }


  render() {
    const title = "Toutes les images" 
    const columns = [
      { title: 'N°', field: 'id' },
      { title: 'Evenement', field: 'event' },
      { title: 'Vêtements', field: 'clothes' },
      { title: 'Chaussures', field: 'shoes' },
      { title: 'Sacs', field: 'bags' },
      { title: 'Accessoires', field: 'accesories' },
      { title: 'Bijoux', field: 'jewelery' },
      { title: 'Lingerie', field: 'lingerie' },
      { title: 'Beauté', field: 'beauty' },
    ];
    const datas = [
      { 
        id: 1,
        event: 'Evenement 1', 
        clothes: 'Photo vet.', 
        shoes: 'Photo chaus.',
        bags: 'Photo sac.',
        accesories: 'Photo acces.',
        jewelery: 'Photo bij.',
        lingerie: 'Photo lin.',
        beauty: 'Photo beau.',
      },
    ]

    return (
      <div>
        <section>
          <Button
            onClick={ this._goToAddNew.bind(this) }
            variant="contained"
            color="primary"
          >
            <i className="fa fa-plus"/> &nbsp;&nbsp;
            Ajouter
          </Button>

          <br />
          <br />

          <Table 
            table_title={title} 
            table_columns={columns} 
            table_datas={datas} 
            simple={true} 
            goToEdit={this._goToEditNew.bind(this)} 
          />
        </section>
      </div>
    );
  }
}
