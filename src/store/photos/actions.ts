import { Dispatch } from "redux";
import { IAppState } from "../";
import { PhotosActionType } from "./actionTypes";
import { IApiServices } from "../../api";
import { IPhoto } from "models/photos";

interface IFetchingGallery {
  type: PhotosActionType.GALLERY_LOADING;
}

interface IFetchingGallerySuccess {
  type: PhotosActionType.GET_GALLERY;
  payload: IPayload;
}

interface IFetchingGalleryError {
  type: PhotosActionType.GALLERY_FAILED;
  errMess: string;
}

export type Action =
  | IFetchingGallery
  | IFetchingGallerySuccess
  | IFetchingGalleryError;

interface IPayload {
  albumContent: IPhoto[];
}

const fetchingGallery = () => ({
  type: PhotosActionType.GALLERY_LOADING,
});

const fetchingGallerySuccess = (payload: IPayload) => ({
  type: PhotosActionType.GET_GALLERY,
  payload,
});

const fetchingGalleryError = (errMess: string) => ({
  type: PhotosActionType.GALLERY_FAILED,
  errMess,
});

export const getGallery = (name: string) => {
  return async (
    dispatch: Dispatch,
    getState: () => IAppState,
    apiService: IApiServices
  ) => {
    dispatch(fetchingGallery());

    try {
      const response = await apiService.photos.getPhotos(name);
      if (response.data.stat === "fail") {
        dispatch(
          fetchingGalleryError(
            "There was an error fetching the Gallery, Please try again later"
          )
        );
      } else {
        const data: IPayload = response.data.photos.photo;
        dispatch(fetchingGallerySuccess(data));
      }
    } catch (error) {
      dispatch(
        fetchingGalleryError(
          "There was an error fetching the Gallery, Please try again later"
        )
      );
    }
  };
};
