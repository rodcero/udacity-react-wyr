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
        <h3>Leaderboard</h3>
        {this.props.users.map(user => (
          <div key={user.id} className="leaderboard-user">
            <div className="leaderboard-score">
              <span>score</span>
              <div>{user.questionCount + user.answerCount}</div>
            </div>
            <div className="leaderboard-content">
              <div>Avatar</div>
              <div className="leaderboard-details">
                <h4>{user.name}</h4>
                <div>Questions: {user.questionCount}</div>
                <div>Answers: {user.answerCount}</div>
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
      avatarUrl: user.avatarUrl,
      questionCount,
      answerCount,
      score: questionCount + answerCount,
    };
  });

  return { users: userList.sort((a, b) => b.score - a.score), user };
};

export default connect(mapState)(Leaderboard);
