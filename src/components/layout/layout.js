// @flow
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import ListIcon from "@material-ui/icons/List";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import ListItemLink from "../list-item-link";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${ drawerWidth }px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
}));
type PropsType = { children: React$Component<any> };

export const Layout = (props: PropsType) => {
    const { children } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const reportsMenu = [
        {
            order: 0,
            key: "new",
            text: "New Report",
            icon: (<AddCircleOutline/>),
            to: "/reports/new"
        },
        {
            order: 0,
            key: "list",
            text: "Reports",
            icon: (<ListIcon/>),
            to: "/reports"
        },
        {
            order: 0,
            key: "search",
            text: "Search",
            icon: (<SearchIcon/>),
            to: "/search"
        },
        {
            order: 0,
            key: "dashboard",
            text: "Dashboard",
            icon: (<DashboardIcon/>),
            to: "/home"
        }
    ];
    const userMenu = [
        { order: 0, key: "new", text: "Settings", icon: (<SettingsIcon/>), to: "settings" },
        { order: 0, key: "logout", text: "Logout", icon: (<LogoutIcon/>), to: "logout" }
    ];


    return (
        <div className={ classes.root }>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={ clsx(classes.appBar, {
                    [classes.appBarShift]: open
                }) }
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={ handleDrawerOpen }
                        edge="start"
                        className={ clsx(classes.menuButton, open && classes.hide) }
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        CALL CENTER
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={ classes.drawer }
                variant="persistent"
                anchor="left"
                open={ open }
                classes={ {
                    paper: classes.drawerPaper
                } }
            >
                <div className={ classes.drawerHeader }>
                    <IconButton onClick={ handleDrawerClose }>
                        { theme.direction === "ltr" ? <ChevronLeftIcon/> : <ChevronRightIcon/> }
                    </IconButton>
                </div>
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
            </Drawer>
            <main
                className={ clsx(classes.content, {
                    [classes.contentShift]: open
                }) }
            >
                <div className={ classes.drawerHeader }/>
                { children }
            </main>
        </div>
    );
};