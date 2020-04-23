import {
    RECEIVE_ALL_LOCATIONS, 
    RECEIVE_LOCATION, 
    ADD_LOCATION, 
    UPDATE_LOCATION,
    REMOVE_LOCATION
} from '../actions/location_actions';

// const initialState = Object.freeze({
//     allLocations: {},
//     currentLocation: {}
// })

const LocationsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_LOCATIONS:
            debugger;
            action.locations.data.forEach(location => {
                newState[location._id] = location
            });
            return newState;
        case RECEIVE_LOCATION:
            debugger;
            newState.allLocations[action.location._id] = action.location.data;
            // newState.currentLocation = action.location;
            return newState;
        case ADD_LOCATION:
            // newState.allLocations[action.location.id] = action.location.data;
            // newState.currentLocation = action.location;
            // return newState;
            return Object.assign(newState, {[action.location.data._id]: action.location.data})
        case REMOVE_LOCATION:
            newState = Object.assign({}, state);
            delete newState[action.location.id];
            return newState;
        default:
            return state;
    }
}

export default LocationsReducer;
