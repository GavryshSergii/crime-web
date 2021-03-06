const initialState = [];

export default function playList(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'FETCH_TRACK_SUCCESS') {
        return action.payload;
    }
    return state;
}