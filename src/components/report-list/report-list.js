// @flow
import React from "react";
import { IconButton, ListItemAvatar, ListItemSecondaryAction, ListItemText, ListItem, List } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getReportIcon } from "../../libs/getReportIcon";
import moment from "moment";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import type Report from "../../models/report";

type PropsType = { reports: Array<Report>, history: Object, dense: ?boolean } ;

export const ReportList = ({ reports, history, dense = false }: PropsType): React$Element<any> => {
    return (
        <List dense={ dense }>
            { reports.map(report => (
                <ListItem key={ report.id }>
                    <ListItemAvatar>
                        <FontAwesomeIcon
                            title={ report.type }
                            style={ { color: "#A88", fontSize: "2rem", marginRight: "1rem" } }
                            icon={ getReportIcon(report.type) }
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={ `${ moment(report.dateCreated).format("MM/DD/YYYY HH:MM") } ${ report.subject ? ` | ${ report.subject.firstName } ${ report.subject.lastName }` : "" }` }
                        secondary={ report.vehicle ? `${ report.vehicle.vehicleColor || "" } ${ report.vehicle.vehicleYear || "" } ${ report.vehicle.vehicleMake || "" } ${ report.vehicle.vehicleModel || "" } ${ report.vehicle.licensePlateState || "" }${ report.vehicle.licensePlateNumber || "" }` : null }
                    />

                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="edit" onClick={ () => {
                            history.push(`/reports/${ report.id }`);
                        } }>
                            <EditIcon/>
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )) }
        </List>
    );
};