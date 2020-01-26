import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/Page';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Cardlow from '../components/Cardlow';
import PopularList from '../components/PopularList';
import Subscribe from '../components/Subscribe';
import Title from '../components/Title';

import { getHomeData, getPopularPosts } from '../fetchAPIData';

function Home({ popularPosts, stories, videos }) {
  return (
    <Page>
      <Hero slides={stories.slice(0,6)} />
      <div className="section pv-50 text-left">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-8">
							<Title name="HABARI MPYA"/>
							<div className="row">
								<div className="col-sm-6">
									<Card cardClass="oflow-hidden pos-relative dplay-block" cardInfo={stories[6]} />
                  {stories.slice(7,11).map(article => (
                    <Cardlow key={article.id}
                        cardClass="oflow-hidden pos-relative mb-20 dplay-block"
                        cardInfo={article}
                    />
                  ))}
								</div>
                <div className="col-sm-6">
                  {stories.slice(11,15).map(article => (
                    <Cardlow key={article.id}
                        cardClass="oflow-hidden pos-relative mb-20 dplay-block"
                        cardInfo={article}
                    />
                  ))}
                  <Card cardClass="oflow-hidden pos-relative dplay-block" cardInfo={stories[15]} />
                </div>
							</div>
						</div>
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

Home.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  popularPosts: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

Home.getInitialProps = async () => {
  const stories = await getHomeData();
  const popularPosts = await getPopularPosts();
  const videos = []

  return {
    popularPosts,
    stories,
    videos
  };
};

export default Home;
