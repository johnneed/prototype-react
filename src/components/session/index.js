// @flow
import React, { useEffect, useState, Fragment } from "react";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../action-creators/session-action-creators";
import { connect } from "react-redux";
import Splash from "../splash";

type PropsType = {
    actions: { initialize: Object => void },
    children: React$Element<any>,
    isInitialized: boolean,
};

const Session = ({ actions, children, isInitialized }: PropsType): React$Element<any> => {


    useEffect(() => {
        if (
            !isInitialized) {
            actions.initialize();
        }
    }, []);

    return !isInitialized ? (<Splash message={ "Loading Reports..." }/>) : (<Fragment>{ children }</Fragment>);

};

const mapDispatchToProps = (dispatch: Dispatch<Object>): Object => ({
    actions: bindActionCreators(actionCreators, dispatch)
});


const mapStateToProps = (state: Object): Object => ({
    isInitialized: state.session.isInitialized
});

// $FlowFixMe
export default connect(mapStateToProps, mapDispatchToProps)(Session);