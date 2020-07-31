import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Button from '@material-ui/core/Button';

import Table from '../../Snippets/EditableTable/index'
import Snackbar from '../../Snippets/FlashBagMessage/index'
import urls from "../../Dashboard/routes/urls"




export default
@connect((state, props) => ({
}))
class SEO extends React.Component {
  constructor(props){
    super(props)
    document.title = "SEO | Afro Yaca Drum"
    this.state = {
      snack_open: false,
      snack_message: null,
      snack_color: null,
    }
  }

  componentWillMount(){
    let param = this.props.location.state ? this.props.location.state.snack_open : false

    if(param==true){
      this.setState({
        snack_open: true,
        snack_message: "SEO enregistré avec success pour la page",
        snack_color: "success"
      })
    }
  }


  _goToAddSEO(){
    this.props.dispatch(push(`${urls.ADDSEO}`))
  }

  _goToEditSEO(){
    this.props.dispatch(push(`${urls.ADDSEO}`))
  }

  handleClose = () => {
    this.setState({ snack_open: false });
  };


  render() {
    const title = "Optimisation sur les moteurs de recherche" 
    const columns = [
        { title: 'N°', field: 'id' },
        { title: 'Titre Page', field: 'pageTitle' },
        { title: 'Slug', field: 'slug' },
        { title: 'Description', field: 'description' },
        { title: 'Mots clés', field: 'keywords' },
        { title: 'URL', field: 'baseUrl' },
      ];
    const datas = [
      { 
        id: 1, 
        pageTitle: 'Acceuil', 
        description: 'Page d\'accueil de Afro yaca drum description et voila le reste ici', 
        keywords: 'Afro, Vêtement, Mode, Fshion', 
        baseUrl: '/shop',
        slug: 'home', 
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
          <Button
            onClick={ this._goToAddSEO.bind(this) }
            variant="contained"
            color="primary"
          >
            <i className="fa fa-plus"/> &nbsp;&nbsp;
            Ajouter seo page
          </Button>

          <br />
          <br />

          <Table 
            table_title={title} 
            table_columns={columns} 
            table_datas={datas} 
            simple={true} 
            goToEdit={this._goToEditSEO.bind(this)} 
          />
        </section>
      </div>
    );
  }
}
