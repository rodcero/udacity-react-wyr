import React from 'react';
import { connect } from 'react-redux';

import './StatusBar.css';
import { setUser } from '../actions/auth';

function StatusBar({ user, setUser }) {
  const signOut = e => {
    e.preventDefault();
    setUser(null);
  };

  return (
    <div className="status-bar">
      {user && (
        <div className="user">
          <div className={`login-avatar ${user.avatarURL}`}></div>
          <div>
            <span className="name">{user.name}</span>
            <button className="login-button" onClick={signOut}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const mapState = ({ auth, users }) => {
  return {
    user: users ? users[auth.userId] : null,
  };
};

export default connect(mapState, { setUser })(StatusBar);
