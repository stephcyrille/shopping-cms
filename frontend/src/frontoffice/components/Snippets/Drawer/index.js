import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import urls from "../../../routes/urls";



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%"
  },
  appBar: {
    backgroundColor: "#fdca23 !important",
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
    backgroundColor: "#fdca23 !important",
    color: "#fff",
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
    backgroundColor: "#3a3a3a",
  },
  divider: {
    borderTop: "1px solid #757575",
  },
  divider_end: {
    borderTop: "1px solid #757575",
    borderBottom: "1px solid #757575",
  },
  li_active: {
    backgroundColor: "#3a3a3a !important",
  },
  list_link: {
    color: "#fff",
    "&:active":{
      color: "#fff"
    },
    "&:hover":{
      color: "#fff"
    },
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [toggle, setToggle] = React.useState(false);

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
        </Toolbar>
      </AppBar>
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
          <IconButton onClick={handleDrawerClose} style={{ color: "#fff" }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List component="nav">
            <ListItem 
              button 
              className={ `${ selectedIndex == 0 ? classes.li_active : null } ${classes.divider}` }
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText>
                <a title="A la une" href={`${urls.HOME}`} className={classes.list_link}>A la une</a>
              </ListItemText>
            </ListItem>
            <ListItem 
              button 
              className={ `${ selectedIndex == 1 ? classes.li_active : null } ${classes.divider}` }
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Nouveautés" />
              {selectedIndex==1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 1 ?
              (<Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Mois" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Weekend" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Aricles été" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Meilleures ventes" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
            <ListItem 
              button 
              className={ `${ selectedIndex == 2 ? classes.li_active : null } ${classes.divider}` }
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText primary="Designers" />
              {selectedIndex==2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 2 ?
              (<Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Meilleures ventes" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
            <ListItem 
              button 
              className={ `${ selectedIndex == 3 ? classes.li_active : null } ${classes.divider}` }
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Vêtements" />
              {selectedIndex==3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 3 ?
              (<Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Meilleures ventes" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
            <ListItem 
              button 
              className={ `${ selectedIndex == 4 ? classes.li_active : null } ${classes.divider}` }
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemText primary="Chaussures" />
              {selectedIndex==4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 4 ?
              (<Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Meilleures ventes" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
            <ListItem 
              button 
              className={ `${ selectedIndex == 5 ? classes.li_active : null } ${classes.divider}` }
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemText primary="Sacs" />
              {selectedIndex==5 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 5 ?
              (<Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Meilleures ventes" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
            <ListItem 
              button 
              className={ `${ selectedIndex == 6 ? classes.li_active : null } ${classes.divider}` }
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemText primary="Accessoires" />
              {selectedIndex==6 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 6 ?
              (<Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Meilleures ventes" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
            <ListItem 
              button 
              className={ `${ selectedIndex == 7 ? classes.li_active : null } ${classes.divider}` }
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
            >
              <ListItemText primary="Bijoux" />
              {selectedIndex==7 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 7 ?
              (<Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Meilleures ventes" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
            <ListItem 
              button 
              className={ `${ selectedIndex == 8 ? classes.li_active : null } ${classes.divider}` }
              selected={selectedIndex === 8}
              onClick={(event) => handleListItemClick(event, 8)}
            >
              <ListItemText primary="Lingerie" />
              {selectedIndex==8 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 8 ?
              (<Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Meilleures ventes" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
            <ListItem 
              button 
              className={ `${ selectedIndex == 9 ? classes.li_active : null } ${classes.divider}` }
              selected={selectedIndex === 9}
              onClick={(event) => handleListItemClick(event, 9)}
            >
              <ListItemText primary="Beauté" />
              {selectedIndex==9 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 9 ?
              (<Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Meilleures ventes" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
            <ListItem 
              button 
              className={ `${ selectedIndex == 10 ? classes.li_active : null } ${classes.divider}` }
              selected={selectedIndex === 10}
              onClick={(event) => handleListItemClick(event, 10)}
            >
              <ListItemText primary="Editorial" />
              {selectedIndex==10 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 10 ?
              (<Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Meilleures ventes" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
            <ListItem 
              button 
              className={ `${ selectedIndex == 11 ? classes.li_active : null } ${classes.divider_end}` }
              selected={selectedIndex === 11}
              onClick={(event) => handleListItemClick(event, 11)}
            >
              <ListItemText primary="Ce qu'il faut porter" />
              {selectedIndex==11 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 11 ?
              (<Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Meilleures ventes" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
            <ListItem 
              button 
              className={ `${ selectedIndex == 12 ? classes.li_active : null } ${classes.divider_end}` }
              selected={selectedIndex === 12}
              onClick={(event) => handleListItemClick(event, 12)}
            >
              <ListItemText primary="Nos services" />
              {selectedIndex==12 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
              selectedIndex == 12 ?
              (<Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Oh! My Box" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Services" />
                  </ListItem>
                </List>
              </Collapse>
              ) :
              null
            }
        </List>
      </Drawer>
    </div>
  );
}
