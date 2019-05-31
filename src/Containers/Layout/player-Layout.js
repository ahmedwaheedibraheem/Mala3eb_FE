import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PlayerAPI from '../../API/player';
import * as playerActions from '../../Store/Player/player-actions';

import Navbar from '../../Containers/Navbar/navbar';
import Radar from '../../Components/Radar-chart/radar-chart';
import ProfileData from '../../Components/ProfileData/ProfileData';
import ProfileImage from '../../Components/Profile-image/profileImage';
import Trophies from '../../Components/Trophies/trophies';

class Playout extends Component {

    async componentDidMount() {
        let data = await PlayerAPI.getData();
        this.props.setPlayer(data);
    }

    render() {
        if (this.props.player) {
            return (
                <>
                    <div>
                        <div className="row no-gutters">
                            <div className="col-md-12">
                                <Navbar />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ProfileImage image={this.props.player.imgURL} name={this.props.player.name} />
                            </div>
                            <div className="col-lg-6">
                                <Radar
                                    favPosition={this.props.player.favPosition}
                                    data={this.props.player.skills} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ProfileData data={this.props.player} />
                            </div>
                        </div>
                        <div className="row">
                            <Trophies />

                        </div>
                    </div>
                </>
            );

        } else
            return null;

    }
}

//mapStateToProps
const mapStateToProps = (state) => {
    return {
        player: state.playerReducer.player
    }
}

//mapActionsToProps
const mapActionsToProps = (dispatch) => {
    return {
        setPlayer: (player) => dispatch(playerActions.setPlayer(player))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Playout);