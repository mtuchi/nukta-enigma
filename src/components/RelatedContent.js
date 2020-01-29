import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import MoreNews from './MoreNews';
import axios from 'axios';

function RelatedContent({ postIds }) {
  const [relatedPosts, setRelatedPosts ] = useState([]);
  const relatedIds = useMemo(() => postIds || [], [postIds]);

  useEffect(() => { 
    (async () => {
      if (relatedIds.length > 0) {
        Promise.all(relatedIds.map(id => {
          return axios.get(`https://cms.nukta.co.tz/wp-json/wp/v2/posts/${id}?_embed`) }))
         .then(res => {
                   const posts = res.map(post => post.data);
                   setRelatedPosts(posts);
          });
      }
    })();
  }, [relatedIds]);

  if (relatedPosts.length > 0) {
    return (
      <MoreNews
          titleClass="mt-50"
          titleName="UNAWEZA PIA SOMA"
          cardDiv="row"
          cardClass="col-sm-4"
          newsList={relatedPosts} />

    );
  }
  return null;
}

RelatedContent.propTypes = {
  postIds: PropTypes.array.isRequired

}

export default RelatedContent;
