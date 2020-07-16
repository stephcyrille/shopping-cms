import React from "react";
import { connect } from "react-redux";

import Table from '../../Snippets/EditableTable/index'

export default
@connect((state, props) => ({
}))
class AllGroup extends React.Component {
  constructor(props){
    super(props)
    document.title = "Group | Afro Yaca Drum"
  }

  render() {
    const columns = [
      { title: 'Titre', field: 'title' },
      { title: 'Slug', field: 'slug' },
    ];
    const title = "Groupes de produit" 
    const datas = [
      { title: 'Groupe 1', slug: 'groupe-1' },
      { title: 'Groupe 2', slug: 'groupe-2' },
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
