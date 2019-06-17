import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as classes from './cardRes.module.css';
// import commentImg from '../../Assets/commentImg.png';
import RateView from '../Rate/rate';

const CardItem = (props) => {
    return (
        <>
            <div className="card" style={{ "textAlign": "right" }}>
                <div className="card-body row no-gutters">
                    <div className={classes.commentImg}>
                        <img src={props.image}></img>
                    </div>
                    <div className="col md-9">
                        <h5 className="card-title">{props.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            <RateView></RateView>
                        </h6>
                        <p className="card-text">
                            <span style={{ fontWeight: 600, fontSize: '18px', marginLeft: '1rem', color: '#415260' }}> العنوان  :</span>{props.address}
                            <br />
                            <span style={{ fontWeight: 600, fontSize: '18px', marginLeft: '1rem', color: '#415260' }}>رقم الموبايل :</span>{props.mobileNo}
                            {props.children}{props.rate}
                        </p>
                    </div>
                    <div className="commentBtns">
                        <button onClick={() => props.history.push(`/profile/${props.id}`)} type="button" className="btn btn-success">عرض</button>
                        <button type="button" className="btn btn-info">متابعه</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default withRouter(CardItem);