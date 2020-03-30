import { SET_USER } from '../actions/auth';

export default (state = { userId: 'johndoe' }, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, userId: action.userId };
    default:
      return state;
  }
};
