import { combineReducers } from 'redux';
import fishes from "./fishes_reducer";
import locations from "./locations_reducer";


const EntitiesReducer = combineReducers({
    fishes,
    locations
});

export default EntitiesReducer;