import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import Error from '../components/Error';
import ErrorPage from '../components/ErrorPage';


function NotFoundError({ statusCode }) {
  return (
    <ErrorPage
      title={statusCode === 404 ? 'Page Not Found' : 'Internal Server Error'}
    >
      {statusCode === 404 && (
        <>
          <Error title="404 - Page Not Found">
            <p>
              The page you are looking for does not exist.
            </p>
          </Error>
        </>
      )}

      {statusCode === 500 && (
        <Error title="500 - Internal Server Error">
          <p>
            We’re having some trouble processing your request. We’ve logged the
            error and will investigate. You can try again or if the issue
            persists, please{' '}
              <Link href="/contact" underline="always">
                contact us
              </Link>
          </p>
        </Error>
      )}
    </ErrorPage>
  );
}

NotFoundError.propTypes = {
  statusCode: PropTypes.number.isRequired
};

NotFoundError.getInitialProps = async ({ res, err }) => {
  return {
    statusCode: (res && res.statusCode) || (err && err.statusCode) || 404
  };
};

export default NotFoundError;
