import * as actionTypes from '../actionTypes';

export const setPitch = (pitch) => {
    console.log(pitch);
    return {
        type: actionTypes.SET_PITCH,
        payload: pitch
    }
}