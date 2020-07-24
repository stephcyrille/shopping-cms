import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import Table from '../../Snippets/EditableTable/index'
import urls from "../../Drawer/router/urls"



export default
@connect((state, props) => ({
}))
class AllMenuPicture extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Images menu principal | Afro Yaca Drum'
  }

  _goToProduct(){
    this.props.dispatch(push(`${urls.ADDPRODUCT}`))
  }


  render() {
    const title = "Toutes les images" 
    const columns = [
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
