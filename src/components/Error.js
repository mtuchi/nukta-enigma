import React from 'react';
import PropTypes from 'prop-types';

function Error({ children, title, ...props }) {
  return (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <div {...props}>
      <p>{title}</p>
      <div>{children}</div>
    </div>
  );
}

Error.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string
};
Error.defaultProps = {
  title: ''
};

export default Error;
