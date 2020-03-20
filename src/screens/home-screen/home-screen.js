// @flow

import React from "react";
import "./home-screen.css";
import { bindActionCreators } from "redux";
import * as reportActions from "../../action-creators/report-action-creators";
import { connect } from "react-redux";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ResponsiveAreaBump } from "@nivo/bump";
import { ResponsiveNetwork } from "@nivo/network";
import Graph1 from "../../components/graph1";
import Graph2 from "../../components/graph2";

import type Report from "../../models/report";
import type User from "../../models/user";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: "transparent"
    },
    gridList: {
        width: "100%"
    },
    title: {
        backgroundColor: "rgba(0,0,0,0.05)",
        padding: "0.5rem"
    }
}));

const bumpData = [
    {
        "id": "JavaScript",
        "data": [
            {
                "x": 2000,
                "y": 17
            },
            {
                "x": 2001,
                "y": 25
            },
            {
                "x": 2002,
                "y": 24
            },
            {
                "x": 2003,
                "y": 14
            },
            {
                "x": 2004,
                "y": 17
            },
            {
                "x": 2005,
                "y": 25
            }
        ]
    },
    {
        "id": "ReasonML",
        "data": [
            {
                "x": 2000,
                "y": 18
            },
            {
                "x": 2001,
                "y": 14
            },
            {
                "x": 2002,
                "y": 15
            },
            {
                "x": 2003,
                "y": 20
            },
            {
                "x": 2004,
                "y": 13
            },
            {
                "x": 2005,
                "y": 15
            }
        ]
    },
    {
        "id": "TypeScript",
        "data": [
            {
                "x": 2000,
                "y": 13
            },
            {
                "x": 2001,
                "y": 21
            },
            {
                "x": 2002,
                "y": 27
            },
            {
                "x": 2003,
                "y": 26
            },
            {
                "x": 2004,
                "y": 14
            },
            {
                "x": 2005,
                "y": 15
            }
        ]
    },
    {
        "id": "Elm",
        "data": [
            {
                "x": 2000,
                "y": 21
            },
            {
                "x": 2001,
                "y": 10
            },
            {
                "x": 2002,
                "y": 29
            },
            {
                "x": 2003,
                "y": 17
            },
            {
                "x": 2004,
                "y": 27
            },
            {
                "x": 2005,
                "y": 28
            }
        ]
    },
    {
        "id": "CoffeeScript",
        "data": [
            {
                "x": 2000,
                "y": 26
            },
            {
                "x": 2001,
                "y": 29
            },
            {
                "x": 2002,
                "y": 13
            },
            {
                "x": 2003,
                "y": 18
            },
            {
                "x": 2004,
                "y": 24
            },
            {
                "x": 2005,
                "y": 25
            }
        ]
    }
];

const MyResponsiveAreaBump = ({ data }) => (
    <ResponsiveAreaBump
        data={ data }
        margin={ { top: 40, right: 100, bottom: 40, left: 100 } }
        spacing={ 8 }
        colors={ { scheme: "nivo" } }
        blendMode="multiply"
        startLabel="id"
        axisTop={ {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: -36
        } }
        axisBottom={ {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 32
        } }
    />
);

const MyResponsiveNetwork = ({ data /* see data tab */ }) => (
    <ResponsiveNetwork
        data={ data }
        margin={ { top: 0, right: 0, bottom: 0, left: 0 } }
        repulsivity={ 6 }
        iterations={ 60 }
        nodeColor={ function (t) {
            return t.color;
        } }
        nodeBorderWidth={ 1 }
        nodeBorderColor={ { from: "color", modifiers: [["darker", 0.8]] } }
        linkThickness={ function (t) {
            return 2 * (2 - t.source.depth);
        } }
        motionStiffness={ 160 }
        motionDamping={ 12 }
    />
);

const tileData = [
    {
        id: 1,
        component: (<MyResponsiveAreaBump data={ bumpData }/>),
        title: "Trends",
        cols: 3
    },
    {
        id: 2,
        component: (<Graph2/>),
        title: "Food",
        cols: 2
    },
    ,
    {
        id: 2,
        component: (<h1 style={ {
            textAlign: "center", position: "relative", margin: 0, fontSize: "3rem",
            top: "50%",
            transform: "translateY(-50%)"
        } }>120</h1>),
        title: "Calls Today",
        cols: 1
    }
];

const Screen = (): React$Element<any> => {
    const classes = useStyles();

    return (
        <div className={ "home" }>
            <div className={ classes.root }>
                <GridList cellHeight={ 300 } className={ classes.gridList } cols={ 3 }>
                    { tileData.map(tile => (
                        <GridListTile key={ tile.id } cols={ tile.cols || 1 }>
                            <Typography className={ classes.title }>{ tile.title }</Typography>
                            { tile.component }
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