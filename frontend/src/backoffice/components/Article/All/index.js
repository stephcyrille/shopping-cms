import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Button from '@material-ui/core/Button';
import MaterialTable from "material-table";

import tableIcons from "../../Snippets/EditableTable/TableIcon";
import Snackbar from '../../Snippets/FlashBagMessage/index'
import urls from "../../Dashboard/routes/urls"
import appConfig from '../../../config'




export default
@connect((state, props) => ({
}))
class AllArticle extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Articles | Afro Yaca Drum'
    this.state = {
      snack_open: false,
      snack_message: null,
      snack_color: null,
      datas: [],
    }
  }

  componentWillMount(){
    let param = this.props.location.state ? this.props.location.state.snack_open : false

    if(param==true){
      this.setState({
        snack_open: true,
        snack_message: "Article enregistré avec success",
        snack_color: "success"
      })
    }

    this._fetchListItems()
  }


  _fetchListItems(){
    const service = "article"
    const url = `${ appConfig.LISTSBASEURL }${service}`
    window.axios
    .get(`${url}`)
    .then(response => {
      this.setState({
        datas: response.data.results
      })
    })
    .catch(error => {
      console.error(error);
    });
  }

  _goToAddArticle(){
    this.props.dispatch(push(`${urls.ADDARTICLE}`))
  }

  _goToEditArticle(){
    this.props.dispatch(push(`${urls.ADDARTICLE}`))
  }

  handleClose = () => {
    this.setState({ snack_open: false });
  };


  render() {
    const title = "Tous les articles" 
    const columns = [
      { title: 'N°', field: 'id' },
      { title: 'Titre', field: 'title' },
      { title: 'Auteur', field: 'author' },
      { title: 'Résumé', field: 'resume' },
      { title: 'Date pub.', field: 'date_pub' },
    ];


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
            onClick={ this._goToAddArticle.bind(this) }
            variant="contained"
            color="primary"
          >
            <i className="fa fa-plus"/> &nbsp;&nbsp;
            Ajouter un article
          </Button>

          <br />
          <br />

          <MaterialTable
            icons={tableIcons}
            title={title}
            columns={columns}
            data={this.state.datas}
            options={{
              actionsColumnIndex: -1
            }}
            actions={[
              {
                icon: 'edit',
                tooltip: "Modifier l'article" ,
                onClick: () => this._goToEditArticle() 
              }
            ]}
            editable={{
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
            }}
          />
        </section>
      </div>
    );
  }
}
