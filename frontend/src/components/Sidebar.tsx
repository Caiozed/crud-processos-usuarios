import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Drawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText, AppBar, CssBaseline, Toolbar, Typography } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import Routes from "../routes/index";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
}));

const Sidebar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    return(
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>

                <div className={classes.toolbar}>
                    <IconButton onClick={toggleDrawer}>
                        {open ? <ChevronLeft/> : <ChevronRight/> } 
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {Routes.map((route, index) => (
                        <Link key={index} to={route.path}>
                            <ListItem button>
                                <ListItemIcon><route.icon/></ListItemIcon>
                                <ListItemText primary={route.name} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}

export default Sidebar;