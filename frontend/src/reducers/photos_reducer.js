import { RECEIVE_PHOTOS, RECEIVE_USER_PHOTOS, RECEIVE_FISH_PHOTOS, RECEIVE_NEW_PHOTO } from '../actions/document_actions';

const PhotosReducer = (state = { all: {}, user: {}, fish: {}, new: undefined}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_PHOTOS:
            newState.all = {};
            action.photos.data.forEach(photo => {
                newState.all[photo._id] = photo;
            });
            return newState;
        case RECEIVE_USER_PHOTOS:
            newState.user = {}
            action.photos.data.forEach(photo => {
                newState.user[photo._id] = photo;
            });
            return newState;
        case RECEIVE_FISH_PHOTOS:
            // debugger
            newState.fish = {}
            action.photos.data.forEach(photo => {
                newState.fish[photo._id] = photo;
            });
            // debugger
            return newState;
        case RECEIVE_NEW_PHOTO:
            newState.new = action.photo.data;
            return newState;
        default:
            return state;
    }
}

export default PhotosReducer;