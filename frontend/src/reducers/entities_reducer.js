import {combineReducers} from 'redux';
import fishes from "./fishes_reducer";
import photos from './photos_reducer';

// import 

const EntitiesReducer = combineReducers({
  fishes,
  photos,
});

export default EntitiesReducer;