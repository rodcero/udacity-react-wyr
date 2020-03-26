import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import users from './users';
import questions from './questions';
import user from './user';

export default combineReducers({
  users,
  questions,
  user,
  loadingBar: loadingBarReducer,
});
