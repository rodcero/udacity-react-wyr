import React from 'react';
import { connect } from 'react-redux';
import { TiUser } from 'react-icons/ti';

import './StatusBar.css';

function StatusBar({ user }) {
  return (
    <div className="status-bar">
      {user && (
        <div className="user">
          <TiUser className="icon" />
          <span className="name">{user.name}</span>
        </div>
      )}
    </div>
  );
}

const mapState = ({ user, users }) => {
  return {
    user: users ? users[user] : null,
  };
};

export default connect(mapState)(StatusBar);
