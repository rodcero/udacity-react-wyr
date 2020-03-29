import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addQuestion } from '../actions/questions';

class NewQuestion extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
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
    const { user } = this.props;
    this.props.addQuestion({ optionOneText, optionTwoText, author: user });
    this.props.history.push('/');
  };

  render() {
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

const mapState = ({ user }) => ({ user });

export default connect(mapState, { addQuestion })(NewQuestion);
