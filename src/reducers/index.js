// @flow
import { combineReducers } from "redux";
import { reportsReducer as reports } from "./reports-reducer";
import { sessionReducer as session } from "./session-reducer";
import {searchReducer as searchResults} from "./search-reducer";

const rootReducer = combineReducers<any, any>({
    session,
    reports,
    searchResults
});

export default rootReducer;
