import * as actionTypes from '../actionTypes';

// User action creators
export const setAppUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        payload: user
    };
};
