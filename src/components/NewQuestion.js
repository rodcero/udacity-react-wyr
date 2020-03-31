import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addQuestion } from '../actions/questions';
import './NewQuestion.css';

class NewQuestion extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired,
    addQuestion: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    optionOneText: '',
    optionTwoText: '',
  };

  handleInputChange = (value, option) => {
    this.setState({ [option]: value });
  };

  handleAdd = () => {
    const { optionOneText, optionTwoText } = this.state;
    const { userId } = this.props;
    this.props.addQuestion({ optionOneText, optionTwoText, author: userId });
    this.props.history.push('/');
  };

  disableButton = () =>
    this.state.optionOneText === '' || this.state.optionTwoText === '';

  render() {
    return (
      <div className="new-question">
        <div className="message">Create new question.</div>
        <div className="title">Would You Rather...</div>
        <div>
          <textarea
            className="input"
            value={this.state.optionOneText}
            onChange={e =>
              this.handleInputChange(e.target.value, 'optionOneText')
            }
          ></textarea>
          <div className="or">or</div>
          <textarea
            className="input"
            value={this.state.optionTwoText}
            onChange={e =>
              this.handleInputChange(e.target.value, 'optionTwoText')
            }
          ></textarea>
        </div>
        <button
          className="button"
          disabled={this.disableButton()}
          onClick={this.handleAdd}
        >
          Create
        </button>
      </div>
    );
  }
}

const mapState = ({ auth }) => ({ userId: auth.userId });

export default connect(mapState, { addQuestion })(NewQuestion);
