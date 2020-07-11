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

// Router
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import urls from './router/urls'

// Components importation
import AllCatalog from "app-js/backoffice/components/Catalog/All/index.js";
import AllCategory from "app-js/backoffice/components/Category/All/index.js";
import AllGroup from "app-js/backoffice/components/Group/All/index.js";
import AllSize from "app-js/backoffice/components/Size/All/index.js";
import AllColor from "app-js/backoffice/components/Color/All/index.js";
import AllProduct from "app-js/backoffice/components/Product/All/index.js";


const history = createBrowserHistory();
const drawerWidth = 240;

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

      <Router history={history}>
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
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Catalogue" />
            </ListItem>

            <ListItem 
              button
              selected={selectedIndex === 1}
              component={Link}
              to={`${urls.CATEGORY}`}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Categorie" />
            </ListItem>
            
            <ListItem 
              button
              selected={selectedIndex === 2}
              component={Link}
              to={`${urls.GROUP}`}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Groupe" />
            </ListItem>

            <ListItem button
              selected={selectedIndex === 3}
              component={Link}
              to={`${urls.SIZE}`}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Taille" />
            </ListItem>
            
            <ListItem button
              selected={selectedIndex === 4}
              component={Link}
              to={`${urls.COLOR}`}
              onClick={(event) => handleListItemClick(event, 4)}  
            >
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Couleur" />
            </ListItem>

            <ListItem button
              selected={selectedIndex === 5}
              component={Link}
              to={`${urls.PRODUCT}`}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Produit" />
            </ListItem>
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Switch>
            <Route path={`${urls.CATALOG}`} component={AllCatalog} />
            <Route path={`${urls.CATEGORY}`} component={AllCategory} />
            <Route path={`${urls.GROUP}`} component={AllGroup} />
            <Route path={`${urls.SIZE}`} component={AllSize} />
            <Route path={`${urls.COLOR}`} component={AllColor} />
            <Route path={`${urls.PRODUCT}`} component={AllProduct} />
          </Switch>
          
        </main>
      </Router>
    </div>
  );
}
