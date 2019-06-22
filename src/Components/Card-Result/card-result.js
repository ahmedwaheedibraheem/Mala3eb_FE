import React from 'react';
import { withRouter } from 'react-router-dom';
import * as classes from './cardRes.module.css';
import RateView from '../../Containers/Rate/rate';

const CardItem = (props) => {
    return (
        <>
            <div className="card" style={{ "textAlign": "right" , marginBlockStart:'1rem' }}>
                <div className="card-body row no-gutters">
                    <div className={classes.commentImg}>
                        <img alt="img" src={props.image}></img>
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
                        <button onClick={props.show} type="button" className="btn btn-success">عرض</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default withRouter(CardItem);