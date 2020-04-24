import axios from 'axios';


export const fetchUser = id => {
    return axios.get(`/api/users/${id}`)
};

export const editUser = user => {
    return axios.put(`/api/users/${user.id}`, user)
};

export const deleteUser = (id) => {
    return axios.delete(`/api/users/${id}`)
}