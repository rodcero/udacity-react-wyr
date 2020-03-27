import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { handleReceiveQuestions } from '../actions/questions';

class NewQuestion extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  componentDidMount() {
    this.props.handleReceiveQuestions();
  }

  render() {
    const { questions } = this.props;

    if (!questions) return null;

    return (
      <>
        <h3>New Question</h3>
      </>
    );
  }
}

const mapState = ({ questions }) => ({ questions });

export default connect(mapState, { handleReceiveQuestions })(NewQuestion);
