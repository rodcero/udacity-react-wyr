import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as api from '../_DATA';
import { addQuestion } from '../actions/questions';

class NewQuestion extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    optionOneText: '',
    optionTwoText: '',
  };

  componentDidMount() {}

  handleInputChange = (value, option) => {
    this.setState({ [option]: value });
  };

  handleAdd = () => {
    const { optionOneText, optionTwoText } = this.state;
    const { user } = this.props;
    this.props.addQuestion({ optionOneText, optionTwoText, author: user });
    this.props.history.push('/');
  };

  render() {
    const { questions } = this.props;

    if (!questions) return null;

    return (
      <>
        <h3>New Question</h3>
        <h5>Would You Rather</h5>
        <div>
          <input
            value={this.state.optionOneText}
            onChange={e =>
              this.handleInputChange(e.target.value, 'optionOneText')
            }
          ></input>
          <div>or</div>
          <input
            value={this.state.optionTwoText}
            onChange={e =>
              this.handleInputChange(e.target.value, 'optionTwoText')
            }
          ></input>
        </div>
        <button onClick={this.handleAdd}>Add</button>
      </>
    );
  }
}

const mapState = ({ questions, user }) => ({ questions, user });

export default connect(mapState, { addQuestion })(NewQuestion);
