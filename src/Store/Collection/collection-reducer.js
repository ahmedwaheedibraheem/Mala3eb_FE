import * as actionTypes from '../actionTypes';

const initialState = {
    collection: null,
    btnFlag: true
}

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_COLLECTION:
            const newState = {
                collection: { ...state.collection },
                btnFlag: false
            };
            newState.collection = action.payload;
            return newState;
    }
    return state;
}

export default collectionReducer;