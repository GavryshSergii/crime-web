const initialState = [
    'My home play list',
    'My work play list'
];

export default function playList(state = initialState, action) {
    if (action.type === 'ADD_PLAYLIST') {
        return state;
    } else if (action.type === 'DELETE_PLAYLIST') {
        return state;
    }
    return state;
}