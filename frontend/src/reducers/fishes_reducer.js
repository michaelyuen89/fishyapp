import {
    RECEIVE_ALL_FISH,
    RECEIVE_FISH,
    ADD_FISH,
    UPDATE_FISH,
    REMOVE_FISH
} from '../actions/fish_actions';

// const initialState = Object.freeze({
//     allFishes: {},
//     currentLocation: {}
// });

const FishReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_FISH:
            action.fishes.data.forEach(fish => {
                newState[fish._id] = fish;
            });
            // return Object.assign(newState, action.fishes.data)
            return newState;
        case RECEIVE_FISH:
            newState.allLocations[action.fish._id] = action.fish.data;
            return newState;
        case ADD_FISH:
            // // newState.allFishes[action.fish.id] = action.fish.data;
            // // return Object.assign(newState, action.fish.data);
            // debugger
            // return newState.concat([action.fish.data]);
            return Object.assign(newState, { [action.fish.data._id]: action.fish.data });
        // case UPDATE_FISH:
        //     newState.allFishes[action.location.id] = action.fish.data;
        //     return newState;
        case REMOVE_FISH:
            newState = Object.assign({}, state);
            delete newState[action.fish.id];
            return newState;

        default:
            return state;
    }
}

export default FishReducer;