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

  handleChange = (event, input) => {
    event.preventDefault();
    let imageFile = event.target.files[0];
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      console.log("=======Image File======")
      console.log(imageFile)
      const imageObject = new window.Image();
      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
    }
  };

  render() {
    const columns = [
      { title: 'Titre', field: 'title' },
      { title: 'Slug', field: 'slug' },
    ];
    const title = "Groupess de produit" 
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
