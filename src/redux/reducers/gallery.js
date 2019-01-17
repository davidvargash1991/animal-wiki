import * as ActionTypes from '../actionTypes';

export const Gallery = (state = {
        isLoading: true,
        errMess: null,
        photos: []
    }, action) => {
    switch(action.type){
        case ActionTypes.GET_GALLERY:
            return {...state, isLoading: false, errMess : null, photos: action.payload};
        case ActionTypes.GALLERY_LOADING:
            return {...state, isLoading: true, errMess : null, photos: []};
        case ActionTypes.GALLERY_FAILED:
            return {...state, isLoading: false, errMess : action.payload, photos: []};
        default:
            return state;
    }
}