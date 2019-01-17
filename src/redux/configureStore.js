import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Animals } from './reducers/animals';
import { Gallery } from './reducers/gallery';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            animals : Animals,
            gallery: Gallery
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}