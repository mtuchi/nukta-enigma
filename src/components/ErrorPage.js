/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import Page from './Page';

function ErrorPage({ children, ...props }) {
  return (
    <Page {...props}>
      <div {...props}>{children}</div>
    </Page>
  );
}

ErrorPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default ErrorPage;
