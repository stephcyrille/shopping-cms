import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import _ from "underscore";

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import Drawer from "app-js/frontoffice/components/Snippets/Drawer/index"
import Footer from "app-js/frontoffice/components/Snippets/Footer/index"

import { orderCStoreActions } from './store'
import appConfig from '../../config/index'
import './style.local.css';



const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Commande#{row.id}
        </TableCell>
        <TableCell align="right">{row.created_date ? new Date(row.created_date).toLocaleDateString() : null}</TableCell>
        <TableCell align="right">{row.delivery_date ? new Date(row.delivery_date).toLocaleDateString() : null}</TableCell>
        <TableCell align="right">{row.contact}</TableCell>
        <TableCell align="right">
          <span 
            className={`badge ${row.status == 'initialized' && 'badge-primary'} ${row.status == 'delivered' && 'badge-success'} ${row.status == 'pending' && 'badge-warning'} ${row.status == 'canceled' && 'badge-danger'}`}>
            {row.status}
          </span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div" style={{ paddingLeft: 20 }}>
                Contenu de la commande
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Ref.</TableCell>
                    <TableCell>Nom du produit</TableCell>
                    <TableCell align="right">P.U</TableCell>
                    <TableCell align="right">Quantité</TableCell>
                    <TableCell align="right">Prix total (FCFA)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productRow, key) => (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        {productRow.ref}
                      </TableCell>
                      <TableCell>{productRow.title}</TableCell>
                      <TableCell align="right">{productRow.price}</TableCell>
                      <TableCell align="right">{productRow.quantity}</TableCell>
                      <TableCell align="right">
                        {Math.round(productRow.quantity * productRow.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        ref: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};



const useStyles = theme => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50,
  },
});




export default
@withStyles(useStyles)
@connect((state, props) => ({
  orderCStore: state.orderCStore
}))
class Home extends React.Component {

  componentWillMount(){
    this.props.dispatch(orderCStoreActions.setLoading(true))

    this._fetchUserOrders()
    
    setTimeout(() => {
      this.props.dispatch(orderCStoreActions.setLoading(false))
    }, 2000);
  }

  _fetchUserOrders(){    
    const service = `orders`
    const url = `${appConfig.LISTSBASEURL}${service}`

    window.axios
    .get(`${url}`)
    .then(response => {
      var orders = response.data 
      this.props.dispatch(orderCStoreActions.setOrders(orders))
    })
    .catch(
      error => {
        console.error("Errrorr", error)
      }  
    )
  }

  


  render() {
    const { classes } = this.props
    const { loading, orders } = this.props.orderCStore

    const baseUrl = "https://google.com"
    const pagetitle = "Mes commandes | Shop"
    const description = "Ma description du site"
    const siteImage = "/static/images/logo.png"

    return (
      //<!-- Document Wrapper -->
      <div className="" style={{ backgroundColor: "white" }}>
        { loading ? ( 
            <div className='home-loading'>
              <div className='reverse-spinner'>
                <PulseLoader
                  color={'#FE980F'} 
                  loading={loading} 
                />
              </div>
            </div>)
          : ''
        }
        <Helmet>
            <meta charSet="utf-8" />
            <title>{pagetitle}</title>
            <link rel="canonical" href={baseUrl} />
            <meta property="og:url" content={baseUrl} />
            {/* <meta property="og:type" content={props.type} /> */}
            <meta property="og:title" content={pagetitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={siteImage} />
        </Helmet>

        <Navbar topNav={true} middleNav={true} megaNav={true} /> 
        
        <div className="drawer_menu">
          <Drawer />
        </div>
        
        <section className={classes.root}>
          <div className="container">
            <h3 className="text-center" style={{ marginBottom: 20 }}>Mes commandes</h3>
            
            <div className={classes.tableWrapper}>
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell>Reférence</TableCell>
                      <TableCell align="right">Date de commande</TableCell>
                      <TableCell align="right">Date d'arrivée</TableCell>
                      <TableCell align="right">Adresse</TableCell>
                      <TableCell align="right">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((row, key) => (
                      <Row key={key} row={row} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}
