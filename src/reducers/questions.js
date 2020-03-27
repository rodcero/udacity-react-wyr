import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions';

export default (state = null, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...action.questions };
    case ANSWER_QUESTION:
      console.log(state[action.questionId][action.answer]);
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: [
              ...state[action.questionId][action.answer].votes,
              action.userId,
            ],
          },
        },
      };
    default:
      return state;
  }
};
