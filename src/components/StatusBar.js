import React from 'react';
import { connect } from 'react-redux';
import { TiUser } from 'react-icons/ti';

import './StatusBar.css';
import { setUser } from '../actions/user';

function StatusBar({ user, setUser }) {
  const signOut = e => {
    e.preventDefault();
    setUser(null);
  };

  return (
    <div className="status-bar">
      {user && (
        <div className="user">
          <TiUser className="icon" />
          <div>
            <span className="name">{user.name}</span>
            <button onClick={signOut}>Sign out</button>
          </div>
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

export default connect(mapState, { setUser })(StatusBar);
