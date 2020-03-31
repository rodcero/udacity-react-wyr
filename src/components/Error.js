import React from 'react';
import PropTypes from 'prop-types';

import './Error.css';

function Error({ message }) {
  return <div className="error">{`Error: ${message}`}</div>;
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
