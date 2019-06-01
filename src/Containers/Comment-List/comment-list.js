import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/Comment/comment-actions';
import * as ApiComment from '../../API/comment';
import Comment from '../comment/comment';
import commentImg from '../../assets/commentImg.png';
import * as classes from '../comment/comment.module.css';

class CommentList extends Component {

    state = {
        flag: true
    }
    async componentDidMount() {
        let res = await ApiComment.getComments("5cf07b03b68c584390d4c13a");
        console.log(res);
        this.props.getData("5cf07b03b68c584390d4c13a", res);
        console.log(this.props.comments);
       


    }

    onAddHandler = (e) => {
        e.preventDefault();
        const { commentBody: { value: commentBody } } = e.target.elements;
        let comment = { 
            userId: this.props.user._id,
            userFname:this.props.user.firstname,
            userLname:this.props.user.lastname,
            commentDate: new Date().toDateString(),
            commentBody,
            };
        console.log(comment);
        this.props.onAdd("5cf07b03b68c584390d4c13a", comment);
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
                                deleted={() => this.props.onDelete(comment._id,"5cf07b03b68c584390d4c13a")}

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
                            {/* <h6>{this.props.user.firstname}</h6> */}
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
        onDelete: (commentId,playerId) => dispatch(ApiComment.deleteComment(commentId,playerId)),
        onAdd: (id, res) => dispatch(ApiComment.addComment(id, res))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentList);