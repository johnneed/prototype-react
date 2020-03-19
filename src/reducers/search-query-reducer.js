// @flow
import * as types from "../constants/action-types";
import initialState from "./initial-state";
import Report from "../models/report";
import * as R from "ramda";


export const searchQueryReducer = R.cond([
    [
        (state, action) => (action.type === types.UPDATE_VEHICLE_QUERY),
        (state, action) => {
            return ({
                ...state,
                vehicle: { ...state.vehicle, ...action.payload },
                error: null
            });
        }
    ],
    [
        (state, action) => (action.type === types.UPDATE_SUBJECT_QUERY),
        (state, action) => {
            return ({
                ...state,
                subject: { ...state.subject, ...action.payload },
                error: null
            });
        }
    ],
    [
        (state, action) => (action.type === types.CLEAR_SUBJECT_QUERY),
        (state, action) => {
            return ({
                ...state,
                subject: initialState.searchQuery.subject,
                error: null
            });
        }
    ],
    [
        (state, action) => (action.type === types.CLEAR_VEHICLE_QUERY),
        (state, action) => {
            return ({
                ...state,
                vehicle: initialState.searchQuery.vehicle,
                error: null
            });
        }
    ],
    [
        (state, action) => (action.type === types.CLEAR_SEARCH),
        () => initialState.searchQuery
    ],
    [
        (state, action) => (action.type === types.RESET),
        () => initialState.searchQuery
    ],
    [
        R.T,
        state => (state || initialState.searchQuery)
    ]
]);