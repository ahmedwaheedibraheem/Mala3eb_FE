import * as actionTypes from "../actionTypes";

const initialState = {
    pitch: null
}

const pitchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PITCH:
            const newState = {
                pitch: { ...state.pitch }
            };
            newState.pitch = action.payload;
            return newState;
    }
    return state;
}

export default pitchReducer;