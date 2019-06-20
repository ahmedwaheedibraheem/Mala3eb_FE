import * as collection from "../../API/collection";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../Containers/Navbar/navbar';
import ProfileData from '../../Components/ProfileData/ProfileData';
// import ProfileImage from '../../Components/Profile-image/profileImage';
// import Map from '../Map/map';
import RateView from '../../Containers/Rate/rate'
import * as classes from './layout.module.css'

import * as collectionActions from '../../Store/Collection/collection-actions';
import { async } from "q";


class CollectionLayout extends Component {

    async componentDidMount() {
        let collectionId = this.props.match.params.collectionId;
        let data = await collection.getOneCollection("5d0a8c5530f0343e3cab5341");
        this.props.setCollection(data);

    }



    deleteHandler = async (id) => {

        await collection.deleteCollection(id)
        let _id = localStorage.getItem('playerId')
        this.props.history.push(`/profile/${_id}`)
        this.props.setCollection(null)
        console.log(this.props)
    }


    inviteHandler = () => {
        this.props.history.push("/searchresult")
    }

    joinHandler = async () => {
        let playerId = localStorage.getItem("playerId")
        console.log(playerId)
        await collection.joinCollection("5d0a8c5530f0343e3cab5341", playerId)
    }

    render() {



        console.log(this.props)



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
                                            className="btn btn-danger"
                                            onClick={() => this.deleteHandler("5d0a8c8a30f0343e3cab5342")}
                                        >حذف</button>


                                        <button
                                            className="btn btn-success"
                                            onClick={() => this.joinHandler()}
                                        >انضم</button>

                                        <button
                                            className="btn btn-warning"
                                            onClick={() => this.inviteHandler()}
                                        >دعوة</button>

                                    </div>
                                    <div className={classes.number}>
                                        <div>4</div>
                                        <div>متبقى</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ProfileData>
                                    <ul>
                                        <li><span className="blockquote">الاسم: {this.props.collection.name} </span></li>
                                        <li><span className="blockquote">الوصف: {this.props.collection.desc} </span></li>
                                        <li><span className="blockquote">التاريخ: {this.props.collection.date} </span></li>
                                        <li><span className="blockquote">العنوان: {this.props.collection.address} </span></li>
                                    </ul>
                                </ProfileData>
                            </div>
                        </div>
                        {/* joiner card */}

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card border-black" style={{ marginTop: '2.3rem' }}>
                                    <div className="card-header" style={{
                                        backgroundColor: '#000', color: 'white', fontWeight: 'bold', "textAlign": "right",
                                        fontSize: 20
                                    }}>المنضمون</div>
                                </div>
                                <div className="card" style={{ "textAlign": "right" }}>
                                    <div className="card-body row no-gutters">
                                        <div className={classes.commentImg}>
                                            {/* <img src={commentImg}></img> */}
                                        </div>
                                        <div className="col md-9">
                                            <h5 className="card-title"></h5>
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                <RateView></RateView>
                                            </h6>
                                            <span>{this.props.commentDate}</span>
                                            <p className="card-text"></p>
                                        </div>
                                        <div className="commentBtns">
                                            <button className="btn btn-info" style={{ padding: '10px 20px', marginLeft: '10px' }}>عرض</button>
                                            <button className="btn btn-success" style={{ padding: '10px 20px', marginLeft: '10px' }}>اضافة</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }
        else return null;
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