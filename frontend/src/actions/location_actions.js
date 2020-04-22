import * as APIUtil from '../util/location_api_util';
import { RECEIVE_SESSION_ERRORS } from './session_actions';
// import jwt_decode from 'jwt-decode';

export const RECEIVE_ALL_LOCATIONS = "RECEIVE_ALL_LOCATIONS";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const ADD_LOCATION = "ADD_LOCATION";
export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";
export const CLEAR_LOCATIONS = "CLEAR_LOCATIONS";

export const receiveAllLocations = (locations) => ({
    type: RECEIVE_ALL_LOCATIONS,
    locations
});

export const receiveLocation = (location) => ({
    type: RECEIVE_LOCATION,
    location

});

export const addLocation = location => ({
    type: ADD_LOCATION,
    location
});

export const updateLocation = (location) => ({
    type: UPDATE_LOCATION,
    location
});

export const receiveErrors = errors => ({
    type:RECEIVE_SESSION_ERRORS,
    errors
})

export const removeLocation = (location) => ({
    type: REMOVE_LOCATION,
    location
});

export const clearLocations = () => ({
    type: CLEAR_LOCATIONS
})

export const fetchAllLocations = () => dispatch => (
    APIUtil.fetchAllLocations()
        .then(() => dispatch(receiveAllLocations())
        ).catch(err => (dispatch(receiveErrors(err.response.data))
    ))
);

export const fetchLocation = (id) => dispatch => (
    APIUtil.fetchLocation(id)
        .then(location => dispatch(receiveLocation(location))
        ).catch(err => (dispatch(receiveErrors(err.response.data))
    ))
);

export const createLocation = (location) => dispatch => (
    APIUtil.createLocation(location)
        .then(location => dispatch(addLocation(location))
        ).catch(err => (dispatch(receiveErrors(err.response.data))
    ))
);

export const editLocation = location => dispatch => (
    APIUtil.editLocation(location)
        .then(location => dispatch(updateLocation(location))
        ).catch(err => (dispatch(receiveErrors(err.response.data))
    ))
);

export const deleteLocation = id => dispatch => (
    APIUtil.deleteLocation(id)
        .then(location => dispatch(removeLocation(location))
        ).catch(err => (dispatch(receiveErrors(err.response.data))
    ))
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