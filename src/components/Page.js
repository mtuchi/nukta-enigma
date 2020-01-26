import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import SEO from './SEO';

function Page({ title, children }) {
  return (
    <>
      <SEO title={title} />
      <header>
        <Header />
        <Menu />
      </header>
      {children}
      <Footer />
    </>
  );
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Page;
