import * as ActionTypes from '../actionTypes';

export const Animals = (state = { animals: [], search: []}, action) => {
    switch(action.type){
        case ActionTypes.GET_ANIMALS:
            return {...state, animals: action.payload};
        default:
            return state;
    }    
}