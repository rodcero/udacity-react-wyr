import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './PollDetails.css';
import AnswerQuestion from './AnswerQuestion';

class PollDetails extends Component {
  static propTypes = {
    question: PropTypes.object,
    user: PropTypes.object,
  };

  render() {
    const { question, user } = this.props;

    if (!question || !user) return <div>Error 404</div>;

    const answer = user.answers[question.id];

    const total =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    const format = option => {
      const count = question[option].votes.length;
      return `${(count / total) * 100}%  ${count} out of ${total}`;
    };

    return (
      <>
        <h2>Would You Rather</h2>
        <div className="poll-details">
          <div className="picture">Picture</div>
          <div className="poll-content">
            {!answer ? (
              <AnswerQuestion question={question} />
            ) : (
              <>
                {['optionOne', 'optionTwo'].map((option, key) => (
                  <div
                    key={key}
                    className="poll-question"
                    style={{ color: answer === option ? 'red' : '' }}
                  >
                    <div>{question[option].text}</div>
                    <div>{format(option)}</div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div>Author: {question.author}</div>
        <div>Created on:{question.timestamp}</div>
      </>
    );
  }
}

const mapState = ({ questions, user, users }, props) => {
  const { question_id } = props.match.params;
  const question = questions[question_id];
  return { question, user: users[user] };
};

export default connect(mapState)(PollDetails);
