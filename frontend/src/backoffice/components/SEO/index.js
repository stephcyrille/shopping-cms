import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

import Table from '../Snippets/EditableTable/index'
import Snackbar from '../Snippets/FlashBagMessage/index'



export default
@connect((state, props) => ({
}))
class SEO extends React.Component {
  constructor(props){
    super(props)
    document.title = "SEO | Afro Yaca Drum"
    
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
      { title: 'Titre Page', field: 'pageTitle' },
      { title: 'Slug', field: 'slug' },
      { title: 'Description', field: 'description' },
      { title: 'URL', field: 'baseUrl' },
      { title: 'Mots clés', field: 'keywords' },
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
    const title = "Optimisation sur les moteurs de recherche" 
    const datas = [
      { 
        pageTitle: 'Acceuil', 
        description: 'Page d\'accueil de Afro yaca drum description et voila le reste ici', 
        keywords: 'Afro, Vêtement, Mode, Fshion', 
        baseUrl: '/shop',
        slug: 'home', 
        picture: undefined 
      },
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
