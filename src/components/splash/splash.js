// @flow

import React from "react";
import "./splash.css";
import LinearProgress from "@material-ui/core/LinearProgress";

type PropsType = { children: React$Component<any>, message: ?string };
export const Splash = ({ children, message }: PropsType): React$Element<any> => {
    return (
        <div className={ "splash" }>
            <div className={ "splash_container" }>
                { children }
                <h3 className={ "splash_message" }>
                    { message || null }
                </h3>
                <LinearProgress/>
            </div>
        </div>
    );
};