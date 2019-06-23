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
                    <div style={{ marginTop: '-3rem', marginLeft: '2rem' }}>
                        <button type="button" className="btn btn-info" style={{ marginLeft: '1rem' }} onClick={this.props.follow}> متابعه</button>
                    </div>

                </div>
            </>
        )
    }
}
export default CoverImage;