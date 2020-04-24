import {combineReducers} from 'redux';
import fishes from "./fishes_reducer";
import users from "./users_reducer"

// import 

const EntitiesReducer = combineReducers({
  fishes,
  users
});

export default EntitiesReducer;