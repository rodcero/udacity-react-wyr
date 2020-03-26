import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Questions from './Questions';

class App extends Component {
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/questions" exact component={Questions} />
        </Router>
      </Fragment>
    );
  }
}

const mapState = props => {
  return props;
};

export default connect(mapState)(App);
