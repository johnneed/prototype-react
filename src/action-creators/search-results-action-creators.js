// @flow

import * as actionTypes from "../constants/action-types";
import Report from "../models/report";
import * as api1 from "../data-sources/search-api-1";
import * as api2 from "../data-sources/search-api-2";
import * as api3 from "../data-sources/search-api-3";


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

export const createReportFromSearchResult = (reportData: Report, reportId): ActionType => {
    const report = Report.create(reportData, reportId);
    return ({
        type: actionTypes.CREATE_REPORT_FROM_SEARCH_RESULT,
        payload: report
    });
};

export const selectSearchResult = (searchResultId): ActionType => ({
    type: actionTypes.SELECT_SEARCH_RESULT,
    payload: searchResultId
});

export const fetchSearchResults = (query): ThunkType => {
    function thunk(dispatch: Dispatch<ActionType>) {
        Promise.all([api1.search(query), api2.search(query), api3.search(query)])
            .then((response: mixed) => {
                const data = response.map((r, index) => ({source: `Search Provider ${index}`, ...r}));
                dispatch({ type: actionTypes.FETCH_SEARCH_RESULTS_SUCCESS, payload: {data} });
            })
            .catch((error: Error) => {
                debugger;
                dispatch({ type: actionTypes.FETCH_SEARCH_RESULTS_FAIL, payload: { error } });
            });
    }

    thunk.interceptOnOffline = false;
    return thunk;
};
