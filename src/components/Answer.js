import React from 'react';
import PropTypes from 'prop-types';

import './Answer.css';

function Answer({ question, answer }) {
  const total =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const format = option => {
    const count = question[option].votes.length;
    return `${(count / total) * 100}% :: ${count} out of ${total}`;
  };

  return (
    <>
      {['optionOne', 'optionTwo'].map((option, key) => (
        <div
          key={key}
          className={`question ${answer === option ? 'choice' : ''}`}
        >
          <div>{question[option].text}</div>
          <div className="stats">{format(option)}</div>
        </div>
      ))}
    </>
  );
}

Answer.propTypes = {
  question: PropTypes.object.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Answer;
