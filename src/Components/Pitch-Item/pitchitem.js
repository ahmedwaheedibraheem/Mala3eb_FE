import React from 'react';
import * as classes from './pitchitem.module.css';

const PitchItem = (props) => {
    return (
        <>
            <div className="card border-black" style={{ marginTop: '2.3rem'}}>
                <div className={classes.cardbody}>
                    <img src={props.image}></img>
                    <hr />
                    <span>{props.name}</span>
                    <hr />
                    <span>{props.address}</span>
                    <hr />
                    <button onClick={props.showPitch}>احجز</button>
                </div>
            </div>
        </>
    )
}

export default PitchItem;