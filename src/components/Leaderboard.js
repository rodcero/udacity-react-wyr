import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Leaderboard.css';

class Leaderboard extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    user: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h1>Leaderboard</h1>
        {this.props.users.map(user => (
          <div
            key={user.id}
            className={`leaderboard-user ${
              this.props.user === user.id ? ' current' : ''
            }`}
          >
            <div className="leaderboard-score">
              <span>score</span>
              <div>{user.questionCount + user.answerCount}</div>
            </div>
            <div className="leaderboard-content">
              <div className={`avatar ${user.avatarUrl}`}></div>
              <div className="leaderboard-details">
                <div className="name">{user.name}</div>
                <div className="detail">
                  <span>created questions:</span> {user.questionCount}
                </div>
                <div className="detail">
                  <span>answers questions:</span> {user.answerCount}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = ({ users, user }) => {
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

  return { users: userList.sort((a, b) => b.score - a.score), user };
};

export default connect(mapState)(Leaderboard);
