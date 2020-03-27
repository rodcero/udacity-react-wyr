import { ANSWER_QUESTION } from '../actions/questions';
export const RECEIVE_USERS = 'RECEIVE_USERS';

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
    default:
      return state;
  }
};
