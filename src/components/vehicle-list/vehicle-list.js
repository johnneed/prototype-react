// @flow
import React from "react";
import { IconButton, ListItemAvatar, ListItemSecondaryAction, ListItemText, ListItem, List } from "@material-ui/core";
import moment from "moment";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import type ReportVehicle from "../../models/report-vehicle"
type PropsType = { vehicles: Array<ReportVehicle>, dense: ?boolean } ;

export const VehicleList = ({ vehicles, dense = false }: PropsType): React$Element<any> => {
    return (
        <List dense={ dense }>
            { vehicles.map(searchResult => (
                <ListItem key={ searchResult.id }>
                    <ListItemText
                        primary={ `${ searchResult.licensePlateState || "" } ${ searchResult.licensePlateNumber || "" } ${ searchResult.licensePlateCountry || ""}` }
                        secondary={`${ searchResult.vehicleColor || "" } ${ searchResult.vehicleYear || "" } ${ searchResult.vehicleMake || "" } ${ searchResult.vehicleModel || "" } ${ searchResult.vin || "" }`  }
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <FileCopyIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )) }
        </List>
    );
};