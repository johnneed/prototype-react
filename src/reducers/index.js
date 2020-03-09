// @flow
import { combineReducers } from "redux";
import { reportsReducer as reports } from "./reports-reducer";
import { sessionReducer as session } from "./session-reducer";


const rootReducer = combineReducers<any, any>({
    session,
    reports
});

export default rootReducer;
