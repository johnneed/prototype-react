// @flow
import React from "react";
import moment from "moment";
import "./search-results.css";

type PropsType = { searchResults: Array<Object>, dense: ?boolean } ;

export const SearchResults = ({ searchResults}: PropsType): React$Element<any> => {
    return (<div className={"search-results"}></div>);
};