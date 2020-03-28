import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { answerQuestion } from '../actions/questions';

class AnswerQuestion extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    user: PropTypes.string.isRequired,
  };

  state = {
    selected: null,
  };

  submit = e => {
    e.preventDefault();
    this.props.answerQuestion(
      this.props.question.id,
      this.state.selected,
      this.props.user
    );
  };

  render() {
    const { question } = this.props;
    return (
      <>
        <form onSubmit={this.submit}>
          <div className="poll-question">
            <input
              type="radio"
              name="question"
              onChange={() => this.setState({ selected: 'optionOne' })}
            />
            {question.optionOne.text}
          </div>
          <div className="poll-question">
            <input
              type="radio"
              name="question"
              onChange={() => this.setState({ selected: 'optionTwo' })}
            />
            {question.optionTwo.text}
          </div>
          <input type="submit"></input>
        </form>
      </>
    );
  }
}

const mapState = ({ user }, { question }) => ({ user, question });

export default connect(mapState, { answerQuestion })(AnswerQuestion);
