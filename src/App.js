import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

import './App.css';
import { handleReceiveUser } from './actions/users';
import Login from './components/Login';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveUser());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <Login />
      </div>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps)(App);
