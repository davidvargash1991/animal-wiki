import * as ActionTypes from './actionTypes';
import animalData from '../animals.json';

export const fetchAnimals = () => ({
    type: ActionTypes.GET_ANIMALS,
    payload: animalData
});