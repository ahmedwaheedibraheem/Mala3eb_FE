import * as actionTypes from '../actionTypes';

export const setPitch = (pitch) => {
    return {
        type: actionTypes.SET_PITCH,
        payload: pitch
    }
}