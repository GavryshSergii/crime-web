import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';

import MapPage from '../MapPage';

// import {getTracks} from '../../redux/actions/tracks';
import {getLayerGroups, getCivilEventsLayer} from '../../redux/actions/layerGroups';

class App extends Component {
    addTrack() {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    findTrack() {
        this.props.onFindTrack(this.searchInput.value);
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <button onClick={this.props.onGetLayerGroups}>Get LayerGroups</button>
                    </div>
                    <div>
                        <button onClick={this.props.onGetCivilEventsLayer}>Get CivilEventsLayer</button>
                    </div>
                    <div>
                        <button onClick={this.props.onClearLayerGroups}>Clear LayerGroups</button>
                    </div>
                </div>
                <MapPage/>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
    }),
    dispatch => ({
        // onAddTrack: (name) => {
        //     const payload = {
        //         id: Date.now().toString(),
        //         name
        //     };
        //     dispatch({type: 'ADD_TRACK', payload});
        // },
        // onFindTrack: (name) => {
        //     dispatch({type: 'FIND_TRACK', payload: name})
        // },
        // onGetTracks: () => {
        //     dispatch(getTracks());
        // },
        onGetCivilEventsLayer: () => {
            dispatch(getCivilEventsLayer());
        },
        onGetLayerGroups: () => {
            dispatch(getLayerGroups());
        },
        onClearLayerGroups: () => {
            dispatch({type: 'CLEAR_LAYER_GROUPS'})
        }
    })
)(App);
