import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Button from '@material-ui/core/Button';

import Table from '../../Snippets/EditableTable/index'
import Snackbar from '../../Snippets/FlashBagMessage/index'
import urls from '../../Dashboard/routes/urls'



export default
@connect((state, props) => ({
}))
class AllColor extends React.Component {
  constructor(props){
    super(props)
    document.title = "Couleurs de produit | Afro Yaca Drum"
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
        snack_message: "Couleur enregistrée avec success",
        snack_color: "success"
      })
    }
  }

  _goToAddColor(){
    this.props.dispatch(push(`${urls.ADDCOLOR}`))
  }
  
  _goToEditColor(){
    this.props.dispatch(push(`${urls.ADDCOLOR}`))
  }


  handleClose = () => {
    this.setState({ snack_open: false });
  };



  render() {
    const columns = [
      { title: 'N°', field: 'id' },
      { title: 'Nom', field: 'title' },
      { title: 'Slug', field: 'slug' },
    ];
    const title = "Couleurs" 
    const datas = [
      { id: 1, title: 'Turquoise', slug: 'Turquoise' },
      { id: 2, title: 'Ecossais', slug: 'Ecossais' },
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
            onClick={ this._goToAddColor.bind(this) }
            variant="contained"
            color="primary"
          >
            <i className="fa fa-plus"/> &nbsp;&nbsp;
            Ajouter une couleur
          </Button>

          <br />
          <br />

          <Table 
            table_title={title} 
            table_columns={columns} 
            table_datas={datas} 
            simple={true} 
            goToEdit={this._goToEditColor.bind(this)} 
          />
        </section>
      </div>
    );
  }
}
