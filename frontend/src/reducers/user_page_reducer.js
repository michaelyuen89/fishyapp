import {
    RECEIVE_USER,
    UPDATE_USER,
    REMOVE_USER
} from '../actions/user_page_actions';


const UserPageReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USER:
            newState.allLocations[action.user._id] = action.user.data;
            return newState;
        case UPDATE_USER:
            newState.allFishes[action.location.id] = action.user.data;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            delete newState[action.user.id];
            return newState;

        default:
            return state;
    }
}

export default UserPageReducer;