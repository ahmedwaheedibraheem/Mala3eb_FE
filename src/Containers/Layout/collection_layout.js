import * as collection from "../../API/collection";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../Containers/Navbar/navbar';
import ProfileData from '../../Components/ProfileData/ProfileData';
import RateView from '../../Containers/Rate/rate'
import * as classes from './layout.module.css'
import Player from "./collectionPlayers/collectionPlayers"

import * as collectionActions from '../../Store/Collection/collection-actions';


class CollectionLayout extends Component {

    state = {
        players: []
    }

    async componentDidMount() {
        let collectionId = this.props.match.params.collectionId;
        let data = await collection.getOneCollection("5d0cec76f8edae32640aa446");
        this.props.setCollection(data);

        const x = await collection.getAllPlayersInCollection("5d0cec76f8edae32640aa446")
        // console.log(x)
        const arr = [];
        for (const key in x) {
            arr.push({
                name: x[key].name,
                id: x[key]._id,
                image: x[key].imgURL,
            })
        }
        this.setState({ players: arr })
        console.log(arr)


    }



    deleteCollectionHandler = async (colId) => {

        await collection.deleteCollection(colId)
        let _id = localStorage.getItem('playerId')
        this.props.history.push(`/profile/${_id}`)

    }

    deletePlayerHandler = async () => {

    }

    // inviteHandler = () => {
    //     this.props.history.push("/searchresult")
    // }

    getPlayersInCollectionHandler = async (colId) => {
        let playersInCollection = await collection.getAllPlayersInCollection(colId)
        console.log(playersInCollection);

    }



    joinHandler = async (collectionId) => {
        await collection.joinCollection(collectionId)
        window.location.reload()
    }


    cancelJoinHandler = async (collectionId) => {
        await collection.cancelJoin(collectionId)
        window.location.reload()
    }

    showProfileHandler = async (id) => {
        window.location.replace(`http://localhost:3000/profile/${id}`)
    }


    render() {

        // let isJoined = this.state.Joined
        // console.log(isJoined)
        // console.log(this.state.Joined)


        let items = this.state.players.map(player => (
            <React.Fragment key={player.id}>
                <Player
                    image={player.image}
                    name={player.name}
                    clicked={() => this.showProfileHandler(player.id)}
                // delete={() => this.deleteHandler(player.id)} 

                />
            </React.Fragment>
        ));



        console.log(this.props.collection);


        if (this.props.collection) {

            return (

                <div className={classes.bgimg}>
                    <div>
                        <div className="row no-gutters">
                            <div className="col-md-12">
                                <Navbar />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className={classes.collectionheader}>
                                    <button className={classes.collectionname} >تجمع الكبار</button>
                                    <div className={classes.btngroup}>

                                        <button
                                            className="btn btn-success"
                                            onClick={() => this.deleteCollectionHandler("5d0c1e5350fdf23ce43fc334")}
                                        >حذف</button>







                                        {this.props.collection.players.includes(localStorage.getItem('playerId'))
                                            ?
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => this.cancelJoinHandler("5d0cec76f8edae32640aa446")}
                                            >الغاء الاشتراك</button>
                                            :
                                            <button
                                                className="btn btn-success"
                                                onClick={() => this.joinHandler("5d0cec76f8edae32640aa446")}
                                            >انضم</button>}








                                        <button
                                            className="btn btn-success"
                                            onClick={() => this.inviteHandler()}
                                        >دعوة</button>

                                    </div>
                                    <div className={classes.number}>
                                        <div style={{ color: 'red', fontSize: '26px', fontWeight: 'bold' }}>4</div>
                                        <div style={{ fontSize: '9px' }}>متبقى</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* joiner card */}

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card border-black" style={{ marginTop: '2.3rem' }}>
                                    <div className="card-header" style={{
                                        backgroundColor: '#000', color: 'white', fontWeight: 'bold', "textAlign": "right",
                                        fontSize: 20
                                    }}
                                        onClick={() => this.getPlayersInCollectionHandler("5d0c1e5350fdf23ce43fc334")}
                                    >المنضمون</div>
                                </div>
                                <div className="card" style={{ "textAlign": "right" }}>
                                    <div className="card-body row no-gutters">
                                        <div className={classes.commentImg}>
                                            {/* <img src={commentImg}></img> */}
                                        </div>
                                        <div className="col md-9">
                                            <h5 className="card-title"></h5>
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                {/* <RateView></RateView> */}

                                                {/* listing */}


                                                {items}



                                            </h6>
                                            <span>{this.props.commentDate}</span>
                                            <p className="card-text"></p>
                                        </div>
                                        {/* <div className="commentBtns">
                                            <button className="btn btn-info" style={{ padding: '10px 20px', marginLeft: '10px' }}>عرض</button>
                                            <button className="btn btn-success" style={{ padding: '10px 20px', marginLeft: '10px' }}>اضافة</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }
        else return <h1>page not found</h1>;
    }

}

//mapStateToProps
const mapStateToProps = (state) => {
    return {
        collection: state.collectionReducer.collection
    }
}

//mapActionsToProps
const mapActionsToProps = (dispatch) => {
    return {
        setCollection: (collection) => dispatch(collectionActions.setCollection(collection))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(CollectionLayout);