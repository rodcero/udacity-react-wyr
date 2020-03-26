import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleReceiveUsers } from '../actions/users';

class Login extends Component {
  componentDidMount() {
    this.props.handleReceiveUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <>
        <h2>Log in</h2>
        {users && (
          <select>
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

export default connect(mapStateToProps, { handleReceiveUsers })(Login);
