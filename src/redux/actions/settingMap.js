export const updateCentreZoomMap = (viewport) => dispatch => {
    dispatch({type: 'UPDATE_CENTRE_ZOOM', payload: viewport});
};