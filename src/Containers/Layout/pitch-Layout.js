import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PitchAPI from "../../API/pitch";
import * as pitchActions from '../../Store/Pitch/pitch-actions';
import Navbar from '../../Containers/Navbar/navbar';
import ProfileData from '../../Components/ProfileData/ProfileData';
import * as classes from './layout.module.css';
import SliderImages from '../../Components/Slider-Image/slider';
import PitchComments from '../Comments-Pitch/comments-pitch';
import CoverImage from '../Cover-Image/cover-Image';
import DemoApp from '../Calender/calender';
import PitchBooking from '../Pitch-Booking/pitchBooking';
import BookingList from '../Bookings-List/bookingsList';

class PitchLayout extends Component {

    async componentDidMount() {
        let pitchId = this.props.match.params.pitchId;
        let data = await PitchAPI.getData(pitchId);
        this.props.setPitch(data);
    }

    render() {
        let labels = ['الاضاءة', 'الأرضية', 'البطولات'];
        if (this.props.pitch) {
            let priceWithLights = this.props.pitch.lights ? <li><span className="blockquote">سعر الساعه (ليل):{this.props.pitch.nightRate}</span></li> : null;
            return (

                <div className={classes.bgimg}>
                    <div className="container-fluied">
                        <div className="row no-gutters">
                            <div className="col-md-12">
                                <Navbar />
                            </div>
                        </div>
                    </div>
                    <div className="container" className={classes.layout}>
                        <div className="row">
                            <CoverImage
                                coverImage={this.props.pitch.coverImage}
                                profileImage={this.props.pitch.imgURL}
                                name={this.props.pitch.name}
                            ></CoverImage>
                        </div>
                        <div className="row">
                            <div style={{ width: '100%' }}>
                                <ProfileData>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul>
                                                <label>رقم الموبايل :</label> <li><span className="blockquote">{this.props.pitch.mobileNo} </span></li>
                                                <label>الاضاءة:</label><li><span className="blockquote">{this.props.pitch.lights ? 'يوجد' : 'لا يوجد'} </span></li>
                                                <label>سعر الساعه (نهار):</label><li><span className="blockquote">{this.props.pitch.rate}</span></li>
                                                {priceWithLights}
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul>
                                                <label>الطول:</label> <li><span className="blockquote"> {this.props.pitch.pitchLength} </span></li>
                                                <label>العرض:</label><li><span className="blockquote">{this.props.pitch.pitchWidth} </span></li>
                                                <label>غرف تغيير الملابس:</label><li><span className="blockquote">{this.props.pitch.changeRoom ? 'يوجد' : 'لا يوجد'} </span></li>
                                                <label>غرف الاستحمام:</label><li><span className="blockquote">{this.props.pitch.showerRoom ? 'يوجد' : 'لا يوجد'} </span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </ProfileData>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card border-black" style={{ marginTop: '2.3rem',width:'100%' }}>
                                <div className={classes.profileData}>
                                    <div className="card-header" style={{
                                        backgroundColor: '#000', color: 'white', fontWeight: 'bold',
                                        fontSize: 20,direction:'rtl',textAlign:'right'
                                    }}>مواعيد الحجز</div>
                                    <div className="card-body">
                                      <PitchBooking
                                      id ={this.props.pitch._id}
                                      bookings={this.props.pitch.bookings}
                                      ></PitchBooking>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="card border-black" style={{ marginTop: '2.3rem',width:'100%' }}>
                                <div className={classes.profileData}>
                                    <div className="card-header" style={{
                                        backgroundColor: '#000', color: 'white', fontWeight: 'bold',
                                        fontSize: 20,direction:'rtl',textAlign:'right'
                                    }}>الحجوزات</div>
                                    <div className="card-body" style={{ height:'20rem',overflow:'scroll'}}>
                                     <BookingList
                                     id={this.props.pitch._id}
                                     pitch={this.props.pitch}
                                     ></BookingList>
                                    </div>
                                   
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="card border-dark" style={{ marginTop: '1rem', width: '100%' }}>
                                <div className="card-header" style={{
                                    backgroundColor: '#000', color: 'white', fontWeight: 'bold',
                                    fontSize: 20, direction: 'rtl', textAlign: 'right'
                                }}>صور الملعب</div>
                                <div className="card-body">
                                    <SliderImages images={this.props.pitch.imgsURL}></SliderImages>
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
                                    <PitchComments pitchId={this.props.match.params.pitchId}></PitchComments>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else
            return null;
    }
}

const mapStateToProps = (state) => {
    return {
        pitch: state.pitchReducer.pitch
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        setPitch: (pitch) => dispatch(pitchActions.setPitch(pitch))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(PitchLayout);