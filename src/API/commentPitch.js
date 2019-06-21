import axios from '../Configurations/Axios/axios-config';
import * as actionCreators from '../Store/Comment/comment-actions';

// GET COMMENTS
export const getComments = async (id) => {
    let res = await axios.get(`/comments/pitch/${id}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return res.data;
};

//DELETE COMMENT

export const deleteComment = (commentId, id) => {
    return dispatch => {
        axios.delete(`/comments/pitch/${commentId}/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then(res => {
            dispatch(actionCreators.deleteComment(commentId, id))
        })
    }
};

//ADD COMMENT

export const addComment = (id, comment) => {
    return dispatch => {
        axios.post(`/comments/pitch/${id}`, comment, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then(res => {
            dispatch(actionCreators.addComment(id, res.data.commentAdded))
        })
    }
}

export const editComment = (id, comment) => {
    return dispatch => {
        axios.patch(`/comments/${id}`, comment, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then(res => {
            dispatch(actionCreators.editComment(id, res.data))
        })
    }
}