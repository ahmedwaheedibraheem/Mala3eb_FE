import * as actionTypes from '../actionTypes';

const initialState = {
    player: null
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PLAYER:
            const newState = {
                player: { ...state.player }
            };
            newState.player = action.payload;
            return newState;
    }
    return state;
}

export default playerReducer;