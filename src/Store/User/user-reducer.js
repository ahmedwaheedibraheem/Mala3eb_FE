import * as actionTypes from '../actionTypes';

// User initial state
const initialState = {
    user: null
};

// User reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            // Copying the state
            const newState = {
                user: {...state.user}
            };
            newState.user = action.payload;
            return newState;
    };
    return state;
};

export default userReducer;