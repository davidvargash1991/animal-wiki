import axios from "axios";
import photos, { IApiPhotos } from "./photos";

export const axiosWrapper = axios.create({
  baseURL: "https://api.flickr.com/services/rest/",
});

export interface IApiServices {
  photos: IApiPhotos;
}

export default {
  photos,
};
