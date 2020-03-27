import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">HOME</Link>
      <Link to="/questions">QUESTIONS</Link>
      <Link to="/leaderboard">LEADERBOARD</Link>
    </div>
  );
}