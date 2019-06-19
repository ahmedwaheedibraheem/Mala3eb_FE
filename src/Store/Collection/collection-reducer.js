import * as actionTypes from '../actionTypes';

const initialState = {
    collection: null
}

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_COLLECTION:
            const newState = {
                collection: { ...state.collection }
            };
            newState.collection = action.payload;
            return newState;
    }
    return state;
}

export default collectionReducer;