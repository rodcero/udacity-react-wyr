import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './PollDetails.css';
import AnswerQuestion from './AnswerQuestion';
import Answer from './Answer';
import Error from './Error';

class PollDetails extends Component {
  static propTypes = {
    question: PropTypes.object,
    user: PropTypes.object,
    author: PropTypes.object,
  };

  render() {
    const { question, user, author } = this.props;

    if (!question || !user) return <Error message="404" />;

    const answer = user.answers[question.id];

    return (
      <>
        <div className="message">
          {!answer ? 'Please answer' : 'You answered'}
        </div>
        <div className="title">Would You Rather</div>
        <div className="poll-details">
          <div className="poll-detail">
            <div className={`avatar ${author.avatarURL}`}></div>
            <div className="author">Asked by: {author.name}</div>
            <div className="sub">
              Created on:
              {new Date(question.timestamp).toLocaleDateString('en-US')}
            </div>
          </div>
          <div className="poll-content">
            {!answer ? (
              <AnswerQuestion question={question} />
            ) : (
              <Answer question={question} answer={answer} />
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapState = ({ questions, auth, users }, props) => {
  const { question_id } = props.match.params;
  const question = questions[question_id];
  return {
    question,
    user: users[auth.userId],
    author: question && users[question.author],
  };
};

export default connect(mapState)(PollDetails);
