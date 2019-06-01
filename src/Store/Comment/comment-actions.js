import * as actionTypes from '../actionTypes';

// Action Creators of Function 

export const getDataComment = (id,data)=>{
    return{
        type:actionTypes.GET_COMMENTS,
        comments:data,
        id:id
    }
}

export const deleteComment = (id,playerId)=>{
    return{
        type:actionTypes.DELETE_COMMENT,
        id:id,
        playerId:playerId
    }
}

export const addComment = (id,data)=>{
    return{
        type:actionTypes.ADD_COMMENT,
        comment:data,
        id:id
    }
}

export const editComment = (id,data)=>{
    return{
        type:actionTypes.UPDATE_COMMENT,
        comment:data,
        id:id
    }
}