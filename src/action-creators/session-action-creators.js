// @flow

import * as actionTypes from "../constants/action-types";
import * as api from "../data-sources/data-base";
import * as R from "ramda";
import Report from "../models/report";

export const updateUser = (snippet: Object): ActionType => ({
    type: actionTypes.UPDATE_USER,
    payload: snippet
});

// currently logging everyone in.
export const login = (username, password): ActionType => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: { isLoggedIn: true }
});

// get initial data.
// This data-fetch is here for demo purposes only.
// TODO: move this to report-action-creators and call when needed.
export const initialize = (): ThunkType => {
    function thunk(dispatch: Dispatch<ActionType>) {
        // api.fetchReports()
        //     .then((response: mixed) => {
        //         const reports = R.mapObjIndexed((report, id) => Report.create(report, id), response);
        //         dispatch({ type: actionTypes.FETCH_REPORTS_SUCCESS, payload: { data: reports } });
        //         dispatch({ type: actionTypes.INITIALIZE_SUCCESS });
        //     })
        //     .catch((error: Error) => {
        //         dispatch({ type: actionTypes.FETCH_REPORTS_FAIL, payload: { error } });
        //     });

        dispatch({ type: actionTypes.INITIALIZE_SUCCESS })
    }

    thunk.interceptOnOffline = false;
    return thunk;
};