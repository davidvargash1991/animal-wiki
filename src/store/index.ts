import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import apiService from "../api";

import { IPhotosState, Gallery } from "./photos/reducer";
import { IAnimalsState, Animals } from "./animals/reducer";

export interface IAppState {
  Gallery: IPhotosState;
  Animals: IAnimalsState;
}

const appReducer = combineReducers({ Gallery, Animals });

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(apiService)))
);

export const makeStore = (initialState: any, options: any) => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(apiService)))
  );
};
