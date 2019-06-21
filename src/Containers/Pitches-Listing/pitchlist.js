import React, { Component } from 'react';
import { connect } from 'react-redux';
import PitchItem from '../../Components/Pitch-Item/pitchitem';
import * as pitchAPI from '../../API/pitch';
import * as pitchActions from '../../Store/Pitch/pitch-actions';


class PitchList extends Component {

    async componentDidMount() {
        let pitches = await pitchAPI.getAllPitches();
        this.props.setPitches(pitches);
    }

    showPitch(id){
        this.props.history.push(`/pitch/${id}`);
    }

    render() {
        if (this.props.pitches) {
            return (
                <>
                    <div className="card-header" style={{
                        backgroundColor: '#000', color: 'white', fontWeight: 'bold',
                        fontSize: 20
                    }}>الملاعب
                    {this.props.pitches.map((pitch) => {
                            return (
                                <PitchItem
                                    key={pitch._id}
                                    name={pitch.name}
                                    address={pitch.address}
                                    image={pitch.imgURL}
                                    showPitch={()=>{this.showPitch(pitch._id)}}
                                >
                                </PitchItem>
                            )
                        })}
                    </div>
                </>
            )
        }
        else return null;
    }
}

const mapStateToProps = (state) => {
    return {
        pitches: state.pitchReducer.pitches
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        setPitches: (pitches) => dispatch(pitchActions.setPitches(pitches))
    }
}



export default connect(mapStateToProps, mapActionsToProps)(PitchList);