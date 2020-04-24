import * as UserAPIUtil from '../util/user_page_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const REMOVE_USER = "REMOVE_USER";



export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});


export const updateUser = (user) => ({
    type: UPDATE_USER,
    user
});

export const removeUser = (user) => ({
    type: REMOVE_USER,
    user
});


export const fetchUser = id => dispatch => (
    UserAPIUtil.fetchUser(id)
        .then(user=> dispatch(receiveUser(user))
        )
);


export const editUser = user => dispatch => (
    UserAPIUtil.editUser(user)
        .then(user => dispatch(updateUser(user))
        )
);

export const deleteUser = id => dispatch => (
    UserAPIUtil.deleteUser(id)
        .then(user => dispatch(removeUser(user))
        )
);