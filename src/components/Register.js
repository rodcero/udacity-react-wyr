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
  };

  handleRegister = () => {
    console.log('REGISTER');
    const user = {
      ...this.state,
    };
    user.password = sha3_512(this.state.password);
    this.props.addUser(user);
  };

  render() {
    const { id, password, name } = this.state;

    return (
      <>
        <h1>Register User</h1>
        <div className="register">
          <div>
            <label for="">Full Name:</label>
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
            ></input>
          </div>
          <div>
            <label for="">User ID:</label>
            <input
              value={id}
              onChange={e => this.setState({ id: e.target.value })}
            ></input>
          </div>
          <div>
            <label for="">Password:</label>
            <input
              type="password"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
            ></input>
          </div>
          <button className="button" onClick={this.handleRegister}>
            REGISTER
          </button>
        </div>
      </>
    );
  }
}

const mapState = state => state;

export default connect(mapState, { addUser })(Register);
