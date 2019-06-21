import * as collection from "../../API/collection";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../Containers/Navbar/navbar';
import ProfileData from '../../Components/ProfileData/ProfileData';
import RateView from '../../Containers/Rate/rate'
import * as classes from './layout.module.css'

import * as collectionActions from '../../Store/Collection/collection-actions';


class CollectionLayout extends Component {

    async componentDidMount() {
        let collectionId = this.props.match.params.collectionId;
        let data = await collection.getOneCollection(collectionId);
        this.props.setCollection(data);
    }
    render() {
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
                                            <button className="btn btn-danger" >حذف</button>
                                            <button className="btn btn-success">انضم</button>
                                            <button className="btn btn-warning">دعوة</button>
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
        else return <h3>404 no page</h3>
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