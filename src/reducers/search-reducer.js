// @flow
import * as types from "../constants/action-types";
import initialState from "./initial-state";
import Report from "../models/report";
import * as R from "ramda";


export const searchReducer = R.cond([
    [
        (state, action) => (action.type === types.FETCH_SEARCH_RESULTS_SUCCESS),
        (state, action) => {
            return ({
                ...state,
                data: action.payload.data,
                error: null
            });
        }
    ],
    [
        (state, action) => (action.type === types.FETCH_SEARCH_RESULTS_FAIL),
        (state, action) => {
            return ({
                ...state,
                data: action.payload.data,
                error: null
            });
        }
    ],
    [
        (state, action) => (action.type === types.CREATE_REPORT_FROM_SEARCH_RESULT),
        (state, action) => {
            return ({
                ...state,
                selected: action.payload.id,
                data: {
                    ...state.data,
                    [action.payload.id]: action.payload
                },
                error: null
            });
        }
    ],
    [
        (state, action) => (action.type === types.SELECT_SEARCH_RESULT),
        (state, action) => ({ ...state, selectedReport: action.payload })
    ],
    [
        (state, action) => (action.type === types.RESET),
        () => initialState.reports
    ],
    [
        R.T,
        state => (state || initialState.reports)
    ]
]);