import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Questions from './Questions';
import StatusBar from './StatusBar';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <LoadingBar />
        <StatusBar />
        <NavBar />
        <div className="container">
          {this.props.user ? (
            <>
              <Route path="/" exact component={Login} />
              <Route path="/questions" exact component={Questions} />
            </>
          ) : (
            <Login />
          )}
        </div>
      </Router>
    );
  }
}

const mapState = props => {
  return props;
};

export default connect(mapState)(App);
