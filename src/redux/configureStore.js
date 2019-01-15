import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Animals } from './reducers/animals';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            animals : Animals
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}