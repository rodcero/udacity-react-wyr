import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, isCurrentUser }) {
  return (
    <div
      key={user.id}
      className={`leaderboard-user ${isCurrentUser ? ' current' : ''}`}
    >
      {isCurrentUser && <span className="marker">Your Rank</span>}
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
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.object.isRequired,
  isCurrentUser: PropTypes.bool.isRequired,
};

export default LeaderboardItem;
