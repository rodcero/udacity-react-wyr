import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sha3_512 } from 'js-sha3';

import { setUser } from '../actions/auth';
import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: '',
  };

  authenticate = () => {
    const { users, setUser } = this.props;
    const { username, password } = this.state;
    const user = users[username];
    if (user && user.password === sha3_512(password)) {
      setUser(user.id);
    } else {
      this.setState({
        error: 'Wrong user name or password, please try again.',
      });
    }
  };

  disable = () => this.state.username === '' || this.state.password === '';

  render() {
    const { username, password, error } = this.state;
    const { users } = this.props;
    return (
      <>
        <h3>Login</h3>
        <div className="login">
          <label>Username:</label>
          <input
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
          ></input>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          ></input>
          <button
            disabled={this.disable()}
            className="button"
            onClick={this.authenticate}
          >
            SIGN IN
          </button>
          {error && <div className="error-small">{error}</div>}
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
