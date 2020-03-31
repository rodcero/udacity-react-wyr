import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PollItem.css';

const PollItem = ({ poll, user }) => {
  return (
    <Link className="pollitem" to={`/questions/${poll.id}`}>
      <div className={`avatar ${user.avatarURL}`}></div>
      <div className="content">
        <div className="author">{user.name}</div>
        <div className="sub">
          Created on: {new Date(poll.timestamp).toLocaleDateString('en-US')}
        </div>
        <div className="options">
          <div className="or">OR</div>
          <div>
            <div className="option">{poll.optionOne.text}</div>
            <div className="option">{poll.optionTwo.text}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

PollItem.propTypes = {
  user: PropTypes.object.isRequired,
  poll: PropTypes.object.isRequired,
};

const mapState = ({ users }, { poll }) => {
  return { user: users[poll.author] };
};

export default connect(mapState)(PollItem);
