// @flow

import User from "../models/user";
import ReportSubject from "../models/report-subject";
import ReportVehicle from "../models/report-vehicle";


const initialState = {
    network: { isOffline: true },
    reports: { data: {}, error: null, selected: null },
    searchResults: { data: [], error: null, selected: null },
    searchQuery: {
        vehicle: ReportVehicle.create(),
        subject: ReportSubject.create(),
        error: null
    },
    session: {
        userIsLoggedIn: false,
        isInitialized: false,
        user: User.create()
    }
};


export default initialState;