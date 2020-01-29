import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Title from './Title';
import { getSectionNews } from '../fetchAPIData';

function MoreNews({
  titleClass,
  titleName,
  cardDiv,
  cardClass,
  newsList,
  number
}) {
  return (
    <>
      <Title titleClass={titleClass} name={titleName} />
      <div className={cardDiv}>
        {newsList.map((post, index) => (
          <Card key={index} cardClass={cardClass} cardInfo={post} />
        ))}
      </div>
    </>
  );
}

MoreNews.defaultProps = {
  titleClass: '',
  number: 6,
  startIndex: 10
};

MoreNews.propTypes = {
  titleClass: PropTypes.string,
  titleName: PropTypes.string.isRequired,
  cardDiv: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  newsList: PropTypes.array.isRequired,
  number: PropTypes.number.isRequired,
  startIndex: PropTypes.number.isRequired
};

export default MoreNews;
