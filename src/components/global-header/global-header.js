// @flow

import React from "react";
import "./global-header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const GlobalHeader = () => {
    return (
        <div className={ "global-header" }>
            <h1 className={ "global-header_title" }>My Awesome Call App</h1>
            <Link
                className={ "global-header_toggle-nav" }
                to={ "/search-results" }>
                <FontAwesomeIcon icon={ faInfoCircle }/>
            </Link>
        </div>
    );
};