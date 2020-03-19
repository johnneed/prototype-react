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
import type User from "../../models/user";
import { bindActionCreators } from "redux";
import * as reportActions from "../../action-creators/report-action-creators";
import * as searchActions from "../../action-creators/search-results-action-creators";
import * as searchQueryActions from "../../action-creators/search-query-action-creators"
import { useHistory } from "react-router-dom";
import uuid from "uuid";
import { connect } from "react-redux";
import MiniSearch from "../mini-search";
import { updateSubjectQuery } from "../../action-creators/search-query-action-creators";

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
    appBarShiftToRight: {
        width: `calc(100% - ${ drawerWidth }px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    appBarShiftToLeft: {
        width: `calc(100% - ${ drawerWidth }px)`,
        marginRight: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    appBarShiftToCenter: {
        width: `calc(100% - ${ 2 * drawerWidth }px)`,
        marginRight: drawerWidth,
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
    fade: {
        visibility: "hidden"
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
    rightDrawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-start"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -2 * drawerWidth,
        marginRight: 0
    },
    contentShiftToRight: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShiftToLeft: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginRight: drawerWidth
    },
    contentShiftToCenter: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: -drawerWidth,
        marginRight: drawerWidth
    },
    title: {
        flexGrow: 1
    }
}));
type PropsType = { children: React$Component<any>, actions: Object, user: User, searchResults: Object, searchError: string, query: Object };

const Layout = ({ children, actions, user, query, searchResults, searchError }: PropsType) => {
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const [isLeftDrawerOpen, setIsLeftDrawerOpen] = React.useState(false);
    const [isRightDrawerOpen, setIsRightDrawerOpen] = React.useState(false);
    const toggleLeftDrawer = () => {
        setIsLeftDrawerOpen(!isLeftDrawerOpen);
    };

    const toggleRightDrawer = () => {
        setIsRightDrawerOpen(!isRightDrawerOpen);
    };

    const reportsMenu = [

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
                    [classes.appBarShiftToRight]: isLeftDrawerOpen && !isRightDrawerOpen,
                    [classes.appBarShiftToLeft]: !isLeftDrawerOpen && isRightDrawerOpen,
                    [classes.appBarShiftToCenter]: isLeftDrawerOpen && isRightDrawerOpen
                }) }
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open navigation"
                        onClick={ toggleLeftDrawer }
                        edge="start"
                        className={ clsx(classes.menuButton, isLeftDrawerOpen && classes.hide) }
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap className={ classes.title }>
                        CALL CENTER
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open search"
                        onClick={ toggleRightDrawer }
                        edge="end"
                        className={ isRightDrawerOpen && classes.fade }
                    >
                        <SearchIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={ classes.drawer }
                variant="persistent"
                anchor="left"
                open={ isLeftDrawerOpen }
                classes={ {
                    paper: classes.drawerPaper
                } }
            >
                <div className={ classes.drawerHeader }>
                    <IconButton onClick={ toggleLeftDrawer }>
                        { theme.direction === "ltr" ? <ChevronLeftIcon/> : <ChevronRightIcon/> }
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <li>
                        <ListItem button onClick={ () => {
                            const rid = uuid();
                            actions.createReport({}, rid);
                            window.setTimeout(() => history.push(`reports/${ rid }`), 250);
                        } }>
                            <ListItemIcon><AddCircleOutline/></ListItemIcon>
                            <ListItemText primary={ "New Report" }/>
                        </ListItem>
                    </li>
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
            <Drawer
                className={ classes.drawer }
                variant="persistent"
                anchor="right"
                open={ isRightDrawerOpen }
                classes={ {
                    paper: classes.drawerPaper
                } }
            >
                <div className={ classes.rightDrawerHeader }>
                    <IconButton onClick={ toggleRightDrawer }>
                        { theme.direction === "rtl" ? <ChevronLeftIcon/> : <ChevronRightIcon/> }
                    </IconButton>
                </div>
                <Divider/>
                <MiniSearch
                    query={ query }
                    searchResults={ searchResults }
                    onUpdateSubjectQuery={actions.updateSubjectQuery}
                    onUpdateVehicleQuery={actions.updateVehicleQuery}
                    error={ searchError }
                    onSearch={actions.fetchSearchResults}
                    onClearSubjectQuery={actions.clearSubjectQuery}
                    onClearVehicleQuery={actions.clearVehicleQuery}

                />
            </Drawer>
            <main
                className={ clsx(classes.content, {
                    [classes.contentShiftToRight]: isLeftDrawerOpen && !isRightDrawerOpen,
                    [classes.contentShiftToLeft]: !isLeftDrawerOpen && isRightDrawerOpen,
                    [classes.contentShiftToCenter]: isLeftDrawerOpen && isRightDrawerOpen
                }) }
            >
                <div className={ classes.drawerHeader }/>
                { children }
            </main>
        </div>
    );
};


const mapStateToProps = (state: Object): Object => {
    const user: User = state.session.user;
    const query = state.searchQuery;
    const searchResults = state.searchResults.data;
    const searchError = state.searchResults.error;
    return ({ user, query, searchResults, searchError });
};

const mapDispatchToProps = (dispatch: Dispatch<Object>): Object => ({
    actions: bindActionCreators({...reportActions, ...searchActions, ...searchQueryActions}, dispatch)
});

export const MainLayout = connect(mapStateToProps, mapDispatchToProps)(Layout);