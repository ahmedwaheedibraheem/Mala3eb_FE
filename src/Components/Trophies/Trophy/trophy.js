import React from "react";

const trophy = (props) => {
    let image = {
        width: "46%",
        height: "220px",
        margin: "0 auto"
    }
    return (
        <div className="col-md-4">
            <div className="card " style={{ textAlign: "center", marginBottom: "30px", paddingTop: "15px", border: "1px solid rgb(24, 188, 156, .5) " }}>
                <img src={props.image} className="card-img-top" style={image} alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title" style={{ color: "green", fontWeight: "bold" }}>{props.name}</h4>
                    <p className="card-text">{props.rank}</p>
                    <button onClick={props.clicked} className="btn btn-outline-success">View details</button>
                </div>
            </div>
        </div>
    )
}

export default trophy;