// @flow

import User from "../models/report";
import Rental from "../models/user";

const firstRental = Rental.create();

const initialState = {
    network: { isOffline: true },
    reports: { data: {}, error: null, selected: null },
    searchResults: { data: {}, error: null, selected: null },
    session: {
        userIsLoggedIn: false,
        isInitialized: false,
        user:  User.create()
    },
};


export default initialState;