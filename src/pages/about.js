import React from 'react';
import Page from '../components/Page';
import Title from '../components/Title.js';
import Subscribe from '../components/Subscribe.js';
import PopularList from '../components/PopularList';

import { getPopularPosts } from '../fetchAPIData';

function About({ popularPosts }) {
  return (
    <Page title="About Us">
      <div className="brdr-ash-1 opacty-5"></div>
      <div className="section pv-50 text-left">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <Title name="KUHUSU NUKTA" />
            </div>
            <div style={{ textAlign: 'justify' }}></div>
            <div className="col-md-6 col-lg-4">
              <div className="pl-20 pl-md-0">
                <div className="mb-50">
                  <PopularList popularPosts={popularPosts} />
                </div>
                <Subscribe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

About.propTypes = {
  popularPosts: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

About.getInitialProps = async () => {
  const popularPosts = await getPopularPosts();

  return {
    popularPosts
  };
};

export default About;
