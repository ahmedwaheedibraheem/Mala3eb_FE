import React, { Component } from 'react';
import * as classes from './comment.module.css';
import '../../Theme/bootstrap.css';
import commentImg from '../../Assets/commentImg.png';
import RateView from '../Rate/rate';


class Comment extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="card" style={{ "textAlign": "right" }}>
                    <div className="card-body row no-gutters">
                        <div className={classes.commentImg}>
                            <img src={commentImg}></img>
                        </div>
                        <div className="col md-9">
                            <h5 className="card-title">{this.props.fname} {this.props.lname}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                <RateView></RateView>
                            </h6>
                            <span>{this.props.commentDate}</span>
                            <p className="card-text">{this.props.commentBody}</p>
                        </div>
                        <div className="commentBtns">
                            {(this.props.userId === this.props.userLogin) ? <button className="btn btn-danger" onClick={this.props.deleted}><i className="fas fa-trash-alt"></i></button> : null}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Comment;