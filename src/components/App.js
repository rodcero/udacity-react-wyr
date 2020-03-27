import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './Login';
import NewQuestion from './NewQuestion';
import StatusBar from './StatusBar';
import NavBar from './NavBar';
import PollList from './PollList';
import Leaderboard from './Leaderboard';
import { handleReceiveUsers } from '../actions/users';
import { handleReceiveQuestions } from '../actions/questions';
import PollDetails from './PollDetails';

class App extends Component {
  componentDidMount() {
    this.props.handleReceiveUsers();
    this.props.handleReceiveQuestions();
  }
  render() {
    return (
      <Router>
        <LoadingBar />
        <StatusBar />
        <NavBar />
        <div className="container">
          {(this.props.user !== null) & (this.props.questions !== null) ? (
            <>
              <Route path="/" exact component={PollList} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/questions/:question_id" component={PollDetails} />
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

export default connect(mapState, {
  handleReceiveUsers,
  handleReceiveQuestions,
})(App);
