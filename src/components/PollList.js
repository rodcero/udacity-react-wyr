import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './PollList.css';
import PollItem from './PollItem';

class PollList extends Component {
  static propTypes = {
    questions: PropTypes.array,
    user: PropTypes.object,
  };

  state = {
    viewSwitch: true,
  };

  render() {
    const { questions, user } = this.props;
    const { viewSwitch } = this.state;

    if (!questions) return null;

    return (
      <>
        <h1>Polls</h1>
        <div className="category-bar">
          <span
            className={`category-btn ${viewSwitch ? 'selected' : ''}`}
            onClick={() => this.setState({ viewSwitch: true })}
          >
            Unanswered
          </span>
          <span
            className={`category-btn ${!viewSwitch ? 'selected' : ''}`}
            onClick={() => this.setState({ viewSwitch: false })}
          >
            Answered
          </span>
        </div>
        {questions
          .filter(question => !user.answers[question.id] === viewSwitch)
          .map(question => (
            <PollItem poll={question} key={question.id} />
          ))}
      </>
    );
  }
}

const mapState = ({ questions, users, auth }) => {
  return {
    user: users[auth.userId],
    questions: Object.keys(questions)
      .map(key => questions[key])
      .sort((a, b) => b.timestamp - a.timestamp),
  };
};

export default connect(mapState)(PollList);
