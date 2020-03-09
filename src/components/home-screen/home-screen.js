// @flow

import React from "react";
import "./home-screen.css";
import { bindActionCreators } from "redux";
import * as reportActions from "../../action-creators/report-action-creators";
import { connect } from "react-redux";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import PieChartIcon from "@material-ui/icons/PieChart";
import AssessmentTwoToneIcon from "@material-ui/icons/AssessmentTwoTone";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AlarmIcon from "@material-ui/icons/Alarm";
import TimelineIcon from "@material-ui/icons/Timeline";
import AssignmentIcon from "@material-ui/icons/Assignment";

import type Report from "../../models/report";
import type User from "../../models/user";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: "transparent"
    },
    gridList: {
        width: 500,
        height: 450
    }
}));

const tileData = [
    {
        id: 1,
        img: (<TimelineIcon style={ { fontSize: "4rem", color: "rgb(100, 141, 174)" } }/>),
        title: "Your Charts",
        text: "Your numbers",
        cols: 1
    },
    {
        id: 2,
        img: (<AssessmentTwoToneIcon style={ { fontSize: "4rem", color: "rgb(100, 141, 174)" } }/>),
        title: "All Charts",
        text: "Your numbers",
        cols: 1
    },
    {
        id: 3,
        img: (<AssignmentIcon style={ { fontSize: "4rem", color: "rgb(100, 141, 174)" } }/>),
        title: "Today",
        text: "Your numbers",
        cols: 1
    },
    {
        id: 11,
        img: (<AlarmIcon style={ { fontSize: "4rem", color: "rgb(100, 141, 174)" } }/>),
        title: "Call Times",
        text: "Your numbers",
        cols: 1
    },
    {
        id: 12,
        img: (<NotificationsActiveIcon style={ { fontSize: "4rem", color: "rgb(100, 141, 174)" } }/>),
        title: "Alerts",
        text: "Your numbers",
        cols: 1
    },
    {
        id: 13,
        img: (<MessageIcon style={ { fontSize: "4rem", color: "rgb(100, 141, 174)" } }/>),
        title: "Messages",
        text: "Your numbers",
        cols: 1
    }
];

const Screen = (): React$Element<any> => {
    const classes = useStyles();

    return (
        <div className={ "home" }>
            <div className={ classes.root }>
                <GridList cellHeight={ 160 } className={ classes.gridList } cols={ 3 }>
                    { tileData.map(tile => (
                        <GridListTile key={ tile.id } cols={ tile.cols || 1 }>
                            <div className={ "home_tile-container" }>
                                <div className={ "home_tile-image" }>{ tile.img }</div>
                                <div className={ "home_tile-title" }>{ tile.title }</div>
                            </div>
                        </GridListTile>
                    )) }
                </GridList>
            </div>
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

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);