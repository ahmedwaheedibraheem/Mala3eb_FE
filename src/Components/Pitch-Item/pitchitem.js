import React from 'react';

const PitchItem = (props) => {
    return (
        <>
            <div className="card" style={{ "textAlign": "right", marginBlockStart: '1rem', width: '50rem' }}>
                <div className="card-body row no-gutters">
                    <div>
                        <img alt="img" src={props.image} style={{ height: '70px', width: '70px', borderRadius: '50%', marginLeft: '1rem' }}></img>
                    </div>
                    <div className="col md-9">
                        <h5 className="card-title">{props.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                        </h6>
                        <p className="card-text" style={{ color: '#000' }}>
                            <span style={{ fontWeight: 600, fontSize: '18px', marginLeft: '1rem', color: '#415260' }}> العنوان  :</span>{props.address}
                            <br />
                            <span style={{ fontWeight: 600, fontSize: '18px', marginLeft: '1rem', color: '#415260' }}>رقم الموبايل :</span>{props.mobileNo}
                        </p>
                    </div>
                    <div className="commentBtns">
                        <button onClick={props.showPitch} className="btn btn-success">احجز</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PitchItem;