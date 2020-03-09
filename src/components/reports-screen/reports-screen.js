// @flow

import React, { useState } from "react";
import "./reports-screen.css";
import { bindActionCreators } from "redux";
import * as reportActions from "../../action-creators/report-action-creators";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPaper, faArrowAltCircleLeft, faCarCrash } from "@fortawesome/free-solid-svg-icons";
import * as R from "ramda";
import moment from "moment";

import type Report from "../../models/report";
import type User from "../../models/user";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: theme.spacing(4, 0, 2)
    }
}));


const getIcon = R.cond([
    [
        R.equals("accident"),
        () => faCarCrash
    ],
    [
        R.equals("traffic stop"),
        () => faHandPaper
    ],
    [
        R.T,
        () => faHandPaper
    ]
]);


const Screen = ({ actions, reports, selectedReport }): React$Element<any> => {
    const classes = useStyles();
    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(true);


    return (
        <div className={ "reports" }>
            <Typography variant="h6" className={ classes.title }>
                Current Reports
            </Typography>
            <div className={ classes.demo }>
                <List dense={ dense }>
                    { Object.values(reports).map(report => (
                        <ListItem key={ report.id }>
                            <ListItemAvatar>
                                <FontAwesomeIcon
                                    title={ report.type }
                                    style={ { color: "#A88", fontSize: "2rem", marginRight: "1rem" } }
                                    icon={ getIcon(report.type) }
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={ `${ moment(report.dateCreated).format("MM/DD/YYYY HH:MM") } ${ report.subject ? ` | ${ report.subject.firstName } ${ report.subject.lastName }` : "" }` }
                                secondary={ report.vehicle ? `${ report.vehicle.vehicleColor || "" } ${ report.vehicle.vehicleYear || "" } ${ report.vehicle.vehicleMake|| "" } ${ report.vehicle.vehicleModel || "" } ${ report.vehicle.licensePlateState || "" }${ report.vehicle.licensePlateNumber || "" }` : null }
                            />

                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="edit">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )) }
                </List>
                < /div>
            </div>
            );
            };

            const mapStateToProps = (state: Object): Object => {
            const reports = state.reports.data;
            const selectedReport: Report = state.reports.data[state.reports.selected];
            const user: User = state.session.user;
            return ({ user, reports });
        };

            const mapDispatchToProps = (dispatch: Dispatch<Object>): Object => ({
            actions: bindActionCreators(reportActions, dispatch)
        });

            export const ReportsScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);