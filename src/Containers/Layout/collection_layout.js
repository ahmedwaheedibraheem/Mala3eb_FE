// import * as PitchAPI from "../../API/pitch";
// import * as pitchActions from '../../Store/Pitch/pitch-actions';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Navbar from '../../Containers/Navbar/navbar';
import Radar from '../../Components/Radar-chart/radar-chart';
import ProfileData from '../../Components/ProfileData/ProfileData';
import ProfileImage from '../../Components/Profile-image/profileImage';
import Map from '../Map/map';
import * as classes from './layout.module.css'

class CollectionLayout extends Component {

    async componentDidMount() {
        let pitchId = this.props.match.params.pitchId;
        let data = await PitchAPI.getData(pitchId);
        this.props.setPitch(data);
    }

    render() {

        let labels = ['الاضاءة', 'الأرضية', 'البطولات', 'البطولات', 'البطولات'];

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
                        <div className="col-lg-6">
                            <ProfileImage
                                image={this.props.pitch.imgURL} name={this.props.pitch.name}
                            />
                        </div>
                        <div className="col-lg-6">
                            <Radar
                                labels={labels}
                                label='التقييم'
                                data={this.props.pitch.specs} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ProfileData>
                                <ul>
                                    <li><span className="blockquote">رقم الموبايل: {this.props.pitch.mobileNo} </span></li>
                                    <li><span className="blockquote">الاضاءة: {this.props.pitch.lights ? 'يوجد' : 'لا يوجد'} </span></li>
                                    <li><span className="blockquote"> سعر الساعه (نهار):{this.props.pitch.rate}</span></li>

                                    <li><span className="blockquote">الطول: {this.props.pitch.pitchLength} </span></li>
                                    <li><span className="blockquote">العرض: {this.props.pitch.pitchWidth} </span></li>
                                    <li><span className="blockquote">غرف تغيير الملابس: {this.props.pitch.changeRoom ? 'يوجد' : 'لا يوجد'} </span></li>
                                    <li><span className="blockquote">غرف الاستحمام: {this.props.pitch.showerRoom ? 'يوجد' : 'لا يوجد'} </span></li>
                                </ul>
                            </ProfileData>
                        </div>
                    </div>
                    <div className="row">
                        <Map />
                    </div>
                </div>
            </div>
        );
    }

}

// const mapStateToProps = (state) => {
//     return {
//         pitch: state.pitchReducer.pitch
//     }
// }

// const mapActionsToProps = (dispatch) => {
//     return {
//         setPitch: (pitch) => dispatch(pitchActions.setPitch(pitch))
//     }
// }

// export default connect(mapStateToProps, mapActionsToProps)(collectionLayout);

export default CollectionLayout
