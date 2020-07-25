import React from "react";
import { connect } from "react-redux";

import Table from '../../Snippets/EditableTable/index'

export default
@connect((state, props) => ({
}))
class AllSize extends React.Component {
  constructor(props){
    super(props)
    document.title = "Tailles | Afro Yaca Drum"
  }


  render() {
    const columns = [
      { title: 'Catégorie', field: 'category' },
      { title: 'Titre', field: 'name' },
      { title: 'System de taille', field: 'size_system' },
    ];
    const title = "Tailles" 
    const datas = [
      { category: 'Chaussure', name: '38', size_system: 'EU' },
      { category: 'Chemisier', name: 'XL', size_system: 'EU' },
      { category: 'Pantalons', name: '26', size_system: 'EU' },
    ]

    return (
      <div>
        <section>
          <Table table_title={title} table_columns={columns} table_datas={datas} />
        </section>
      </div>
    );
  }
}
