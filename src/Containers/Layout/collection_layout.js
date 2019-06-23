import * as collection from "../../API/collection";
import * as user from "../../API/user"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../Containers/Navbar/navbar';
import * as classes from './layout.module.css'
import Player from "./collectionPlayers/collectionPlayers"
import * as collectionActions from '../../Store/Collection/collection-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class CollectionLayout extends Component {

    state = {
        playersInCollection: [],
        collectionIds: [],
        btnFlag: false
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.btnFlag !== this.state.btnFlag) {
            // get collection  and send it to store
            let partsOfUrl = window.location.pathname.split("/")
            let data = await collection.getOneCollection(partsOfUrl[2]);
            this.props.setCollection(data);

            // get all players in the collection
            let x = await collection.getAllPlayersInCollection(partsOfUrl[2])
            const arr = [];
            for (const key in x) {
                arr.push({
                    name: x[key].name,
                    id: x[key]._id,
                    image: x[key].imgURL,
                })
            }

            // get collection ids in the player 
            let playerCollectionIds = await user.getCollectionIds()

            this.setState({
                collectionIds: playerCollectionIds,
                playersInCollection: arr
            })
        }
    }

    async componentDidMount() {
        // get collection  and send it to store
        let partsOfUrl = window.location.pathname.split("/")
        console.log(partsOfUrl)
        let data = await collection.getOneCollection(partsOfUrl[2]);
        let playerId = localStorage.getItem('playerId');
        if (data.players.includes(playerId)) {
            this.setState({ btnFlag: true })
        }
        this.props.setCollection(data);

        // get all players in the collection
        let x = await collection.getAllPlayersInCollection(partsOfUrl[2])
        const arr = [];
        for (const key in x) {
            arr.push({
                name: x[key].name,
                id: x[key]._id,
                image: x[key].imgURL,
            })
        }

        // get collection ids in the player 
        let playerCollectionIds = await user.getCollectionIds()

        this.setState({
            collectionIds: playerCollectionIds,
            playersInCollection: arr
        })
    }

    deleteCollectionHandler = async (colId) => {
        await collection.deleteCollection(colId)
        let _id = localStorage.getItem('playerId')
        this.props.history.push(`/profile/${_id}`)
    }

    deletePlayerHandler = async (colId, playerId) => {
        await collection.deletePlayerFromCollection(colId, playerId)
    }

    joinHandler = async (collectionId) => {
        await collection.joinCollection(collectionId);
        this.props.history.push(`/collection/${collectionId}`);
        this.setState({ btnFlag: true })
    }

    cancelJoinHandler = async (collectionId) => {
        await collection.cancelJoin(collectionId);
        this.setState({ btnFlag: false })
    }

    inviteHandler() {
        ///get the followers and the following listed
    }

    showProfileHandler = async (id) => {
        this.props.history.push(`/profile/${id}`);
    }

    render() {

        let button = this.state.btnFlag === true ?
            <button
                className="btn btn-danger"
                onClick={() => { this.cancelJoinHandler(this.props.collection._id) }}
            >الغاء الاشتراك</button>
            :
            <button
                className="btn btn-success"
                onClick={() => { this.joinHandler(this.props.collection._id) }}
            >انضم</button>
        if (this.props.collection) {
            let items = this.state.playersInCollection.map(player => (
                <React.Fragment key={player.id}>
                    <Player
                        image={player.image}
                        name={player.name}
                        collectionIds={this.state.collectionIds}
                        collectionId={this.props.collection._id}
                        show={() => this.showProfileHandler(player.id)}
                        delete={() => this.deletePlayerHandler(this.props.collection._id, player.id)}
                    />
                </React.Fragment>
            ));
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
                                        {this.state.collectionIds.includes(this.props.collection._id) ?
                                            <div style={{ display: "inline-block" }}>
                                                <button
                                                    className="btn btn-success"
                                                    onClick={() => this.deleteCollectionHandler(this.props.collection._id)}
                                                >حذف</button>
                                                <button
                                                    className="btn btn-success"
                                                    onClick={() => this.inviteHandler()}
                                                >أضف لاعبين</button>
                                            </div>
                                            : null
                                        }
                                        {button}
                                    </div>
                                    <div className={classes.number}>
                                        <div style={{ color: 'red', fontSize: '26px', fontWeight: 'bold' }}>
                                            {this.props.collection.numberOfPlayers - this.props.collection.players.length}
                                        </div>
                                        <div style={{ fontSize: '9px' }}>متبقى</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card border-black" style={{ marginTop: '2.3rem' }}>
                                    <div className="card-header" style={{
                                        backgroundColor: '#000', color: 'white', fontWeight: 'bold', "textAlign": "right",
                                        fontSize: 20
                                    }}
                                    >المنضمون</div>
                                </div>
                                <div className="card" style={{ "textAlign": "right" }}>
                                    <div className="card-body row no-gutters">
                                        <div className={classes.commentImg}>
                                        </div>
                                        <div className="col md-9">
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                {
                                                    this.props.collection.players.length > 0
                                                        ? items
                                                        : <div style={{ textAlign: 'center', color: 'black', fontSize: '15px' }}> لا يوجد لاعبين بعد</div>
                                                }
                                            </h6>
                                            <span>{this.props.commentDate}</span>
                                            <p className="card-text"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div style={{ paddingTop: "20rem", textAlign: "center" }}>
                    <FontAwesomeIcon style={{ fontSize: "4rem", color: "ECF0F1" }}
                        className="fa-pulse"
                        icon={faSpinner} />
                </div>
            )
        }
    }
}


//mapStateToProps
const mapStateToProps = (state) => {
    return {
        collection: state.collectionReducer.collection,
    }
}

//mapActionsToProps
const mapActionsToProps = (dispatch) => {
    return {
        setCollection: (collection) => dispatch(collectionActions.setCollection(collection)),
    }
}
export default connect(mapStateToProps, mapActionsToProps)(CollectionLayout);