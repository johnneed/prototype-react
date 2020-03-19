// @flow
import React from "react";
import "./subject-query-builder.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import * as R from "ramda";

type PropsType = { query: Object, onUpdateQuery: Object => void } ;

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

export const SubjectQueryBuilder = ({ query, onUpdateQuery}: PropsType): React$Element<any> => {
    const classes = useStyles();
    const updateQueryValue = R.curry((key, event, value) => {
        onUpdateQuery({ [key]: value });
    });

    const updateQuery = R.curry((key, event) => {
        onUpdateQuery({ [key]: event.target.value });
    });
    return (<div className={"subject-query-builder"}>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={12}>
                    <TextField id="standard-basic"
                               label="Last Name"
                               onChange={ updateQuery("lastName") }
                               value={ query.lastName || "" }/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="standard-basic"
                               label="First Name"
                               onChange={ updateQuery("firstName") }
                               value={ query.firstName || "" }/>
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={12}>
                    <TextField id="standard-basic"
                               label="Phone Number"
                               type={"tel"}
                               onChange={ updateQuery("phoneNumber") }
                               value={ query.phoneNumber || "" }/>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={query.gender} onChange={updateQuery("gender")}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>

    </div>);
};