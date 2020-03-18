// @flow

import React, { useState } from "react";
import "./reports-screen.css";
import ReportList from "../../components/report-list";
import { bindActionCreators } from "redux";
import * as reportActions from "../../action-creators/report-action-creators";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import * as R from "ramda";
import type Report from "../../models/report";
import type User from "../../models/user";
import {
    Divider,
    Paper,
    TextField,
    Box
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({}));

const Screen = ({ actions, reports, selectedReport }): React$Element<any> => {
    const classes = useStyles();
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState("");
    let timeout; // cache our timeout for efficient searching
    const search = event => {
        const newTerm = event.target.value;
        setSearchTerm(newTerm);
        clearTimeout(timeout); // cancel search if user is still typing
        timeout = setTimeout(function () {
            actions.fetchReports(newTerm);
        }, 2000);
    };

    const getContent = R.cond(
        [
            [
                R.always(reports.length > 0),
                () => (<ReportList reports={ reports } history={ history } dense={ false }/>)
            ],
            [
                R.always(Boolean(searchTerm.trim())),
                () => (
                    <Box className={ "reports_no-results-box" } component={ "p" } textAlign="center">
                        No reports found.
                    </Box>
                )
            ],
            [
                R.T,
                () => (
                    <Box className={ "reports_no-results-box" } component={ "p" } textAlign="center">
                        Enter a PIN to find reports.
                    </Box>
                )
            ]
        ]
    );


    return (
        <div className={ "reports" }>
            <Paper>
                <div style={ { padding: "1rem" } }>
                    <TextField
                        style={ { width: "100%" } }
                        label={ "PIN" }
                        variant="outlined"
                        type={ "search" }
                        value={ searchTerm }
                        onChange={ search }/>
                </div>
            </Paper>
            <br/>
            <Divider/>
            <Paper>
                { getContent() }
            </Paper>
        </div>
    );
};

const mapStateToProps = (state: Object): Object => {
    const reports = Object.values(state.reports.data || {});
    const selectedReport: Report = state.reports.data[state.reports.selected];
    const user: User = state.session.user;
    return ({ user, reports });
};

const mapDispatchToProps = (dispatch: Dispatch<Object>): Object => ({
    actions: bindActionCreators(reportActions, dispatch)
});

export const ReportsScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);