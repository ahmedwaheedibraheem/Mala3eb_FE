import * as collection from "../../API/collection";
import * as user from "../../API/user"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../Containers/Navbar/navbar';
import * as classes from './layout.module.css'
import Player from "./collectionPlayers/collectionPlayers"
import * as collectionActions from '../../Store/Collection/collection-actions';

class CollectionLayout extends Component {

    state = {
        players: [],
        collectionIds: []
    }

    async componentDidMount() {
        let partsOfUrl = window.location.pathname.split("/")
        let data = await collection.getOneCollection(partsOfUrl[2]);
        this.props.setCollection(data);
        let collectionIds = await user.getCollectionIds()
        const x = await collection.getAllPlayersInCollection(partsOfUrl[2])
        const arr = [];
        for (const key in x) {
            arr.push({
                name: x[key].name,
                id: x[key]._id,
                image: x[key].imgURL,
            })
        }
        this.setState({
            players: arr,
            collectionIds: collectionIds
        })
    }

    deleteCollectionHandler = async (colId) => {
        await collection.deleteCollection(colId)
        let _id = localStorage.getItem('playerId')
        this.props.history.push(`/profile/${_id}`)
    }

    deletePlayerHandler = async (colId, playerId) => {
        await collection.deletePlayerFromCollection(colId, playerId)
        window.location.reload()
    }

    getPlayersInCollectionHandler = async (colId) => {
        let playersInCollection = await collection.getAllPlayersInCollection(colId)
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
        if (this.props.collection) {
            let items = this.state.players.map(player => (
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
                                        {
                                            this.state.collectionIds.includes(this.props.collection._id)
                                                ?
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
                                                :
                                                null
                                        }
                                        {this.props.collection.players.includes(localStorage.getItem('playerId'))
                                            ?
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => this.cancelJoinHandler(this.props.collection._id)}
                                            >الغاء الاشتراك</button>
                                            :
                                            <button
                                                className="btn btn-success"
                                                onClick={() => this.joinHandler(this.props.collection._id)}
                                            >انضم</button>}
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
                                        onClick={() => this.getPlayersInCollectionHandler(this.props.collection._id)}
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
                                                        : <div style={{ textAlign: 'center', color: 'black', fontSize: '15px' }}> لا يوجد لاعبين بعد</div>}
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
        }
        else return <h1>page not found</h1>;
    }
}

//mapStateToProps
const mapStateToProps = (state) => {
    return {
        collection: state.collectionReducer.collection,
        // user: state.userReducer.user
    }
}

//mapActionsToProps
const mapActionsToProps = (dispatch) => {
    return {
        setCollection: (collection) => dispatch(collectionActions.setCollection(collection))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(CollectionLayout);