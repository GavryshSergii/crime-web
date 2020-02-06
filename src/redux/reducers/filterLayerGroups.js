const initialState = [];

export default function filterLayerGroups(state = initialState, action) {
    switch (action.type){
        case 'ADD_FILTER_LAYER':
            return  [
                ...state,
                action.payload
            ];
        case 'EDIT_FILTER_LAYER':
            return state.map(filter => {
                                if (filter.nameLayer !== action.payload.nameLayer) {
                                    return filter;
                                }

                                return Object.assign({}, filter, {
                                    hide: !filter.hide
                                })
                            });
        case 'DELETE_FILTER_LAYER':
            return state.filter(filter => filter.nameLayer !== action.payload.nameLayer);
        default:
            return state;
    }
}