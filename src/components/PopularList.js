import React from 'react';
import PropTypes from 'prop-types';
import Cardlow from './Cardlow.js';
import Title from './Title';

function PopularList({ popularPosts}) {
  if (popularPosts && popularPosts.length ) {
    return (
      <>
        <Title name="ZILIZOSOMWA ZAIDI"/>
        {popularPosts.map((post, index) => (
          <Cardlow key={`popular-${index}`} cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={post}/>
        ))}
      </>
    );
  }
  return null;
}

PopularList.propTypes = {
	popularPosts: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
}

export default PopularList;
