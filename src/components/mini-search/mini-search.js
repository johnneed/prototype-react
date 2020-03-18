// @flow

import React from "react";
import "./mini-search.css";
import LinearProgress from "@material-ui/core/LinearProgress";

type PropsType = { children: React$Component<any>, message: ?string };
export const MiniSearch = ({ children, message }: PropsType): React$Element<any> => {
    return (
        <div className={ "mini-search" }>

        </div>
    );
};