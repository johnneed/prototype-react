// @flow

import React from "react";
import "./home-screen.css";
import { bindActionCreators } from "redux";
import * as reportActions from "../../action-creators/report-action-creators";
import { connect } from "react-redux";
import type Report from "../../models/report";
import type User from "../../models/user";

const Screen = (): React$Element<any> => (
    <div className={ "home" }>
        <h1>Dashboard</h1>
    </div>
);


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