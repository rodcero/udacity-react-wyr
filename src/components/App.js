import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './Login';
import NewQuestion from './NewQuestion';
import StatusBar from './StatusBar';
import NavBar from './NavBar';
import PollList from './PollList';
import Leaderboard from './Leaderboard';
import Register from './Register';
import { receiveUsers } from '../actions/users';
import { receiveQuestions } from '../actions/questions';
import PollDetails from './PollDetails';

class App extends Component {
  componentDidMount() {
    this.props.receiveUsers();
    this.props.receiveQuestions();
  }
  render() {
    return (
      <Router>
        <LoadingBar />
        <StatusBar />
        <NavBar />
        <div className="container">
          {(this.props.userId !== null) & (this.props.questions !== null) ? (
            <>
              <Route path="/" exact component={PollList} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/questions/:question_id" component={PollDetails} />
            </>
          ) : (
            <Switch>
              <Route path="/register" exact component={Register} />
              <Route path="/" component={Login} />
            </Switch>
          )}
        </div>
      </Router>
    );
  }
}

const mapState = ({ auth, questions }) => {
  const { userId } = auth;
  return { userId, questions };
};

export default connect(mapState, {
  receiveUsers,
  receiveQuestions,
})(App);
