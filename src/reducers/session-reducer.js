// @flow
import * as types from "../constants/action-types";
import initialState from "./initial-state";

export const sessionReducer = (state: Object = initialState.session, action: ActionType): Object => {
    switch (action.type) {
        case types.INITIALIZE_FAIL:
            return {
                ...state,
                isInitialized: false,
                initializeError: "Failed to initialize user"
            };
        case types.INITIALIZE_SUCCESS:
            return {
                ...state,
                isInitialized: true,
                initializeError: null
            };
        case types.RESET:
            return initialState.session;

        default:
            return state;
    }
};
