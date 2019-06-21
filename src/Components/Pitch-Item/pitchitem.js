import React from 'react';
import './pitchitem.module.css';

const PitchItem = (props) => {
    return (
        <>
            <div className="card border-black" style={{ marginTop: '2.3rem' }}>
                <div>
                </div>
                <div className="card-body" style={{ paddingTop: '2rem' }}>
                    <img src={props.image}></img>
                    <hr/>
                    <span>{props.name}</span>
                    <hr/>
                    <span>{props.address}</span>
                    <button onClick={props.showPitch}>احجز</button>
                </div>
            </div>
        </>
    )
}

export default PitchItem;