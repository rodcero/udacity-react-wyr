import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as api from '../_DATA.js';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER = 'ADD_USER';

const _receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

const _addUser = user => ({
  type: ADD_USER,
  user,
});

export const addUser = user => {
  return dispatch => {
    dispatch(showLoading());
    return api._saveUser(user).then(resp_user => {
      dispatch(_addUser(resp_user));
      dispatch(hideLoading());
    });
  };
};

export const receiveUsers = () => {
  return dispatch => {
    dispatch(showLoading());
    return api._getUsers().then(users => {
      dispatch(_receiveUsers(users));
      dispatch(hideLoading());
    });
  };
};
