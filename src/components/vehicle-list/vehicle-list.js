// @flow
import React from "react";
import { IconButton, ListItemAvatar, ListItemSecondaryAction, ListItemText, ListItem, List } from "@material-ui/core";
import moment from "moment";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import type ReportVehicle from "../../models/report-vehicle";
import Box from "@material-ui/core/Box";

type PropsType = { vehicles: Array<ReportVehicle>, dense: ?boolean } ;

export const VehicleList = ({ vehicles = [], dense = false, reportId, copyToReport }: PropsType): React$Element<any> => {
    const copy = searchResult => {
        if (!reportId) {
            window.alert("please select a report");
        } else {
            copyToReport(reportId, searchResult);
        }
    };
    return (
        <List dense={ dense }>
            { vehicles.length === 0 ? (<Box>No Results</Box>) : vehicles.map(searchResult => (
                <ListItem key={ searchResult.id }>
                    <ListItemText
                        primary={ `${ searchResult.licensePlateState || "" } ${ searchResult.licensePlateNumber || "" } ${ searchResult.licensePlateCountry || "" }` }
                        secondary={ `${ searchResult.vehicleColor || "" } ${ searchResult.vehicleYear || "" } ${ searchResult.vehicleMake || "" } ${ searchResult.vehicleModel || "" } ${ searchResult.vin || "" }` }
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={ () => {
                            copy(searchResult);
                        } }>
                            <FileCopyIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )) }
        </List>
    );
};