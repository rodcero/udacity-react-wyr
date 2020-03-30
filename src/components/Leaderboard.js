import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Leaderboard.css';
import LeaderboardItem from './LeaderboardItem';

class Leaderboard extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    authedUserId: PropTypes.string.isRequired,
  };

  render() {
    const { authedUserId } = this.props;
    return (
      <div>
        <h1>Leaderboard</h1>
        {this.props.users.map(user => (
          <LeaderboardItem
            user={user}
            isCurrentUser={authedUserId === user.id}
            key={user.id}
          />
        ))}
      </div>
    );
  }
}

const mapState = ({ users, auth }) => {
  const userList = Object.keys(users).map(userId => {
    const user = users[userId];
    const questionCount = Object.keys(user.questions).length;
    const answerCount = Object.keys(user.answers).length;
    return {
      id: user.id,
      name: user.name,
      avatarUrl: user.avatarURL,
      questionCount,
      answerCount,
      score: questionCount + answerCount,
    };
  });

  return {
    users: userList.sort((a, b) => b.score - a.score),
    authedUserId: auth.userId,
  };
};

export default connect(mapState)(Leaderboard);
