import React from "react";
import * as classes from "./collectionPlayers.module.css"


const Player = (props) => {
    return (

        <div className={classes.parent + " row"}>
            <div className={classes.imageContainer + " col-1"}>

                <img className={classes.image} src={props.image} alt="Card  cap" />
            </div>
            <div className={classes.nameContainer + " col-8"}>

                <span className={classes.name}>{props.name}</span>
            </div>
            <div className='col-2' style={{ lineHeight: "80px" }}>

                <button className=" btn btn-success" style={{ padding: "5px 20px" }}
                    onClick={props.clicked}>عرض</button>
            </div>
        </div>


    )
}

export default Player;