// @flow

import React from "react";
import "./layout.css";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import ListIcon from "@material-ui/icons/List";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link } from "react-router-dom";
import ListItemLink from "../list-item-link";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${ drawerWidth }px)`,
            marginLeft: drawerWidth
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

type PropsType = { children: React$Component<any> };


export const Layout = (props: PropsType) => {
    const { container, children } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const reportsMenu = [
        {
            order: 0,
            key: "new",
            text: "New Report",
            icon: (<AddCircleOutline/>),
            to: "home"
        },
        {
            order: 0,
            key: "list",
            text: "Reports",
            icon: (<ListIcon/>),
            to: "reports"
        },
        {
            order: 0,
            key: "search",
            text: "Search",
            icon: (<SearchIcon/>),
            to: "search"
        },
        {
            order: 0,
            key: "dashboard",
            text: "Dashboard",
            icon: (<DashboardIcon/>),
            to: "home"
        }
    ];
    const userMenu = [
        { order: 0, key: "new", text: "Settings", icon: (<SettingsIcon/>), to: "settings" },
        { order: 0, key: "logout", text: "Logout", icon: (<LogoutIcon/>), to: "logout" }
    ];

    const drawer = (
        <div>
            <div className={ classes.toolbar }/>
            <Divider/>
            <List>
                { reportsMenu.map((item) => (
                    <ListItemLink key={ item.key } { ...item } />
                )) }
            </List>
            <Divider/>
            <List>
                { userMenu.map((item) => (
                    <ListItem button key={ item.key }>
                        <ListItemIcon>{ item.icon }</ListItemIcon>
                        <ListItemText primary={ item.text }/>
                    </ListItem>
                )) }
            </List>
        </div>
    );

    return (
        <div className={ classes.root }>
            <CssBaseline/>
            <AppBar position="fixed" className={ classes.appBar }>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={ handleDrawerToggle }
                        className={ classes.menuButton }
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        ICE CALL CENTER
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={ classes.drawer } aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={ container }
                        variant="temporary"
                        anchor={ theme.direction === "rtl" ? "right" : "left" }
                        open={ mobileOpen }
                        onClose={ handleDrawerToggle }
                        classes={ {
                            paper: classes.drawerPaper
                        } }
                        ModalProps={ {
                            keepMounted: true // Better open performance on mobile.
                        } }
                    >
                        { drawer }
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={ {
                            paper: classes.drawerPaper
                        } }
                        variant="permanent"
                        open
                    >
                        { drawer }
                    </Drawer>
                </Hidden>
            </nav>
            <main className={ classes.content }>
                <div className={ classes.toolbar }/>
                { children }
            </main>
        </div>
    );
};


