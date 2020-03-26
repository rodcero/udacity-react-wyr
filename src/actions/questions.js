import { showLoading, hideLoading } from 'react-redux-loading-bar';

import * as api from '../_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

const receiveQuestion = questions => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const handleReceiveQuestions = () => {
  return dispatch => {
    dispatch(showLoading());
    return api._getQuestions().then(questions => {
      dispatch(receiveQuestion(questions));
      dispatch(hideLoading());
    });
  };
};
