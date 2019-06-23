import * as actionTypes from '../actionTypes';

export const setCollection = (collection) => {
    return {
        type: actionTypes.SET_COLLECTION,
        payload: collection
    }
}
