import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

import Snackbar from '../../Snippets/FlashBagMessage/index'
import Table from '../../Snippets/EditableTable/index'



export default
@connect((state, props) => ({
}))
class AllCategory extends React.Component {
  constructor(props){
    super(props)
    document.title = "Categories | Afro Yaca Drum"
    
    this.fileInput = React.createRef();
    this.state = {
      picture_name : null,
      edit_pic: false,
      file: null,
      snack_open: false,
      snack_message: null,
      snack_color: null,
    }
  }

  handleClose = () => {
    this.setState({ snack_open: false });
  };

  
  handleClose = () => {
    this.setState({ snack_open: false });
  };


  _handlePicPost(event){
    event.preventDefault()
    if(this.fileInput.current.files[0]){
      this.setState({
        picture_name: this.fileInput.current.files[0].name,
        edit_pic: true,
        file: this.fileInput.current.files[0],
        snack_open: true,
        snack_message: "Image chargée avec succès",
        snack_color: "success"
      })
    } else {
      this.setState({
        snack_message: "Vous n'avez ajouter aucune image!",
        snack_color: "error",
        snack_open: true,
      })
    }
  }


  _handleEditUpload(){
    this.setState({
      edit_pic : false,
      picture_name: null,
      file: null
    })
  }

  _handleLoadBeforeUpdate(){
    this.setState({
      snack_message: "Vous devez charger une image avant de valider la modification!",
      snack_color: "error",
      snack_open: true,
    })
  }


  render() {
    const columns = [
      { title: 'Titre', field: 'title' },
      { title: 'Slug', field: 'slug' },
      { 
        title: 'Photo', 
        field: 'picture', 
        editable: 'always',
        editComponent: () => (
          <div>
            {
              this.state.edit_pic ? 
                <div>
                  <span className="col-8">
                    {this.state.picture_name}
                  </span>
                  <Button 
                    type="submit" 
                    variant="raised" 
                    className="col-4"
                    onClick={ this._handleEditUpload.bind(this) }
                  >
                    Modifier
                  </Button>
                </div>
                :
                <form onSubmit={ this._handlePicPost.bind(this) }>
                  <input
                    accept="image/*"
                    id="raised-button-file"
                    name="picture"
                    multiple
                    type="file"
                    ref={this.fileInput}
                    className="col-8"
                  />
                  <Button type="submit" variant="raised" className="col-4">
                    Upload
                  </Button>
                </form>
            }
            
          </div>
        ),
        render: rowData =>
          rowData.picture === undefined ?
            (
              <img src="/static/images/logo.jpg" style={{width: 40, borderRadius: '50%'}} />
            )
            :
            (
              <img src={rowData.picture} style={{width: 40, borderRadius: '50%'}} />
            )
      },
    ];
    const title = "Categories" 
    const datas = [
      { title: 'Robe', slug: 'robe', picture: undefined },
      { title: 'Jupe', slug: 'jupe', picture: undefined },
      { title: 'Leggins', slug: 'leggins', picture: undefined },
    ]

    return (
      <div>
        { this.state.snack_open &&
            <Snackbar 
              open={this.state.snack_open} 
              message={this.state.snack_message} 
              color={this.state.snack_color}
              closePopup={this.handleClose.bind(this)} 
            />
        }

        <section>
          <Table 
            table_title={title} 
            table_columns={columns} 
            table_datas={datas} 
            file={ this.state.file } 
            clearPicture={ this._handleEditUpload.bind(this) } 
            setPictureError={ this._handleLoadBeforeUpdate.bind(this) } 
            img_table={true} 
          />
        </section>
      </div>
    );
  }
}
