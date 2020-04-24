import {combineReducers} from 'redux';
import fishes from "./fishes_reducer";
import photos from './photos_reducer';
import locations from "./locations_reducer";

// import 

const EntitiesReducer = combineReducers({
  fishes,
  photos,
  locations
});

export default EntitiesReducer;