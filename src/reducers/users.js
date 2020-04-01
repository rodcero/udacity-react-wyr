import { ANSWER_QUESTION } from '../actions/questions';
import { RECEIVE_USERS, ADD_USER } from '../actions/users';

export default (state = null, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...action.users };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          answers: {
            ...state[action.userId].answers,
            [action.questionId]: action.answer,
          },
        },
      };
    case ADD_USER:
      return {
        ...state,
        [action.user.id]: action.user,
      };
    default:
      return state;
  }
};
