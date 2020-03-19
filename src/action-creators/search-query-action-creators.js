// @flow

import * as actionTypes from "../constants/action-types";
import Report from "../models/report";
import * as api from "../data-sources/search-api-1";


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


export const updateVehicleQuery = (snippet:Object): ActionType => ({
    type: actionTypes.UPDATE_VEHICLE_QUERY,
    payload: snippet
});

export const updateSubjectQuery = (snippet:Object): ActionType => ({
    type: actionTypes.UPDATE_SUBJECT_QUERY,
    payload: snippet
});

export const clearSubjectQuery = (snippet:Object): ActionType => ({
    type: actionTypes.CLEAR_SUBJECT_QUERY,
});

export const clearVehicleQuery = (snippet:Object): ActionType => ({
    type: actionTypes.CLEAR_VEHICLE_QUERY,
});