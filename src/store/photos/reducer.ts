import { PhotosActionType } from "./actionTypes";
import { Action } from "./actions";
import { IPhoto } from "models/photos";

export interface IPhotosState {
  isLoading: boolean;
  errMess: string;
  photos: IPhoto[];
}

const photosInitialState: IPhotosState = {
  isLoading: false,
  errMess: "",
  photos: [],
};

export const Gallery = (state = photosInitialState, action: Action) => {
  switch (action.type) {
    case PhotosActionType.GET_GALLERY:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        photos: action.payload,
      };
    case PhotosActionType.GALLERY_LOADING:
      return { ...state, isLoading: true, errMess: null, photos: [] };
    case PhotosActionType.GALLERY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.errMess,
        photos: [],
      };
    default:
      return state;
  }
};
