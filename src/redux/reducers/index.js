import {combineReducers} from 'redux';
// import {routeReducer} from 'react-router-redux';

import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTracks';
import layerGroups from './layerGroups';
import settingMap from './settingMap';
import filterLayerGroupe from './filterLayerGroups';

export default combineReducers({
    // routing: routeReducer,
    tracks,
    playlists,
    filterTracks,
    layerGroups,
    settingMap,
    filterLayerGroupe
});