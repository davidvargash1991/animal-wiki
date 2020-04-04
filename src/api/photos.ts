import { AxiosPromise } from "axios";
import { axiosWrapper } from "./index";
import { flickrKey } from "./flickr";

export interface IApiPhotos {
  getPhotos: (name: string) => AxiosPromise<any>;
}

export default {
  getPhotos: (name: string) =>
    axiosWrapper.get(
      `?method=flickr.photos.search&api_key=${flickrKey}&page=1&format=json&content_type =1&per_page=10&nojsoncallback=1&sort=interestingness-asc&text=${name.replace(
        " ",
        "+"
      )}`
    ),
};
