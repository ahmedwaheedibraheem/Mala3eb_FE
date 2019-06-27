import React, { Component } from 'react';
import CardItem from "../../Components/Card-Result/card-result"
import CardNoRes from "../../Components/Card-NoResult/cardNoRes"
import Navbar from "../../Containers/Navbar/navbar"
import * as classes from "../../Containers/Layout/layout.module.css"
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import * as PlayerAPI from '../../API/player';
import * as playerActions from '../../Store/Player/player-actions';
import { async } from 'q';




class Follow extends Component {


    componentDidMount = async () => {

        let signedInPlayer = await PlayerAPI.getPlayerData(localStorage.getItem('playerId'))
        this.props.setPlayer(signedInPlayer)
    }

    showProfile(id) {
        this.props.history.push(`/profile/${id}`);
        console.log("hiiii")
    }


    render() {
        if (this.props.player) {
            return (

                <div className={classes.bgimg}>
                    <div className={`row ${classes.nav}`}>
                        <div className="col-md-12 ">
                            <Navbar />
                        </div>
                    </div>


                    <div className="row" style={{ width: '75%', margin: '40px auto' }}>
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
                                                        show={() => this.showProfile(pl._id)}
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

                </div>

            )
        }
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


export default connect(mapStateToProps, mapActionsToProps)(Follow);