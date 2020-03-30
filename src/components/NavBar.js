import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './NavBar.css';

function NavBar({ location }) {
  return (
    <div className="navbar">
      <Link className={location.pathname === '/' ? 'selected' : ''} to="/">
        HOME
      </Link>
      <Link
        className={location.pathname === '/add' ? 'selected' : ''}
        to="/add"
      >
        NEW QUESTION
      </Link>
      <Link
        className={location.pathname === '/leaderboard' ? 'selected' : ''}
        to="/leaderboard"
      >
        LEADERBOARD
      </Link>
    </div>
  );
}

export default withRouter(NavBar);
