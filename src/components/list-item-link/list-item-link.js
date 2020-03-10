// @flow
import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

type PropsType = { to: string, text: string, icon: React$Element<any> };


export const ListItemLink = (props) => {
    const { icon, text, to } = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef((linkProps, ref) => (
                <NavLink ref={ ref } to={ to } { ...linkProps } />
            )),
        [to]
    );

    return (
        <li>
            <ListItem button component={ renderLink }>
                <ListItemIcon>{ icon }</ListItemIcon>
                <ListItemText primary={ text }/>
            </ListItem>
        </li>
    );
};