import React, { Component } from 'react';
import * as classes from './cover.module.css';

class CoverImage extends Component {

    render() {
        return (
            <>
                <div className={classes.coverImage}>
                    <img src={this.props.coverImage} />
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