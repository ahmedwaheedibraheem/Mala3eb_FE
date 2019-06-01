import *  as actionTypes from '../actionTypes';

const intialState = {
    user: null,
    comments: []
}

const commentReducer = (state = intialState, action) => {

    switch (action.type) {
        case actionTypes.GET_COMMENTS:
            let commentsArrNew = [];
            let user={};
            for (let key in action.comments.commentsArr) {
                commentsArrNew.push(
                    {
                        _id:action.comments.commentsArr[key]._id,
                        userId:action.comments.commentsArr[key].userId,
                        userFname:action.comments.commentsArr[key].userFname,
                        userLname:action.comments.commentsArr[key].userLname,
                        commentDate:action.comments.commentsArr[key].commentDate,
                        commentBody:action.comments.commentsArr[key].commentBody,
                    
                    }
                );
            }
            user=action.comments.user
            return {
                ...state,
                comments: commentsArrNew,
                user:user
            }
        case actionTypes.DELETE_COMMENT:
            let commentsArrAfterDelete = [...state.comments];
            let index = commentsArrAfterDelete.findIndex(c=> c._id === action.id);
            commentsArrAfterDelete.splice(index,1);
            return{
                ...state,
                comments:commentsArrAfterDelete
            }

        case actionTypes.ADD_COMMENT:
            let commentsArrAfterAdded = [...state.comments];
            console.log(action.comment)
            commentsArrAfterAdded.push(action.comment);
            return{
                ...state,
                comments:commentsArrAfterAdded
            }

        case actionTypes.UPDATE_COMMENT:
            let commentsArrUpdated =[...state.comments];
            let commentUpdated = action.comment;
            let i = commentsArrUpdated.findIndex(c=>c._id === action.id);
            commentsArrUpdated[i] = commentUpdated;

            return{
                ...state,
                comments:commentsArrUpdated
            }
    }

    return {
        ...state
    }
}

export default commentReducer;