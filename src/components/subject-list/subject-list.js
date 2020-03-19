// @flow
import React from "react";
import { IconButton, ListItemAvatar, ListItemSecondaryAction, ListItemText, ListItem, List } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import FaceIcon from "@material-ui/icons/Face";
import type ReportSubject from "../../models/report-subject";
import Box from "@material-ui/core/Box";

type PropsType = { vehicles: Array<ReportSubject>, dense: ?boolean, reportId: ?string, copyToReport: (string, Object)=> void } ;


export const SubjectList = ({ searchResults = [], dense = false, reportId, copyToReport }: PropsType): React$Element<any> => {
    const copy = searchResult => {
        if (!reportId) {
            window.alert("please select a report");
        } else {
            copyToReport(reportId, searchResult);
        }
    };
    return (
        <List dense={ dense }>
            { searchResults.length === 0 ? (<Box>No Results</Box>) : searchResults.map(searchResult => (
                <ListItem key={ searchResult.id }>
                    <ListItemText
                        primary={ `${ searchResult.firstName } ${ searchResult.lastName }` }
                        secondary={ `${ searchResult.gender }` }
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end"
                                    aria-label="copy"
                                    onClick={ () => {
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