import React from 'react';
import Navbar from '../../Containers/Navbar/navbar';
import * as classes from './notFound.module.css';

const NotFound = (props) => {
    return (
        <>
            <Navbar></Navbar>
            <div className={classes.bgimg}>
                <div className="card text-white bg-danger mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Danger card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NotFound;