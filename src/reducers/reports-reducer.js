// @flow
import * as types from "../constants/action-types";
import initialState from "./initial-state";
import Report from "../models/report";
import * as R from "ramda";


export const reportsReducer = R.cond([
    [
        (state, action) => (action.type === types.FETCH_REPORTS_SUCCESS),
        (state, action) => {
            return ({
                ...state,
                data: action.payload.data,
                error: null
            });
        }
    ],
    [
        (state, action) => (action.type === types.FETCH_REPORTS_SUCCESS),
        (state, action) => {
            return ({
                ...state,
                data: action.payload.data,
                error: null
            });
        }
    ],
    [
        (state, action) => (action.type === types.CREATE_REPORT),
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
        (state, action) => (action.type === types.UPDATE_REPORT),
        (state, action) => {
            const myNewReport = Report.create({ ...state.data[action.payload.id], ...action.payload.snippet });
            return {
                ...state,
                data: {
                    ...state.reports,
                    [action.payload.id]: myNewReport
                },

                error: null
            };
        }
    ],
    [
        (state, action) => (action.type === types.DELETE_REPORT_SUCCESS),
        (state, action) => {
            const reportId = action.payload.report.id;
            const data = R.filter(report => report.id !== reportId)(state.data);
            return {
                ...state,
                data,
                selected: null
            };
        }
    ],
    [
        (state, action) => (action.type === types.SELECT_REPORT),
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