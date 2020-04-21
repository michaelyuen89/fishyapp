import axios from 'axios';

export const fetchAllLocations = () => {
    return axios.get('/api/fishingLocations')
};

export const fetchLocation = id => {
    return axios.get(`/api/fishingLocations/${id}`)
};

export const createLocation = location => {
    return axios.post('/api/fishingLocations', location)
}

export const editLocation = location => {
    return axios.edit('/api/fishingLocations', location)
}

export const deleteLocation = (id) => {
    return axios.delete(`/api/fishingLocation/${id}`)
}
