import React, { Component } from 'react';
import { connect } from 'react-redux';
import PitchItem from '../../Components/Pitch-Item/pitchitem';
import * as pitchAPI from '../../API/pitch';
import * as pitchActions from '../../Store/Pitch/pitch-actions';
import Navbar from '../Navbar/navbar';
import * as classes from './pitchList.module.css';


class PitchList extends Component {

    async componentDidMount() {
        let pitches = await pitchAPI.getAllPitches();
        this.props.setPitches(pitches);
    }

    showPitch(id) {
        this.props.history.push(`/pitch/${id}`);
    }

    render() {
        if (this.props.pitches) {
            return (
                <>
                    <Navbar></Navbar>
                    <div className={classes.bgimg}>
                        <div className="row no-gutters">
                            <div className="card border-dark" style={{ marginTop: '1rem', width: '65%', margin: '1.5rem auto' }}>
                                <div className="card-header" style={{
                                    backgroundColor: '#000', color: 'white', fontWeight: 'bold',
                                    fontSize: 20, direction: 'rtl', textAlign: 'right'
                                }}>الملاعب </div>
                                <div className="card-body">
                                    {this.props.pitches.map((pitch) => {
                                        return (
                                            <PitchItem
                                                key={pitch._id}
                                                name={pitch.name}
                                                address={pitch.address}
                                                image={pitch.imgURL}
                                                showPitch={() => { this.showPitch(pitch._id) }}
                                            >
                                            </PitchItem>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
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