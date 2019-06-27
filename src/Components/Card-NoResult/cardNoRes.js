import React from 'react';
import { withRouter } from 'react-router-dom';

const CardNoRes = (props) => {
    return (
        <>
            <div className="card border-danger mb-3" style={{ maxWidth: '30rem', margin: '1rem auto', padding: '2rem' }}>
                <div className="card-body">
                    <p className="card-text"><h5> {props.text}</h5>  </p>
                </div>
            </div>
        </>
    );
}
export default withRouter(CardNoRes);