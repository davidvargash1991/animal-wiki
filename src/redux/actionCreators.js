import * as ActionTypes from './actionTypes';
import animalData from '../animals.json';
import { flickrKey } from "../const/keys";
import { flickrBaseUrl } from "../const/api";

export const fetchAnimals = () => ({
  type: ActionTypes.GET_ANIMALS,
  payload: animalData
});

export const fetchGallery = (animalName) => (dispatch) => {
  dispatch(galleryLoading(true));

  return fetch(flickrBaseUrl + '&api_key='+flickrKey+'&page=1'+
                        '&format=json&content_type =1&per_page=10&nojsoncallback=1&text='+
                        animalName.replace(' ','+'))
  .then(response => { 
    if (response.ok){
      return response;
    }
    else{
      var error = new Error('Error ' + response.status + ':' + response.statusText);
      error.response = response;
      throw error;
    }
  },
  error => {
    var errmess = new Error(error.message);
    throw errmess;
  })    
  .then(response => response.json())
  .then(photos => dispatch(addGallery(getPhotos(photos))))
  .catch(error => dispatch(galleryFailed(error.message)));
}

export const galleryLoading = () => ({
  type: ActionTypes.GALLERY_LOADING
});

export const galleryFailed = (errmess) => ({
  type: ActionTypes.GALLERY_FAILED,
  payload: errmess
});

export const addGallery = (gallery) => ({
  type : ActionTypes.GET_GALLERY,
  payload: gallery
});

function getPhotos(flickrPhotos) {
  let processedPhotos = [];
  flickrPhotos.photos.photo.map((photo) => {
    const processedPhoto = {
      id: photo.id,
      title: photo.title,
      url: `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    };
    processedPhotos.push(processedPhoto); 
  });
  return processedPhotos;
}