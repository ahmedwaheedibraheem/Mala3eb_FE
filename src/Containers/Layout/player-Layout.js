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
import CardItem from '../../Components/Card-Result/card-result';
import CardNoRes from '../../Components/Card-NoResult/cardNoRes';


class Playout extends Component {

    async componentDidMount() {
        let data;
        let playerId = this.props.match.params.playerId;
        data = await PlayerAPI.getPlayerData(playerId);
        this.props.setPlayer(data);
    }

    async componentDidUpdate(prevProps) {
        if (this.props.match.params.playerId !== prevProps.match.params.playerId) {
            let data;
            let playerId = this.props.match.params.playerId;
            data = await PlayerAPI.getPlayerData(playerId);
            this.props.setPlayer(data);
        }

    }

    editPlayer() {
        this.props.history.push('/createplayer');
    }

    async showProfile(id) {
        this.props.history.push(`/profile/${id}`);
    }

    render() {
        console.log('render', this.props)
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
                                follow={() => { PlayerAPI.followPlayer(this.props.player._id) }}
                            ></CoverImage>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ProfileData edit={() => this.editPlayer()}>
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
                            <div className="col-md-6">
                                <div className="card border-dark" style={{ marginTop: '1rem', width: '100%' }}>

                                    <div className="card-header" style={{
                                        backgroundColor: '#000', color: 'white', fontWeight: 'bold',
                                        fontSize: 20, direction: 'rtl', textAlign: 'right'
                                    }}>المتابعون </div>
                                    {this.props.player.followers.length > 0 ?
                                        <div className="card-body">
                                            {this.props.player.followers.map((pl) => {
                                                return (
                                                    <React.Fragment key={pl._id}>
                                                        <CardItem
                                                            id={pl._id}
                                                            name={pl.name}
                                                            address={pl.address}
                                                            mobileNo={pl.mobileNo}
                                                            age={pl.age}
                                                            image={pl.imgURL}
                                                            show={() => { this.showProfile(pl._id) }}
                                                        ></CardItem>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </div> :
                                        <div className="card-body" style={{ textAlign: "center" }}>
                                            <CardNoRes text="لا يوجد متابعون"></CardNoRes>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card border-dark" style={{ marginTop: '1rem', width: '100%' }}>
                                    <div className="card-header" style={{
                                        backgroundColor: '#000', color: 'white', fontWeight: 'bold',
                                        fontSize: 20, direction: 'rtl', textAlign: 'right'
                                    }}>المتابعين </div>
                                    {this.props.player.following.length > 0 ?
                                        <div className="card-body">
                                            {this.props.player.following.map((pl) => {
                                                return (
                                                    <React.Fragment key={pl._id}>
                                                        <CardItem
                                                            id={pl._id}
                                                            name={pl.name}
                                                            address={pl.address}
                                                            mobileNo={pl.mobileNo}
                                                            age={pl.age}
                                                            image={pl.imgURL}
                                                            show={() => { this.showProfile(pl._id) }}
                                                        ></CardItem>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </div> :
                                        <div className="card-body" style={{ textAlign: "center" }}>
                                            <CardNoRes text="لا يوجد متابعون"></CardNoRes>
                                        </div>
                                    }
                                </div>
                            </div>
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