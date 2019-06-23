import React from "react";
import * as classes from "./collectionPlayers.module.css"


const Player = (props) => {
    return (

        <div className={classes.parent + " row"}>
            <div className={classes.imageContainer + " col-1"}>

                <img className={classes.image} src={props.image} alt="Card  cap" />
            </div>
            <div className={classes.nameContainer + " col-7"}>

                <span className={classes.name}>{props.name}</span>
            </div>
            <div className='col-3' style={{ lineHeight: "80px" }}>
                {console.log('thisis', props)}
                <button className=" btn btn-success" style={{ padding: "5px 20px", marginLeft: '20px' }}
                    onClick={props.show}>عرض</button>

                {/* authorization for delete */}
                {
                    props.collectionIds.includes(props.collectionId)
                        ? <button className=" btn btn-danger" style={{ padding: "5px 20px" }}
                            onClick={props.delete}>حذف</button>
                        : null
                }
            </div>
        </div>
    )
}

export default Player;