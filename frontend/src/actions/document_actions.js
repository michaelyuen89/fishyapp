import * as PhotoAPIUtil from '../util/document_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_USER_PHOTOS = 'RECEIVE_USER_PHOTOS';
export const RECEIVE_FISH_PHOTOS = "RECEIVE_FISH_PHOTOS";
export const RECEIVE_NEW_PHOTO = "RECEIVE_NEW_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

export const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});

export const receiveUserPhotos = photos => ({
    type: RECEIVE_USER_PHOTOS,
    photos
});

export const receiveFishPhotos = photos => ({
    type: RECEIVE_FISH_PHOTOS,
    photos
});

export const receiveNewPhoto = photo => ({
    type: RECEIVE_NEW_PHOTO,
    photo
});

export const removePhoto = photoId => ({
    type: REMOVE_PHOTO,
    photoId
});

export const deletePhoto = (photoId) => (dispatch) => (
    PhotoAPIUtil.deleteFishPhoto(photoId)
        .then(() => dispatch(removePhoto(photoId)))
        .catch((err) => console.log(err))
);

export const fetchPhotos = () => dispatch => (
    PhotoAPIUtil.fetchAllPhotos()
        .then(photos => dispatch(receivePhotos(photos)))
        .catch(err => console.log(err))
);

export const fetchUserPhotos = id => dispatch => (
    PhotoAPIUtil.fetchPhotosByUser(id)
        .then(photos => dispatch(receiveUserPhotos(photos)))
        .catch(err => console.log(err))
);

export const fetchFishPhotos = id => dispatch => (
    PhotoAPIUtil.fetchFishPhotos(id)
        .then(photos => dispatch(receiveFishPhotos(photos)))
        .catch(err =>console.log(err))
);

export const uploadPhoto = data => dispatch => (
    PhotoAPIUtil.uploadPhoto(data)
        .then(photo => dispatch(receiveNewPhoto(photo)))
        .catch(err => console.log(err))
);

