import * as FishAPIUtil from '../util/fish_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ALL_FISH = "RECEIVE_ALL_FISH";
export const RECEIVE_FISH = "RECEIVE_FISH";
export const ADD_FISH = "ADD_FISH";
export const UPDATE_FISH = "UPDATE_FISH";
export const REMOVE_FISH = "REMOVE_FISH";

export const receiveAllFish = (fishes) => ({
    type: RECEIVE_ALL_FISH,
    fishes
});

export const receiveFish = (fish) => ({
    type: RECEIVE_FISH,
    fish
});

export const addFish = fish => ({
    type: ADD_FISH,
    fish
});

export const updateFish = (fish) => ({
    type: UPDATE_FISH,
    fish
});

export const removeFish = (fish) => ({
    type: REMOVE_FISH,
    fish
});

export const fetchAllFishes = () => dispatch => (
    FishAPIUtil.fetchAllFishes()
        .then((fishes) => dispatch(receiveAllFish(fishes))
    )
);

export const fetchFish = id => dispatch => (
    FishAPIUtil.fetchFish(id)
        .then(fish => dispatch(receiveFish(fish))
        )
);

export const createFish = fish => dispatch => (
    FishAPIUtil.createFish(fish)
        .then(fish => dispatch(addFish(fish))
        ).catch(err => {
            debugger
            dispatch(receiveErrors(err.response.data))
        })
);

export const editFish = fish => dispatch => (
    FishAPIUtil.editFish(fish)
        .then(fish => dispatch(updateFish(fish))
        )
);

export const deleteFish = id => dispatch => (
    FishAPIUtil.deleteFish(id)
        .then(fish => dispatch(removeFish(fish))
        )
);