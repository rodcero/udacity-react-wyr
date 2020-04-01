import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sha3_512 } from 'js-sha3';

import { addUser } from '../actions/users';
import './Register.css';

class Register extends Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };

  state = {
    id: '',
    password: '',
    name: '',
    avatarURL: 'avatar-2',
    disableRegister: false,
    error: '',
  };

  handleRegister = () => {
    const { id, name, password, avatarURL } = this.state;
    const user = {
      id,
      name,
      avatarURL,
      password: sha3_512(password),
    };
    this.props.addUser(user).catch(e => {
      let error = 'error please try again.';
      if (e === 'userid-taken') {
        error =
          'User ID is taken, please choose a different one and try again.';
      }
      this.setState({ error });
    });
  };

  disable = () => {
    const { disableRegister, id, password, name } = this.state;
    return (
      disableRegister || !((id !== '') & (password !== '') & (name !== ''))
    );
  };

  render() {
    const { id, password, name, error } = this.state;

    return (
      <>
        <h1>Register User</h1>
        <div className="register">
          <div>
            <label htmlFor="name">Full Name:</label>
            <input
              id="name"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
            ></input>
          </div>
          <div>
            <label htmlFor="id">User ID:</label>
            <input
              id="id"
              value={id}
              onChange={e => this.setState({ id: e.target.value, error: '' })}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
            ></input>
          </div>
          {error && <div className="error-small">{error}</div>}
          <button
            disabled={this.disable()}
            className="button"
            onClick={this.handleRegister}
          >
            REGISTER
          </button>
        </div>
      </>
    );
  }
}

const mapState = state => state;

export default connect(mapState, { addUser })(Register);
