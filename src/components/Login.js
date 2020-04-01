import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setUser } from '../actions/auth';
import './Login.css';

class Login extends Component {
  render() {
    const { users } = this.props;
    return (
      <>
        <h3>Login</h3>
        <div className="login">
          <label>Username:</label>
          <input></input>
          <label>Password:</label>
          <input></input>
          <button className="button">SIGN IN</button>
          <Link className="register-link" to="/register">
            Register
          </Link>
        </div>
        <div className="login-or">OR</div>
        <h3>Impersonate</h3>
        {users && (
          <select onChange={e => this.props.setUser(e.target.value)}>
            <option></option>
            {Object.keys(users).map(user => (
              <option key={user}>{user}</option>
            ))}
          </select>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps, { setUser })(Login);
