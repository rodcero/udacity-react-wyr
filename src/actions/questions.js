import { showLoading, hideLoading } from 'react-redux-loading-bar';

import * as api from '../_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

const _addQuestion = question => ({
  type: ADD_QUESTION,
  question,
});

export const addQuestion = data => {
  return dispatch => {
    dispatch(showLoading());
    return api._saveQuestion(data).then(question => {
      dispatch(_addQuestion(question));
      dispatch(hideLoading());
    });
  };
};

export const _answerQuestion = (questionId, answer, userId) => ({
  type: ANSWER_QUESTION,
  questionId,
  answer,
  userId,
});

export const answerQuestion = (questionId, answer, userId) => {
  return dispatch => {
    dispatch(_answerQuestion(questionId, answer, userId));
    dispatch(showLoading());
    return api
      ._saveQuestionAnswer({ authedUser: userId, qid: questionId, answer })
      .then(() => {
        dispatch(hideLoading());
      });
  };
};

const _receiveQuestion = questions => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const receiveQuestions = () => {
  return dispatch => {
    dispatch(showLoading());
    return api._getQuestions().then(questions => {
      dispatch(_receiveQuestion(questions));
      dispatch(hideLoading());
    });
  };
};
