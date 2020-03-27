import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PollItem.css';

const PollItem = ({ poll, show, answer }) => {
  return (
    <Link
      className="pollitem"
      to={`/questions/${poll.id}`}
      style={{ display: show ? 'block' : 'none' }}
    >
      <h5>{poll.author}</h5>
      <p>{new Date(poll.timestamp).toLocaleDateString('en-US')}</p>
      <ul>
        <li className={answer === 'optionOne' ? 'answer' : ''}>
          {poll.optionOne.text}
        </li>
        <li className={answer === 'optionTwo' ? 'answer' : ''}>
          {poll.optionTwo.text}
        </li>
      </ul>
    </Link>
  );
};

PollItem.propTypes = {
  poll: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  answer: PropTypes.string,
};

export default PollItem;
