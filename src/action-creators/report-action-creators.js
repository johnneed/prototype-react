// @flow

import * as actionTypes from "../constants/action-types";
import Report from "../models/report";
import * as api from "../data-sources/data-base";
import * as R from "ramda";

/** EXAMPLE ACTIONS

 ASYNC EXAMPLE

 export const doSomeAction = (): ThunkType => {
    function thunk(dispatch: Dispatch<ActionType>) {
        someAsyncFunction(drop)
            .then((data: mixed) => {
                dispatch({ type: actionTypes.SOME_ACTION_SUCCESS, payload: {data}});
            })
            .catch((error: Error) => {
                dispatch({ type: actionTypes.SOME_ACTION_FAIL, payload: {error} });
            });
    }

    thunk.interceptOnOffline = true;
    return thunk;
};


 SYNCHRONOUS EXAMPLE

 export const soSomeAction = (data: DataType): ActionType => (
 {
        type: actionTypes.SOME_ACTION,
        data
    }
 );

 **/

export const createReport = (reportData: Report, reportId: string): ActionType => {
    const report = Report.create(reportData, reportId);
    return ({
        type: actionTypes.CREATE_REPORT,
        payload: report
    });
};

export const deleteReport = (report): ThunkType => {
    function thunk(dispatch: Dispatch<ActionType>) {
        api.deleteReport(report)
            .then((response: mixed) => {
                dispatch({ type: actionTypes.DELETE_REPORT_SUCCESS, payload: { report: response } });
            })
            .catch((error: Error) => {
                dispatch({ type: actionTypes.DELETE_REPORT_FAIL, payload: { error } });
            });
    }

    thunk.interceptOnOffline = false;
    return thunk;
};

export const selectReport = (reportId): ActionType => ({ type: actionTypes.SELECT_REPORT, payload: reportId });

export const updateReport = (id: string, snippet: Object): ActionType => ({
    type: actionTypes.UPDATE_REPORT,
    payload: { id, snippet }
});

export const saveReport = (report): ThunkType => {
    function thunk(dispatch: Dispatch<ActionType>) {
        saveReport(report)
            .then((response: mixed) => {
                dispatch({ type: actionTypes.SAVE_REPORT_SUCCESS, payload: { report: response } });
            })
            .catch((error: Error) => {
                dispatch({ type: actionTypes.DELETE_REPORT_FAIL, payload: { error } });
            });
    }

    thunk.interceptOnOffline = false;
    return thunk;
};

export const fetchReports = (): ThunkType => {
    function thunk(dispatch: Dispatch<ActionType>) {
        api.fetchReports()
            .then((response: mixed) => {
                const reports = R.mapObjIndexed((report, id) => Report.create(report, id), response);
                dispatch({ type: actionTypes.FETCH_REPORTS_SUCCESS, payload: { data: reports } });
            })
            .catch((error: Error) => {
                dispatch({ type: actionTypes.FETCH_REPORTS_FAIL, payload: { error } });
            });
    }

    thunk.interceptOnOffline = false;
    return thunk;
};