// @flow

import React, { useEffect } from "react";
import "./report-details-screen.css";
import { bindActionCreators } from "redux";
import * as reportActions from "../../action-creators/report-action-creators";
import { connect } from "react-redux";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import * as R from "ramda";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import type Report from "../../models/report";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
type PropsType = { actions: { [string]: any => void }, report: Report, reportExists: Boolean };

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

const Screen = ({ actions, report, reportId, reportExists }: PropsType): React$Element<any> => {
    const classes = useStyles();
    const updateReport = R.curry((key, event) => {
        actions.updateReport(reportId, { [key]: event.target.value });
    });
    const updateSubject = R.curry((key, event) => {
        actions.updateReport(reportId, { subject: { ...report.subject, [key]: event.target.value } });
    });
    const updateVehicle = R.curry((key, event) => {
        actions.updateReport(reportId, { vehicle: { ...report.vehicle, [key]: event.target.value } });
    });
    return !reportExists
        ? <h1>Report not found</h1>
        : (
            <div className={ "report-details-screen" }>
                <ExpansionPanel defaultExpanded={true}>
                    <ExpansionPanelSummary
                        expandIcon={ <ExpandMoreIcon/> }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={ classes.heading }>Report</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={ 1 }>
                            <Grid container item xs={ 12 } spacing={ 3 }>
                                <Grid item xs={ 4 }>
                                    <TextField id="standard-basic"
                                               label="Incident Date"
                                               readOnly={ true }
                                               type={ "date" }
                                               onChange={ updateReport("dateTime") }
                                               InputLabelProps={ {
                                                   shrink: true
                                               } }
                                               value={ report.dateTime }/>
                                </Grid>
                                <Grid item xs={ 4 }>
                                    <TextField id="standard-basic"
                                               label="Created"
                                               readOnly={ true }
                                               value={ moment(report.created).format("MM-DD-YYYY HH:MM") }/>
                                </Grid>
                                <Grid item xs={ 4 }>
                                    <TextField id="standard-basic"
                                               label="Last Updated"
                                               readOnly={ true }
                                               value={ moment(report.updated).format("MM-DD-YYYY HH:MM") }/>
                                </Grid>
                            </Grid>
                            <Grid container item xs={ 12 } spacing={ 3 }>
                                <Grid item xs={ 4 }>
                                    <TextField id="standard-basic"
                                               label="PIN"
                                               onChange={ updateReport("pin") }
                                               value={ report.pin || "" }/>
                                </Grid>
                                <Grid item xs={ 4 }>
                                    <FormControl className={ classes.formControl }>
                                        <InputLabel id="demo-simple-select-label">Incident Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={ report.type || null }
                                            onChange={ updateReport("type") }
                                        >
                                            <MenuItem value={ "accident" }>Accident</MenuItem>
                                            <MenuItem value={ "traffic stop" }>Traffic Stop</MenuItem>
                                            <MenuItem value={ "other" }>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={ 4 }>
                                    <TextField id="standard-basic"
                                               label="Officer"
                                               readOnly={ true }
                                               value={ report.officer }/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={ <ExpandMoreIcon/> }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={ classes.heading }>Details</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <TextField id="standard-basic"
                                   label="Incident Details"
                                   multiline={ true }
                                   type={ "date" }
                                   style={ { width: "100%" } }
                                   onChange={ updateReport("details") }
                                   InputLabelProps={ {
                                       shrink: true
                                   } }
                                   value={ report.details }/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={ <ExpandMoreIcon/> }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={ classes.heading }>Subject</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={6}>
                                <TextField id="standard-basic"
                                           label="Last Name"
                                           onChange={ updateSubject("lastName") }
                                           value={ report.subject.lastName || "" }/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="standard-basic"
                                               label="First Name"
                                               onChange={ updateSubject("firstName") }
                                               value={ report.subject.firstName || "" }/>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={6}>
                                    <TextField id="standard-basic"
                                               label="Phone Number"
                                               type={"tel"}
                                               onChange={ updateSubject("phoneNumber") }
                                               value={ report.subject.phoneNumber || "" }/>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup aria-label="gender" name="gender1" value={report.subject.gender} onChange={updateSubject("gender")}>
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>

                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={ <ExpandMoreIcon/> }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={ classes.heading }>Vehicle</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={4}>
                                <TextField id="standard-basic"
                                           label="Year"
                                           onChange={ updateVehicle("vehicleYear") }
                                           value={ report.vehicle.vehicleYear|| "" }/>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField id="standard-basic"
                                           label="Make"
                                           onChange={ updateVehicle("vehicleMake") }
                                           value={ report.vehicle.vehicleMake || "" }/>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField id="standard-basic"
                                           label="Model"
                                           onChange={ updateVehicle("vehicleModel") }
                                           value={ report.vehicle.vehicleModel || "" }/>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={3}>

                            <Grid item xs={6}>
                                <TextField id="standard-basic"
                                           label="License Plate"
                                           onChange={ updateVehicle("licensePlateNumber") }
                                           value={ report.vehicle.licensePlateNumber || "" }/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="standard-basic"
                                           label="State"
                                           onChange={ updateVehicle("licensePlateState") }
                                           value={ report.vehicle.licensePlateState|| "" }/>
                            </Grid>
                        </Grid>
                    </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

            </div>
        );
};


const mapStateToProps = (state: Object, ownProps: Object): Object => {
    const reportId = R.path(["match", "params", "id"], ownProps);
    const report: ?Report = state.reports.data[reportId];
    return ({ report: report || {}, reportId, reportExists: (reportId && report) });
};

const mapDispatchToProps = (dispatch: Dispatch<Object>): Object => ({
    actions: bindActionCreators(reportActions, dispatch)
});

export const ReportDetailsScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);