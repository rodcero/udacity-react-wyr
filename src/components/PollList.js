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

    if (!questions || !user) return null;

    return (
      <>
        <h3>Polls</h3>
        <div className="category-bar">
          <span
            className={(viewSwitch ? 'selected' : '') + ' category-btn'}
            onClick={() => this.setState({ viewSwitch: true })}
          >
            Unanswered
          </span>
          <span
            className={(!viewSwitch ? 'selected' : '') + ' category-btn'}
            onClick={() => this.setState({ viewSwitch: false })}
          >
            Answered
          </span>
        </div>
        {questions.map(question => (
          <PollItem
            show={!user.answers[question.id] === viewSwitch}
            answer={user.answers[question.id]}
            poll={question}
            key={question.id}
          />
        ))}
      </>
    );
  }
}

const mapState = ({ questions, user, users }) => {
  const questionList =
    questions &&
    Object.keys(questions)
      .map(key => questions[key])
      .sort((a, b) => b.timestamp - a.timestamp);
  return { questions: questionList, user: users && users[user] };
};

export default connect(mapState)(PollList);
