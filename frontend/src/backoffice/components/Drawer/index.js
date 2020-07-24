import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

// Router
import { Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import urls from './router/urls'

// Components importation
import AllCatalog from "app-js/backoffice/components/Catalog/All/index.js";
import AllCategory from "app-js/backoffice/components/Category/All/index.js";
import AllGroup from "app-js/backoffice/components/Group/All/index.js";
import AllSize from "app-js/backoffice/components/Size/All/index.js";
import AllColor from "app-js/backoffice/components/Color/All/index.js";
import AllProduct from "app-js/backoffice/components/Product/All/index.js";
import AddProduct from "app-js/backoffice/components/Product/Add/index.js";
import AddArticle from "app-js/backoffice/components/Article/Add/index.js";
import AllArticle from "app-js/backoffice/components/Article/All/index.js";
import AllMenuPicture from "app-js/backoffice/components/MainMenuPic/All";
import AddMenuPicture from "app-js/backoffice/components/MainMenuPic/Add";


const history = createBrowserHistory();
const drawerWidth = 240;



function Dashboard(props) {
  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    marginTop: 50,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    backgroundColor: "#d2d2d2",
  },
  collapse: {
    paddingLeft: theme.spacing(2),
    backgroundColor: "#fbfbfb",
  },
}));

export default function PersistentDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log("Selectect item", index)
    // if (index == state.selectedIndex) {
    //   setState((state, props)=>{
    //     state.toggle = !state.toggle
    //   })
    // }
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Tableau de bord
          </Typography>
        </Toolbar>
      </AppBar>

      <BrowserRouter>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem 
              button
              selected={selectedIndex === 0}
              component={Link}
              to={`${urls.CATALOG}`}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <img src="/static/images/icons/icon1.png" style={{width: 25}} />
              </ListItemIcon>
              <ListItemText primary="Catalogue" />
            </ListItem>

            <ListItem 
              button
              selected={selectedIndex === 1}
              component={Link}
              to={`${urls.CATEGORY}`}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <img src="/static/images/icons/icon2.png" style={{width: 25}} />
              </ListItemIcon>
              <ListItemText primary="Categorie" />
            </ListItem>
            
            <ListItem 
              button
              selected={selectedIndex === 2}
              component={Link}
              to={`${urls.GROUP}`}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <img src="/static/images/icons/icon3.png" style={{width: 25}} />
              </ListItemIcon>
              <ListItemText primary="Groupe" />
            </ListItem>

            <ListItem button
              selected={selectedIndex === 3}
              component={Link}
              to={`${urls.SIZE}`}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <img src="/static/images/icons/icon4.png" style={{width: 25}} />
              </ListItemIcon>
              <ListItemText primary="Taille" />
            </ListItem>
            
            <ListItem button
              selected={selectedIndex === 4}
              component={Link}
              to={`${urls.COLOR}`}
              onClick={(event) => handleListItemClick(event, 4)}  
            >
              <ListItemIcon>
                <img src="/static/images/icons/icon5.png" style={{width: 25}} />
              </ListItemIcon>
              <ListItemText primary="Couleur" />
            </ListItem>

            <ListItem button
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon>
                <img src="/static/images/icons/icon6.png" style={{width: 25}} />
              </ListItemIcon>
              <ListItemText primary="Produit" />
              {selectedIndex==5 || selectedIndex==51 || selectedIndex==52 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 5 || selectedIndex==51 || selectedIndex==52  ?
              (<Collapse in={true} timeout="auto" unmountOnExit className={classes.collapse}>
                <List component="div" disablePadding>
                  <ListItem 
                    button 
                    selected={selectedIndex === 51}
                    className={`${ selectedIndex==51 ? `${classes.nested}` : null}`}
                    component={Link}
                    to={`${urls.PRODUCT}`}
                    onClick={(event) => handleListItemClick(event, 51)}
                  >
                    <ListItemText primary="Tous" />
                  </ListItem>
                  <ListItem 
                    button 
                    selected={selectedIndex === 52}
                    className={`${ selectedIndex==52 ? `${classes.nested}` : null}`}
                    component={Link}
                    to={`${urls.ADDPRODUCT}`}
                    onClick={(event) => handleListItemClick(event, 52)}
                  >
                    <ListItemText primary="Ajouter" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
{/* 
            <ListItem button
              selected={selectedIndex === 100}
              component={Link}
              to={`${urls.VARIETY}`}
              onClick={(event) => handleListItemClick(event, 100)}
            >
              <ListItemIcon>
                <img src="/static/images/icons/icon6.png" style={{width: 25}} />
              </ListItemIcon>
              <ListItemText primary="Ajouter Variété" />
            </ListItem> */}
            
          </List>
          <Divider />
          <ListItem button
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemIcon>
                <img src="/static/images/icons/icon1.png" style={{width: 25}} />
              </ListItemIcon>
              <ListItemText primary="Articles" />
              {selectedIndex==6 || selectedIndex==61 || selectedIndex==62 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 6 || selectedIndex==61 || selectedIndex==62  ?
              (<Collapse in={true} timeout="auto" unmountOnExit className={classes.collapse}>
                <List component="div" disablePadding>
                  <ListItem 
                    button 
                    selected={selectedIndex === 61}
                    className={`${ selectedIndex==61 ? `${classes.nested}` : null}`}
                    component={Link}
                    to={`${urls.ARTICLE}`}
                    onClick={(event) => handleListItemClick(event, 61)}
                  >
                    <ListItemText primary="Tous" />
                  </ListItem>
                  <ListItem 
                    button 
                    selected={selectedIndex === 62}
                    className={`${ selectedIndex==62 ? `${classes.nested}` : null}`}
                    component={Link}
                    to={`${urls.ADDARTICLE}`}
                    onClick={(event) => handleListItemClick(event, 62)}
                  >
                    <ListItemText primary="Ajouter" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }

          <Divider />
          <ListItem button
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
          >
            <ListItemIcon>
              <i className="fa fa-file-image fa-2x" style={{width: 25}} />
            </ListItemIcon>
            <ListItemText primary="Photo menu principal" />
            {selectedIndex==7 || selectedIndex==71 || selectedIndex==72 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {
            selectedIndex == 7 || selectedIndex==71 || selectedIndex==72  ?
            (<Collapse in={true} timeout="auto" unmountOnExit className={classes.collapse}>
              <List component="div" disablePadding>
                <ListItem 
                  button 
                  selected={selectedIndex === 71}
                  className={`${ selectedIndex==71 ? `${classes.nested}` : null}`}
                  component={Link}
                  to={`${urls.MAINMENUPIC}`}
                  onClick={(event) => handleListItemClick(event, 71)}
                >
                  <ListItemText primary="Tous" />
                </ListItem>
                <ListItem 
                  button 
                  selected={selectedIndex === 72}
                  className={`${ selectedIndex==72 ? `${classes.nested}` : null}`}
                  component={Link}
                  to={`${urls.ADDMAINMENUPIC}`}
                  onClick={(event) => handleListItemClick(event, 72)}
                >
                  <ListItemText primary="Ajouter" />
                </ListItem>
              </List>
            </Collapse>
            ) :
            null
          }
        </Drawer>
      
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Switch>
            <Route exact path={`${urls.DASHBOARD}`} component={Dashboard} />
            <Route path={`${urls.CATALOG}`} component={AllCatalog} />
            <Route path={`${urls.CATEGORY}`} component={AllCategory} />
            <Route path={`${urls.GROUP}`} component={AllGroup} />
            <Route path={`${urls.SIZE}`} component={AllSize} />
            <Route path={`${urls.COLOR}`} component={AllColor} />
            <Route path={`${urls.PRODUCT}`} component={AllProduct} />
            <Route path={`${urls.ADDPRODUCT}`} component={AddProduct} />
            <Route path={`${urls.ARTICLE}`} component={AllArticle} />
            <Route path={`${urls.ADDARTICLE}`} component={AddArticle} />
            <Route path={`${urls.MAINMENUPIC}`} component={AllMenuPicture} />
            <Route path={`${urls.ADDMAINMENUPIC}`} component={AddMenuPicture} />
          </Switch>
          
        </main>
      </BrowserRouter>
    </div>
  );
}
