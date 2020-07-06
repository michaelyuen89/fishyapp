import axios from 'axios';

export const fetchAllPhotos = () => {
    return axios.get('/api/document');
};

export const fetchPhoto = id => {
    return axios.get(`/api/document/${id}`);
};

export const uploadPhoto = data => {
    return axios.post('/api/document/upload', data);
};

export const fetchPhotosByUser = id => {
    return axios.get(`/api/document/user/${id}`);
};

export const fetchFishPhotos = id => {
    return axios.get(`/api/document/fish/${id}`);
};

export const deleteFishPhoto = id => {
    return axios.delete(`/api/document/${id}`);
};