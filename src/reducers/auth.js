import { SET_USER } from '../actions/auth';
import { ADD_USER } from '../actions/users';

export default (state = { userId: null }, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, userId: action.userId };
    case ADD_USER:
      return { ...state, userId: action.user.id };
    default:
      return state;
  }
};
