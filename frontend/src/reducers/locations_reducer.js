import {
    RECEIVE_ALL_LOCATIONS, 
    RECEIVE_LOCATION, 
    ADD_LOCATION, 
    UPDATE_LOCATION,
    REMOVE_LOCATION
} from '../actions/location_actions';

const initialState = Object.freeze({
    allLocations: {},
    currentLocation: {}
})

const LocationsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, initialState);
    switch(action.type) {
        case RECEIVE_ALL_LOCATIONS:
            newState.allLocations = action.locations.data;
            return newState;
        case RECEIVE_LOCATION:
            newState.allLocations[action.location.id] = action.location.data;
            newState.currentLocation = action.location;
            return newState;
        case ADD_LOCATION:
            newState.allLocations[action.location.id] = action.location.data;
            newState.currentLocation = action.location;
            return newState;
        case UPDATE_LOCATION:
            newState.allLocations[action.location.id] = action.location.data

        case REMOVE_LOCATION:
            
    }
}

export default LocationsReducer;
