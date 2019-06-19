import React from 'react';
import classes from './Player-PitchCreation.module.css';
import Navbar from '../../Containers/Navbar/navbar';

const PlayerPitchCreation = props => {



    return (
        <>
            <Navbar className="row" />
            <div className={classes.parent} >
                <div className=" row " >



                    <div className="col-6" style={{ paddingRight: "10rem" }}>


                        <div
                            onClick={() => props.history.push("/createplayer")}
                            className={classes.imageContainer}
                            style={{ margin: "0 auto" }}>
                            <div className={classes.creation}>
                                <div className={classes.hovered}>
                                    <h2>become a Player</h2>
                                    <img
                                        className={classes.image}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpGgEXHmE7098bv8XVjUgVGf8LmVBVMuredQCaLc6fT6YeQu6Mw"
                                        alt="" />
                                </div>
                            </div>
                        </div>
                    </div>





                    <div
                        onClick={() => props.history.push("/createpitch")}
                        className="col-6"
                        style={{ paddingLeft: "10rem" }}>
                        <div className={classes.imageContainer} style={{ margin: "0 auto" }}>
                            <img
                                className={classes.image}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpGgEXHmE7098bv8XVjUgVGf8LmVBVMuredQCaLc6fT6YeQu6Mw" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )




}

export default PlayerPitchCreation;