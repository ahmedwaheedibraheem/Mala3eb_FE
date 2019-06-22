import * as actionTypes from '../actionTypes';

export const setPlayer = (player) => {
    return {
        type: actionTypes.SET_PLAYER,
        payload: player
    }
}

