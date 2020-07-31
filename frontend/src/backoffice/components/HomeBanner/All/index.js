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
class HomeBanner extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Bannière Accueil | Afro Yaca Drum'
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
        snack_message: "Banière enregistrée avec success",
        snack_color: "success"
      })
    }
  }

  _goToAddHomeBanner(){
    this.props.dispatch(push(`${urls.ADDHOMEBANNER}`))
  }

  _goToEditHomeBanner(){
    this.props.dispatch(push(`${urls.ADDHOMEBANNER}`))
  }

  handleClose = () => {
    this.setState({ snack_open: false });
  };


  render() {
    const title = "Bannières index" 
    const columns = [
      { title: 'N°', field: 'id' },
      { title: 'Nom', field: 'name' },
      { title: 'Titre', field: 'title' },
      { title: 'Sous titre', field: 'subTitle' },
      { title: 'Text lien', field: 'linkText' },
      { title: 'Lien Url', field: 'linkUrl' },
      { title: 'Actif', field: 'active' },
    ];
    const datas = [
      { 
        id: 1,
        name: 'Banière Collection', 
        title: 'Découvrez la collection Madame', 
        subTitle: "Explorer toute la collection que madame vous propose chez Afro Yaca Drum" , 
        linkText: 'Découvrir maintenant' , 
        linkUrl: '/shop' , 
        active: true  
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
            onClick={ this._goToAddHomeBanner.bind(this) }
            variant="contained"
            color="primary"
          >
            <i className="fa fa-plus"/> &nbsp;&nbsp;
            Ajouter une Banière
          </Button>

          <br />
          <br />

          <Table 
            table_title={title} 
            table_columns={columns} 
            table_datas={datas} 
            simple={true} 
            goToEdit={this._goToEditHomeBanner.bind(this)} 
          />
        </section>
      </div>
    );
  }
}
