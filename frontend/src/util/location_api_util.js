import axios from 'axios';

export const fetchAllLocations = () => {
    debugger;
    return axios.get('/api/locations')
};

export const fetchLocation = id => {
    return axios.get(`/api/locations/${id}`)
};

export const createLocation = location => {
    return axios.post('/api/locations', location)
}

export const editLocation = location => {
    return axios.edit(`/api/locations/${location.id}`, location)
}

export const deleteLocation = (id) => {
    return axios.delete(`/api/location/${id}`)
}
