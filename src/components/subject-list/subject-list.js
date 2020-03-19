// @flow
import React from "react";
import { IconButton, ListItemAvatar, ListItemSecondaryAction, ListItemText, ListItem, List } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FaceIcon from '@material-ui/icons/Face';
import type ReportSubject from "../../models/report-subject"
type PropsType = { vehicles: Array<ReportSubject>, dense: ?boolean } ;


export const SubjectList = ({ searchResults,  dense = false }: PropsType): React$Element<any> => {
    return (
        <List dense={ dense }>
            { searchResults.map(searchResult => (
                <ListItem key={ searchResult.id }>
                    <ListItemAvatar>
                        <FontAwesomeIcon
                            title={ searchResult.type }
                            style={ { color: "#A88", fontSize: "2rem", marginRight: "1rem" } }
                            icon={ <FaceIcon/> }
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={ `${ searchResult.subject.firstName } ${ searchResult.subject.lastName } | ${ moment(searchResult.dateCreated).format("MM/DD/YYYY HH:MM") }` }
                        secondary={`${ searchResult.subject.gender }`  }
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