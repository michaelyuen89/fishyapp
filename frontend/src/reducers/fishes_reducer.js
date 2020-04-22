import {
    RECEIVE_ALL_FISHES,
    RECEIVE_FISH,
    ADD_FISH,
    UPDATE_FISH,
    REMOVE_FISH
} from '../util/fish_api_util';

const initialState = Object.freeze({
    allFishes: {},
    currentLocation: {}
});

const FishReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, initialState);
    switch(action.type) {
        case RECEIVE_ALL_FISHES:
            newState.allFishes = action.fishes.data;
            return newState;
        case RECEIVE_FISH:
            newState.allLocations[action.fish.id] = action.fish.data;
            return newState;
        case ADD_FISH:
            newState.allFishes[action.fish.id] = action.fish.data;
            return newState;
        case UPDATE_FISH:
            newState.allFishes[action.location.id] = action.fish.data;
            return newState;
        case REMOVE_FISH:
            newState = Object.assign({}, state);
            delete newState[action.fish.id];
            return newState;

        default:
            return state;
    }
}

export default FishReducer;