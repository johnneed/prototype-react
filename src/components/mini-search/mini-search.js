// @flow

import React, { useState, useEffect } from "react";
import "./mini-search.css";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import SubjectQueryBuilder from "../subject-query-builder";
import VehicleQueryBuilder from "../vehicle-query-builder";
import FaceIcon from "@material-ui/icons/Face";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SubjectList from "../subject-list";
import VehicleList from "../vehicle-list";

type PropsType = {
    query: Object,
    searchResults: ?Array<Object>,
    searchError: ?string, onUpdateVehicleQuery: Object => void,
    onUpdateSubjectQuery: Object => void,
    copySubjectToReport: (string, Object) => void,
    copyVehicleToReport: (string, Object) => void
};

type TabPanelTypes = { children: React$Element<any>, index: number, value: any };


const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    }
}));

const TabPanel = (props: TabPanelTypes) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `search-tab-panel-${ index }` }
            aria-labelledby={ `search-tab-${ index }` }
            style={ { padding: 0 } }
            { ...other }
        >
            { value === index && <div>{ children }</div> }
        </div>
    );
};

function a11yProps(index: number) {
    return {
        id: `search-tab-${ index }`,
        "aria-controls": `search-tab-panel-${ index }`
    };
}


export const MiniSearch = ({ query, selectedReportId, searchResults, searchError, onSearch, onUpdateSubjectQuery, onUpdateVehicleQuery, onClearVehicleQuery, onClearSubjectQuery, copySubjectToReport, copyVehicleToReport }: PropsType): React$Element<any> => {
    const [showVehicleResults, setShowVehicleResults] = useState(false);
    const [showSubjectResults, setShowSubjectResults] = useState(false);
    const [isSearchingVehicles, setIsSearchingVehicles] = useState(false);
    const [isSearchingSubjects, setIsSearchingSubjects] = useState(false);
    const [value, setValue] = useState(0);
    const classes = useStyles();
    const handleChange = () => {
        setValue(value === 0 ? 1 : 0);
    };

    useEffect(() => {
        if (isSearchingVehicles) {
            setShowVehicleResults(true);
            setIsSearchingVehicles(false);
        }
        if (isSearchingSubjects) {
            setShowSubjectResults(true);
            setIsSearchingSubjects(false);
        }
    }, searchResults);

    const handleVehicleSearch = (event, newValue) => {
        if (!showVehicleResults) {
            setIsSearchingVehicles(true);
            onSearch(query);
        } else {
            setShowVehicleResults(false);
        }
    };

    const handleSubjectSearch = (event, newValue) => {
        if (!showSubjectResults) {
            setIsSearchingSubjects(true);
            onSearch(query);
        } else {
            setShowSubjectResults(false);
        }
    };

    return (
        <div className={ "mini-search" }>
            <Tabs value={ value } onChange={ handleChange } aria-label="search tabs">
                <Tab
                    className={ "mini-search_tab" }
                    label="Subjects" icon={ <FaceIcon/> }
                    { ...a11yProps(0) } />
                <Tab
                    className={ "mini-search_tab" }
                    label="Vehicles"
                    icon={ <DirectionsCarIcon/> }
                    { ...a11yProps(1) } />
            </Tabs>

            <TabPanel value={ value } index={ 0 }>
                <div className={ "mini-search_tab-panel" }>
                    <div className={ "mini-search_tab-panel-content" }>
                        {
                            showSubjectResults
                                ? (
                                    <div>
                                        {
                                            searchResults && searchResults.length > 0
                                                ? searchResults.map(
                                                result => (
                                                    <ExpansionPanel key={ result.source }>
                                                        <ExpansionPanelSummary
                                                            expandIcon={ <ExpandMoreIcon/> }
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography className={ classes.heading }>
                                                                { `${ result.subjects.length } : ${ result.source }` }
                                                            </Typography>
                                                        </ExpansionPanelSummary>
                                                        <ExpansionPanelDetails>
                                                            <SubjectList
                                                                reportId={ selectedReportId }
                                                                copyToReport={ copySubjectToReport }
                                                                searchResults={ (result.subjects || []).map(s => s.result) }/>
                                                        </ExpansionPanelDetails>
                                                    </ExpansionPanel>
                                                ))
                                                : <Typography variant={ "h6" }>No Matches Found</Typography>
                                        }
                                    </div>
                                )
                                : (
                                    <SubjectQueryBuilder query={ query.subject } onUpdateQuery={ onUpdateSubjectQuery }/>)
                        }
                    </div>
                    <footer className={ "mini-search_tab-panel-footer" }>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={ 1 }
                        >
                            <Grid item>
                                <Fab
                                    size="small"
                                    color={ showSubjectResults ? "primary" : "secondary" }
                                    aria-label="search"
                                    onClick={ handleSubjectSearch }>
                                    <SearchIcon/>
                                </Fab>
                            </Grid>
                            <Grid item>
                                <Fab
                                    size="small"
                                    color="primary"
                                    aria-label="clear search"
                                    onClick={ () => {
                                        onClearSubjectQuery();
                                        setShowSubjectResults(false);
                                    } }>
                                    <ClearAllIcon/>
                                </Fab>
                            </Grid>
                            <Grid item>
                                <Fab
                                    size="small"
                                    color={ !showSubjectResults ? "primary" : "" }
                                    aria-label="search results"
                                    onClick={ () => {
                                        setShowSubjectResults(true);
                                    } }>
                                    <ListAltIcon/>
                                </Fab>
                            </Grid>

                        </Grid>
                    </footer>
                </div>
            </TabPanel>
            <TabPanel value={ value } index={ 1 }>
                <div className={ "mini-search_tab-panel" }>
                    <div className={ "mini-search_tab-panel-content" }>
                        {
                            showVehicleResults
                                ? (<div className={ "mini-search_results-container" }>
                                    {
                                        searchResults && searchResults.length > 0
                                            ? searchResults.map(result => (
                                                <ExpansionPanel>
                                                    <ExpansionPanelSummary
                                                        expandIcon={ <ExpandMoreIcon/> }
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography className={ classes.heading }>
                                                            { `${ result.vehicles.length } : ${ result.source }` }
                                                        </Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <VehicleList
                                                            reportId={ selectedReportId }
                                                            copyToReport={ copyVehicleToReport }
                                                            vehicles={ (result.vehicles || []).map(v => v.result) }/>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                            ))
                                            : <Typography variant={ "h6" }>No Matches Found</Typography>
                                    }
                                </div>)
                                : (
                                    <VehicleQueryBuilder query={ query.vehicle } onUpdateQuery={ onUpdateVehicleQuery }/>)
                        }


                    </div>
                    <footer className={ "mini-search_tab-panel-footer" }>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={ 1 }
                        >
                            <Grid item>
                                <Fab
                                    size="small"
                                    color={ showVehicleResults ? "primary" : "secondary" }
                                    aria-label="search"
                                    onClick={ handleVehicleSearch }>
                                    <SearchIcon/>
                                </Fab>
                            </Grid>
                            <Grid item>
                                <Fab
                                    size="small"
                                    color="primary"
                                    ria-label="clear search"
                                    onClick={ () => {
                                        onClearVehicleQuery();
                                        setShowVehicleResults(false);
                                    } }>
                                    <ClearAllIcon/>
                                </Fab>
                            </Grid>
                            <Grid item>
                                <Fab
                                    size="small"
                                    color={ !showVehicleResults ? "primary" : "" }
                                    aria-label="search results"
                                    onClick={ () => {
                                        setShowVehicleResults(true);
                                    } }>
                                    <ListAltIcon/>
                                </Fab>
                            </Grid>
                        </Grid>
                    </footer>
                </div>
            </TabPanel>
        </div>
    );
};