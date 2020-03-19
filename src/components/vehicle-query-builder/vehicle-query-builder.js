// @flow
import React from "react";
import moment from "moment";
import "./vehicle-query-builder.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as R from "ramda";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeModelData } from "../../data-sources/make-model-data";
import { USStates } from "../../data-sources/us-states";
import Divider from "@material-ui/core/Divider";

type PropsType = { searchResults: Array<Object>, dense: ?boolean } ;

const allMakes = Array.from(new Set(makeModelData.map(datum => datum.make))).sort((a, b) => a.toLowerCase() === b.toLowerCase() ? 0 : a.toLowerCase() > b.toLowerCase() ? 1 : -1);
const allModels = Array.from(new Set(makeModelData.map(datum => datum.model))).sort((a, b) => a.toLowerCase() === b.toLowerCase() ? 0 : a.toLowerCase() > b.toLowerCase() ? 1 : -1);
const makeLookup = makeModelData.reduce((acc, mm) => ({ ...acc, [mm.model]: mm.make }));
const states = Object.keys(USStates);

const orderModels = make => allMakes.includes(make)
    ? Array.from(
        new Set(makeModelData
            .sort((a, b) => a.model.toLowerCase() - b.model.toLowerCase())
            .sort(R.cond([
                [(a, b) => (a.make === make && b.make === make), R.always(0)],
                [(a, b) => (a.make !== make && b.make !== make), R.always(0)],
                [(a, b) => (a.make === make && b.make !== make), R.always(-1)],
                [R.T, R.always(1)]
            ]))
            .map(datum => datum.model)
        ))
    : allModels;


export const VehicleQueryBuilder = ({ query, onUpdateQuery }: PropsType): React$Element<any> => {

    const models = orderModels(query.vehicleMake);

    const updateQueryValue = R.curry((key, event, value) => {
        onUpdateQuery({ [key]: value });
    });

    const updateQuery = R.curry((key, event) => {
        onUpdateQuery({ [key]: event.target.value });
    });

    const updateModel = (event, vehicleModel) => {
        const hasMake = allModels.includes(vehicleModel);
        const vehicleMake = hasMake ? makeLookup[vehicleModel] : query.vehicleMake;
        onUpdateQuery({ vehicleModel, vehicleMake });
    };


    return (
        <div className={ "vehicle-query-builder" }>
            <Grid container item xs={ 12 } spacing={ 3 }>
                <Grid item xs={ 12 }>
                    <TextField id="vehicleYear"
                               label="Year"
                               type={ "number" }
                               onChange={ updateQuery("vehicleYear") }
                               value={ query.vehicleYear || "" }/>
                </Grid>
                <Grid item xs={ 12 }>
                    <Autocomplete
                        id="make"
                        options={ allMakes }
                        getOptionLabel={ option => option }
                        style={ { width: 190 } }
                        value={ query.vehicleMake }
                        freeSolo={ true }
                        onChange={ updateQueryValue("vehicleMake") }
                        inputProps={ {
                            autoComplete: "new-password" // disable autocomplete and autofill
                        } }
                        renderInput={ params => <TextField { ...params } label="Make"/> }
                    />

                </Grid>
                <Grid item xs={ 12 }>
                    <Autocomplete
                        id="model"
                        options={ models }
                        getOptionLabel={ option => option }
                        style={ { width: 190 } }
                        value={ query.vehicleModel }
                        onChange={ updateModel }
                        freeSolo={ true }
                        inputProps={ {
                            autoComplete: "new-password" // disable autocomplete and autofill
                        } }
                        renderInput={ params => <TextField { ...params } label="Model"/> }
                    />
                </Grid>
            </Grid>
            <Grid container item xs={ 12 } spacing={ 3 }>

                <Grid item xs={ 8 }>
                    <TextField id="licensePlateNumber"
                               label="License Plate"
                               onChange={ updateQuery("licensePlateNumber") }
                               value={ query.licensePlateNumber || "" }/>
                </Grid>
                <Grid item xs={ 4 }>
                    <Autocomplete
                        id="licensePlateState"
                        options={ states }
                        getOptionLabel={ option => option }
                        style={ { width: 60 } }
                        onChange={ updateQueryValue("licensePlateState") }
                        freeSolo={ true }
                        inputProps={ {
                            autoComplete: "new-password" // disable autocomplete and autofill
                        } }
                        renderInput={ params => <TextField { ...params } label="ST"/> }
                    />
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField id="vin"
                               label="VIN"
                               onChange={ updateQuery("vin") }
                               value={ query.vin || "" }/>
                </Grid>
            </Grid>
        </div>
    );
};