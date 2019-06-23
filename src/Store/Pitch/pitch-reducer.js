import * as actionTypes from "../actionTypes";

const initialState = {
    pitch: null,
    pitches: null
}

const pitchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PITCH:
            const newState = {
                pitch: { ...state.pitch }
            };
            newState.pitch = action.payload;
            return newState;

        case actionTypes.SET_PITCHES:
            const NewState = {
                pitches: { ...state.pitches }
            };
            NewState.pitches = action.payload;
            return NewState;
    }
    return state;
}

export default pitchReducer;