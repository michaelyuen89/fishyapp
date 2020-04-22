import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import {setAuthToken} from './util/session_api_util';
import {logout} from './actions/session_actions';
import './index.css';
import { fetchAllFishes } from "./actions/fish_actions";
import App from './App';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;
    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
<<<<<<< HEAD

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // testing
=======
  //TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllFishes = fetchAllFishes;
  //TESTING
>>>>>>> fish

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
