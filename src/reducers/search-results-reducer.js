// @flow
import * as types from "../constants/action-types";
import initialState from "./initial-state";
import * as R from "ramda";


export const searchResultsReducer = R.cond([
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
        (state, action) => (action.type === types.RESET),
        () => initialState.searchResults
    ],
    [
        R.T,
        state => (state || initialState.searchResults)
    ]
]);