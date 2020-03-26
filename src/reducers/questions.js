import { RECEIVE_QUESTIONS } from '../actions/questions';

export default (state = null, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...action.questions };
    default:
      return state;
  }
};
