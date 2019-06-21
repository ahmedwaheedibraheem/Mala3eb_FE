import React, { Component } from 'react';
import * as playerAPI from '../../API/player';
import * as pitchAPI from '../../API/pitch';
import * as collectionAPI from '../../API/collection';
import Spinner from '../../Components/Spinner/spinner';
import Mapping from '../../Components/Mapping/mapping';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../Theme/bootstrap.css';

class EntitiesPage extends Component {
    state = {
        player: null,
        pitchArr: null,
        collectionArr: null,
        loading: true,
    };

    // componentDidMound
    async componentDidMount() {
        try {
            if (this.props.user.playerId) {
                const player = await playerAPI.getPlayerData(this.props.user.playerId);
                this.setState({ player: player });
            };
            if (this.props.user.pitchId && this.props.user.pitchId.length !== 0) {
                const pitchArr = [];
                this.props.user.pitchId.forEach(id => {
                    let pitch = pitchAPI.getData(id);
                    pitchArr.push(pitch);
                });
                this.setState({ pitchArr: await Promise.all(pitchArr) });
            };
            if (this.props.user.collectionId && this.props.user.collectionId.length !== 0) {
                const collectionArr = [];
                this.props.user.collectionId.forEach(id => {
                    let collection = collectionAPI.getOneCollection(id);
                    collectionArr.push(collection);
                });
                this.setState({ collectionArr: await Promise.all(collectionArr) });
            };
            this.setState({ loading: false });
        } catch (error) {
            //there shall be a real error handling here ...
            console.log(error);
        }
    };

    render() {
        let entitiesPage;
        if (this.state.loading) {
            entitiesPage = Spinner;
        } else {
            entitiesPage = <div>
                <Mapping
                    name='اللاعب'
                    component='profile'
                    data={[this.state.player]} />
                <Mapping
                    name='الملاعب'
                    component='pitch'
                    data={this.state.pitchArr} />
                <Mapping
                    name='التجمعات'
                    component='collection'
                    data={this.state.collectionArr} />
            </div>
        }
        return (<div className='container' style={{
            textAlign: 'right',
            paddingTop: '1.5rem'
        }}>
            <legend>الكيانات</legend>
            <hr className='my-4' />
            {entitiesPage}
        </div>);
    };
};

// Map state to props
const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
};

export default connect(mapStateToProps, null)(EntitiesPage);