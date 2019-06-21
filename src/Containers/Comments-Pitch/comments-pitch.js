import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/Comment/comment-actions';
import * as ApiComment from '../../API/commentPitch';
import Comment from '../comment/comment';
import commentImg from '../../Assets/commentImg.png';
import * as classes from '../comment/comment.module.css';

class PitchComments extends Component {

    async componentDidMount() {
        let res = await ApiComment.getComments(this.props.pitchId);
        this.props.getData(this.props.pitchId, res);
    }

    onAddHandler = (e) => {
        e.preventDefault();
        const { commentBody: { value: commentBody } } = e.target.elements;
        let comment = {
            userId: this.props.user._id,
            userFname: this.props.user.firstname,
            userLname: this.props.user.lastname,
            commentDate: new Date().toDateString(),
            commentBody,
        };
        this.props.onAdd(this.props.pitchId, comment);
        let x = document.getElementById("text");
        this.clearContents(x);
    }
    clearContents(element) {
        element.value = '';
    }

    render() {

        return (
            <>
                {this.props.comments.map((comment) => {
                    return (
                        <>
                            <Comment
                                key={comment._id}
                                id={comment._id}
                                commentBody={comment.commentBody}
                                commentDate={comment.commentDate}
                                userId={comment.userId}
                                userLogin={this.props.user._id}
                                fname={comment.userFname}
                                lname={comment.userLname}
                                deleted={() => this.props.onDelete(comment._id, this.props.pitchId)}
                            ></Comment>
                        </>
                    )
                })}
                <div className="card" style={{ "textAlign": "right" }}>
                    <div className="card-body row no-gutters">
                        <div className={classes.commentImg}>
                            <img src={commentImg}></img>
                        </div>
                        <form onSubmit={this.onAddHandler}>
                            <textarea name="commentBody" className={classes.commentText} id="text"></textarea>
                            <br />
                            <button type="submit" className="btn btn-success">أضف التعليق</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        comments: state.commentReducer.comments,
        user: state.commentReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getData: (id, res) => dispatch(actionTypes.getDataComment(id, res)),
        onDelete: (commentId, pitchId) => dispatch(ApiComment.deleteComment(commentId, pitchId)),
        onAdd: (id, res) => dispatch(ApiComment.addComment(id, res))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PitchComments);