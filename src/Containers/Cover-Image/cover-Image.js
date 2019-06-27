import React, { Component } from 'react';
import * as classes from './cover.module.css';
import { withRouter } from 'react-router-dom';

class CoverImage extends Component {

    render() {
        console.log(this.props)
        return (
            <>
                <div className={classes.coverImage}>
                    <img alt="cover" src={this.props.coverImage || "https://www.odxtra.com/assets/images/default_cover.jpg"} style={{ height: "100%" }} />
                    <div className={classes.profileName}>
                        <h4>{this.props.name}</h4>
                    </div>
                    <div className={classes.circleImage}>
                        <img src={this.props.profileImage} />
                    </div>
                    {this.props.match.params.playerId == localStorage.getItem("playerId")
                        ? null
                        : <div style={{ marginTop: '-3rem', marginLeft: '2rem' }}>
                            <button type="button" className="btn btn-info" style={{ marginLeft: '1rem' }} onClick={this.props.follow}> متابعه</button>
                        </div>}

                </div>
            </>
        )
    }
}
export default withRouter(CoverImage);