import React from 'react';
import '../../Theme/bootstrap.css';
import * as classes from './profileImage.module.css';

const ProfileImage = (props) => {
    return (
        <>
            <div >
                <img style={{ height: '305px' }} src={props.image} alt="Card image" />
                <div className={classes.playerName}>
                    <span className={classes.playerNum}>19</span>
                   {props.name}
                </div>
            </div>

        </>
    );
}

export default ProfileImage;