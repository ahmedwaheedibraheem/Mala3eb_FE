import React, { Component } from 'react';
import * as classes from './cover.module.css';

class CoverImage extends Component {

    render() {
        return (
            <>
                <div className={classes.coverImage}>
                    <img alt="cover" src={this.props.coverImage || "https://www.ingenia.org.uk/getattachment/Ingenia/Issue-77/The-football-pitch-in-three-pieces/T1.jpg?lang=en-GB&width=890&height=592"} style={{ height: "100%" }} />
                    <div className={classes.profileName}>
                        <h4>{this.props.name}</h4>
                    </div>
                    <div className={classes.circleImage}>
                        <img src={this.props.profileImage} />
                    </div>
                </div>
            </>
        )
    }
}
export default CoverImage;