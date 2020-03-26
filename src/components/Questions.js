import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleReceiveQuestions } from '../actions/questions';

class Questions extends Component {
  componentDidMount() {
    this.props.handleReceiveQuestions();
  }

  render() {
    const { questions } = this.props;

    if (!questions) return null;

    return (
      <>
        <h3>Questions</h3>
        <ul>
          {Object.keys(questions).map(qk => (
            <li key={qk}>{questions[qk].optionOne.text}</li>
          ))}
        </ul>
        ;
      </>
    );
  }
}

const mapState = ({ questions }) => ({ questions });

export default connect(mapState, { handleReceiveQuestions })(Questions);
