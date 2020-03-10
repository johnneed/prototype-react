// @flow

import React, { useState } from "react";
import "./search-screen.css";
import { CardHeader, Card, CardContent, TextField, Paper, Divider } from "@material-ui/core";
import * as R from "ramda";
import type Report from "../../models/report";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as searchActions from "../../action-creators/search-results-action-creators";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import moment from "moment";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPaper, faArrowAltCircleLeft, faCarCrash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import uuid from "uuid";

type PropsType = { actions: { [string]: any => void }, searchResults: Array<Object> };



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

const Screen = ({ actions, searchResults }) => {
    const history = useHistory();

    const search = event => {
        const newTerm = event.target.value;
        actions.fetchSearchResults(newTerm);
        setSearchTerm(newTerm);
    };
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className={ "search-screen" }>
            <Paper>
                <div style={ { padding: "1rem" } }>
                    <TextField
                        style={ { width: "100%" } }
                        label={ "SEARCH" }
                        variant="outlined"
                        type={ "search" }
                        value={ searchTerm }
                        onChange={ search }/>
                </div>
            </Paper>
            <br/>
            <Divider/>
            <br/>
            <Paper>
                <List dense={ true }>
                    { Object.values(searchResults).map(report => (
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
                                secondary={ report.vehicle ? `${ report.vehicle.vehicleColor || "" } ${ report.vehicle.vehicleYear || "" } ${ report.vehicle.vehicleMake || "" } ${ report.vehicle.vehicleModel || "" } ${ report.vehicle.licensePlateState || "" }${ report.vehicle.licensePlateNumber || "" }` : null }
                            />

                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="edit" onClick={ () => {
                                    const rid = uuid();
                                    actions.createReportFromSearchResult(report, rid);
                                    window.setTimeout(()=> history.push(`reports/${rid}`), 250)
                                } }>
                                    <AddCircleOutlineIcon/>
                                </IconButton>

                            </ListItemSecondaryAction>
                        </ListItem>
                    )) }
                </List>

            </Paper>
        </div>
    );
};


const mapStateToProps = (state: Object, ownProps: Object): Object => {
    const searchResults: Array<Object> = state.searchResults.data;
    return ({ searchResults });
};

const mapDispatchToProps = (dispatch: Dispatch<Object>): Object => ({
    actions: bindActionCreators(searchActions, dispatch)
});

export const SearchScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);