import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as api from '../_DATA.js';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const handleReceiveUser = () => {
  return dispatch => {
    dispatch(showLoading());
    return api._getUsers().then(users => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    });
  };
};
