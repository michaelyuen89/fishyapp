import {fetchAllLocations, fetchLocation, createLocation, editLocation, deleteLocation} from '../util/location_api_util';
// import jwt_decode from 'jwt-decode';

export const RECEIVE_ALL_LOCATIONS = "RECEIVE_ALL_LOCATIONS";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const ADD_LOCATION = "ADD_LOCATION"
export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";
// export const CLEAR_lOCATIONS = "CLEAR_LOCATIONS";

export const receiveAllLocations = (locations) => ({
    type: RECEIVE_ALL_LOCATIONS,
    locations
});

export const receivelocation = (location) => ({
    type: RECEIVE_LOCATION,
    location

});

export const addlocation = location => ({
    type: ADD_LOCATION,
    location
});

export const updatelocation = (location) => ({
    type: UPDATE_LOCATION,
    location
});

export const removelocation = (location) => ({
    type: REMOVE_LOCATION,
    location
});

export const clearLocations = () => ({
    type: CLEAR__LOCATIONS
})

export const fetchAllLocations = () => dispatch => (
    APIUtil.fetchAllLocations()
        .then(() => dispatch(receiveAllLocations())
        ), err => (dispatch(receiveErrors(err.response.data))
    )
);

export const fetchLocation = (id) => dispatch => (
    APIUtil.fetchLocation(id)
        .then(location => dispatch(receiveLocation(location))
        ), err => (dispatch(receiveErrors(err.response.data))
    )
);

export const createLocation = (location) => dispatch => (
    APIUtil.createLocation(location)
        .then(location => dispatch(addLocation(Location))
        ), err => (dispatch(receiveErrors(err.response.data))
    )
);

export const editLocation = location => dispatch => (
    APIUtil.editLocation(location)
        .then(location => dispatch(updateLocation(location))
        ), err => (dispatch(receiveErrors(err.response.data))
    )
);

export const deleteLocation = id => dispatch => (
    APIUtil.deleteLocation(id)
        .then(location => dispatch(removeLocation(location))
        ), err => (dispatch(receiveErrors(err.response.data))
    )
);


// export const signup = user => dispatch => (
//     APIUtil.signup(user)
//         .then(() => (dispatch(receiveUserSignIn())
//         ), err => (dispatch(receiveErrors(err.response.data))
//         ))
// );

// export const login = user => dispatch => (
//     APIUtil.login(user)
//         .then(res => {
//             const { token } = res.data;
//             localStorage.setItem('jwtToken', token);
//             APIUtil.setAuthToken(token);
//             const decoded = jwt_decode(token);
//             dispatch(receiveCurrentUser(decoded))
//         })
//         .catch(err => {
//             dispatch(receiveErrors(err.response.data));
//         })
// )

// export const logout = () => dispatch => {
//     localStorage.removeItem('jwtToken')
//     APIUtil.setAuthToken(false)
//     dispatch(logoutUser())
// };