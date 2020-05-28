import * as LocationAPIUtil from "../util/location_api_util";
import { receiveErrors } from "./session_actions";
// import jwt_decode from 'jwt-decode';

export const RECEIVE_ALL_LOCATIONS = "RECEIVE_ALL_LOCATIONS";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const ADD_LOCATION = "ADD_LOCATION";
export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";
export const CLEAR_LOCATIONS = "CLEAR_LOCATIONS";

export const receiveAllLocations = (locations) => ({
  type: RECEIVE_ALL_LOCATIONS,
  locations,
});

export const receiveLocation = (location) => ({
  type: RECEIVE_LOCATION,
  location,
});

export const addLocation = (location) => ({
  type: ADD_LOCATION,
  location,
});

export const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  location,
});

export const removeLocation = (location) => ({
  type: REMOVE_LOCATION,
  location,
});

export const clearLocations = () => ({
  type: CLEAR_LOCATIONS,
});
//     type: CLEAR_LOCATIONS
// })

// export const fetchAllLocations = () => dispatch => (
//     LocationAPIUtil.fetchAllLocations()
//         .then(locations => dispatch(receiveAllLocations(locations))
//         // ).catch(err => (dispatch(receiveErrors(err.response.data))
//     )
// );

// export const fetchLocation = (id) => dispatch => (
//     LocationAPIUtil.fetchLocation(id)
//         .then(location => dispatch(receiveLocation(location))
//         // ).catch(err => (dispatch(receiveErrors(err.response.data))
//     )
// );

// export const createLocation = (location) => dispatch => (
//     LocationAPIUtil.createLocation(location)
//         .then(location => dispatch(addLocation(location))
//         ).catch(err => (dispatch(receiveErrors(err.response.data))
//     ))
// );

// export const editLocation = location => dispatch => (
//     LocationAPIUtil.editLocation(location)
//         .then(location => dispatch(updateLocation(location))
//         ).catch(err => (dispatch(receiveErrors(err.response.data))
//     ))
// );

// export const deleteLocation = id => dispatch => (
//     LocationAPIUtil.deleteLocation(id)
//         .then(location => dispatch(removeLocation(location))
//         ).catch(err => (dispatch(receiveErrors(err.response.data))
//     ))
// );


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

export const fetchAllLocations = () => (dispatch) =>
  LocationAPIUtil.fetchAllLocations().then(
    (locations) => dispatch(receiveAllLocations(locations))
    // ).catch(err => (dispatch(receiveErrors(err.response.data))
  );

export const fetchLocation = (id) => (dispatch) =>
  LocationAPIUtil.fetchLocation(id).then(
    (location) => dispatch(receiveLocation(location))
    // ).catch(err => (dispatch(receiveErrors(err.response.data))
  );

export const createLocation = (location) => (dispatch) => (
  LocationAPIUtil.createLocation(location)
    .then(location => dispatch(addLocation(location))
    ).catch(err => { 
      dispatch(receiveErrors(err.response.data))
    })
  );

export const editLocation = (location) => (dispatch) => (
  LocationAPIUtil.editLocation(location)
    .then((location) => dispatch(updateLocation(location)))
    .catch(err => {
      debugger
    })
  );

export const deleteLocation = (id) => (dispatch) =>
  LocationAPIUtil.deleteLocation(id)
    .then(location => dispatch(removeLocation(location))
  );
