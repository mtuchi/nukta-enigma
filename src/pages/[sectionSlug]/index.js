import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import MoreNews from '../../components/MoreNews';
import PopularList from '../../components/PopularList';
import Subscribe from '../../components/Subscribe';
import Title from '../../components/Title';
import config from '../../config';

import { getSectionNews, getPopularPosts } from '../../fetchAPIData';

function SectionPage({ popularPosts, stories, section }) {
  return (
    <Page title={(section && section.name) || 'Habari'}>
      <div className="brdr-ash-1 opacty-5"></div>
      <div className="section pv-25 text-left">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              {stories && stories.length > 0 ? (
                <>
                  <MoreNews
                    titleName={section.name}
                    cardDiv="row category-news"
                    cardClass="col-sm-6"
                    newsList={stories}
                    number={10}
                  />
                  <a
                    className="dplay-block btn-brdr-primary mt-20 mb-md-50"
                    onClick={() => {}}
                  >
                    <b>{`PATA NAKALA ZA ${section.name.toUpperCase()} ZAIDI`}</b>
                  </a>
                </>
              ) : (
                <Title name="Hatuna habari kwenye sehemu hii" />
              )}
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

SectionPage.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  popularPosts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  section: PropTypes.shape({}).isRequired
};

SectionPage.getInitialProps = async props => {
  const {
    query: { sectionSlug }
  } = props;

  console.log(props.query);

  const section = config.menus.find(sec => sec.slug === sectionSlug);
  const stories = section ? await getSectionNews(section.id) : [];
  const popularPosts = await getPopularPosts();

  return {
    popularPosts,
    stories,
    section
  };
};

export default SectionPage;
