import axios from 'axios';

export const fetchAllFishes = () => {
    return axios.get('/api/fishes')
};

export const fetchFish = id => {
    return axios.get(`/api/fishes/${id}`)
};

export const createFish = fish => {
    return axios.post('/api/fishes', fish)
}

export const editFish = fish => {
    return axios.put(`/api/fishes/${fish.id}`, fish)
};

export const deleteFish = (id) => {
    return axios.delete(`/api/locations/${id}`)
}