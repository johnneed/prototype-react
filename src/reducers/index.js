// @flow
import { combineReducers } from "redux";
import { reportsReducer as reports } from "./reports-reducer";
import { sessionReducer as session } from "./session-reducer";
import { searchResultsReducer as searchResults } from "./search-results-reducer";
import { searchQueryReducer as searchQuery } from "./search-query-reducer";

const rootReducer = combineReducers<any, any>({
    session,
    reports,
    searchResults,
    searchQuery
});

export default rootReducer;
