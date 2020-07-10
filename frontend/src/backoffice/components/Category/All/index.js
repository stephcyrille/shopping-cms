import React from "react";
import { connect } from "react-redux";

import Table from '../../Snippets/EditableTable/index'

export default
@connect((state, props) => ({
}))
class AllCategory extends React.Component {
  constructor(props){
    super(props)
    document.title = "Categories | Afro Yaca Drum"
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
      { 
        title: 'Photo', 
        field: 'picture', 
        editable: 'always',
        editComponent: () => (
          <div value="photo">
            <input
              accept="image/*"
              id="raised-button-file"
              multiple
              type="file"
              onChange={this.handleChange.bind(this)}
            />
            
          </div>
        ),
        render: rowData =>
          rowData.photo === undefined ?
            (
              <img src="/static/images/logo.jpg" style={{width: 40, borderRadius: '50%'}} />
            )
            :
            (
              <img src="/static/images/logo.jpg" style={{width: 40, borderRadius: '50%'}} />
            )
      },
    ];
    const title = "Categories" 
    const datas = [
      { title: 'Robe', slug: 'robe', picture: '/static/images/logo.jpg' },
      { title: 'Jupe', slug: 'jupe', picture: '' },
      { title: 'Leggins', slug: 'leggins', picture: '' },
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
