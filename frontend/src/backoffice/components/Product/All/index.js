import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import Table from '../../Snippets/EditableTable/index'
import urls from "../../Dashboard/routes/urls"



export default
@connect((state, props) => ({
}))
class AllProduct extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Produits | Afro Yaca Drum'
  }

  _goToProduct(){
    this.props.dispatch(push(`${urls.ADDPRODUCT}`))
  }


  render() {
    const title = "Tous les produits" 
    const columns = [
      { title: 'Reférence', field: 'ref' },
      { title: 'Nom', field: 'title' },
      { title: 'Prix', field: 'price' },
      { title: 'Matière', field: 'material' },
      { title: 'Variétes', field: 'variety' },
    ];
    const datas = [
      { ref: 'REF20200312', title: 'Lunette CC', price: 435000 , material: 'Or' , variety: 10  },
      { ref: 'REF20200432', title: 'Pantalon AZX', price: 15000 , material: 'Jean' , variety: 10  },
      { ref: 'REF20200432', title: 'Chemisier ZARA', price: 60000 , material: 'Cachemir' , variety: 10  },
      { ref: 'REF20200093', title: 'Veste Mango', price: 16000 , material: 'Cuir' , variety: 10  },
      { ref: 'REF20200035', title: 'Haut Fenti', price: 12000 , material: 'Coton' , variety: 10  },
      { ref: 'REF20200312', title: 'Lunette CC', price: 435000 , material: 'Or' , variety: 10  },
      { ref: 'REF20200432', title: 'Pantalon AZX', price: 15000 , material: 'Jean' , variety: 10  },
      { ref: 'REF20200432', title: 'Chemisier ZARA', price: 60000 , material: 'Cachemir' , variety: 10  },
      { ref: 'REF20200093', title: 'Veste Mango', price: 16000 , material: 'Cuir' , variety: 10  },
      { ref: 'REF20200035', title: 'Haut Fenti', price: 12000 , material: 'Coton' , variety: 10  },
      { ref: 'REF20200312', title: 'Lunette CC', price: 435000 , material: 'Or' , variety: 10  },
      { ref: 'REF20200432', title: 'Pantalon AZX', price: 15000 , material: 'Jean' , variety: 10  },
      { ref: 'REF20200432', title: 'Chemisier ZARA', price: 60000 , material: 'Cachemir' , variety: 10  },
      { ref: 'REF20200093', title: 'Veste Mango', price: 16000 , material: 'Cuir' , variety: 10  },
      { ref: 'REF20200035', title: 'Haut Fenti', price: 12000 , material: 'Coton' , variety: 10  },
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
