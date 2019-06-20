import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PlayerAPI from '../../API/player';
import * as playerActions from '../../Store/Player/player-actions';
import Navbar from '../../Containers/Navbar/navbar';
import Radar from '../../Components/Radar-chart/radar-chart';
import ProfileData from '../../Components/ProfileData/ProfileData';
import Trophies from '../../Components/Trophies/trophies';
import CommentList from '../Comment-List/comment-list';
import CoverImage from '../Cover-Image/cover-Image';
import * as classes from './layout.module.css';

class Playout extends Component {

    async componentDidMount() {
        let data;
        let playerId = this.props.match.params.playerId;
        data = await PlayerAPI.getPlayerData(playerId);
        this.props.setPlayer(data);
    }

    render() {
        let labels = ['التمرير', 'التسديد', 'المراوغه', 'اللياقة', 'السرعة'];
        if (this.props.player) {
            return (
                <div className={classes.bgimg}>
                    <div className={`row no-gutters ${classes.nav}`}>
                        <div className="col-md-12 ">
                            <Navbar />
                        </div>
                    </div>
                    <div className="container" className={classes.layout}>
                        <div className="row">
                            <CoverImage
                                coverImage={this.props.player.coverImage}
                                profileImage={this.props.player.imgURL}
                                name={this.props.player.name}
                            ></CoverImage>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ProfileData>
                                    <ul>
                                        <li><span className="blockquote">الاسم: {this.props.player.name} </span></li>
                                        <li><span className="blockquote">العمر: {this.props.player.age} </span></li>
                                        <li><span className="blockquote">رقم الموبايل: {this.props.player.mobileNo} </span></li>
                                        <li><span className="blockquote">العنوان: {this.props.player.address} </span></li>
                                    </ul>
                                </ProfileData>
                            </div>
                            <Radar
                                labels={labels}
                                label='المهارات'
                                favPosition={this.props.player.favPosition}
                                data={this.props.player.skills}
                                id={this.props.player._id} />
                        </div>
                        <div className="row" style={{ marginTop: '1.5rem' }}>
                            <Trophies />
                        </div>
                        <div className="row">
                            <div className="card border-dark" style={{ marginTop: '1rem', width: '100%' }}>
                                <div className="card-header" style={{
                                    backgroundColor: '#000', color: 'white', fontWeight: 'bold',
                                    fontSize: 20, direction: 'rtl', textAlign: 'right'
                                }}>التعليقات </div>
                                <div className="card-body">
                                    <CommentList playerId={this.props.match.params.playerId}></CommentList>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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