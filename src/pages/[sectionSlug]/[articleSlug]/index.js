import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Page from '../../../components/Page';
import RelatedContent from '../../../components/RelatedContent';
import PopularList from '../../../components/PopularList';
import Subscribe from '../../../components/Subscribe';
import config from '../../../config';

import 'moment/locale/sw';
import Moment from 'react-moment';
import Error from '../../_error';

import {
  getArticle,
  getPopularPosts,
  getRelatedArticles
} from '../../../fetchAPIData';

function ArticlePage({ popularPosts, article, relatedarticles, section }) {
  if (!article) {
    return <Error statusCode={404} />;
  }
  const articleDate = new Date(article.date);
  const videoUrl = [];

  const categoryName = section ? section.name : 'Habari';
  const categorySlug = section ? section.slug : 'habari';

  const image = article.full_image_src || article.jetpack_featured_media_url;

  const author = article._embedded.author[0].name;

  return (
    <Page title={article.title.rendered || 'Habari'}>
      <>
        <div className="brdr-ash-1 opacty-5" />
        <div className="section pv-50 text-left">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                {videoUrl && videoUrl.length > 0 ? (
                  <iframe
                    title={article.title.rendered}
                    src={videoUrl}
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    className="rw60 bg-layer"
                    style={{
                      width: '100%',
                      height: '40vh',
                      paddingBottom: '0',
                      border: '0'
                    }}
                  />
                ) : (
                  <div
                    className="rw60 bg-layer"
                    style={{ backgroundImage: `url('${image}')` }}
                  ></div>
                )}
                <h3 className="mt-30">
                  <b>{article.title.rendered}</b>
                </h3>
                <ul className="list-li-mr-20 mtb-15">
                  <li>
                    by <span className="color-primary">{author}</span>&nbsp;
                    <Moment locale="sw" format="D MMM, YYYY" withTitle>
                      {articleDate}
                    </Moment>
                  </li>
                </ul>
                <hr />
                <div
                  className="article-contents"
                  dangerouslySetInnerHTML={{
                    __html: article.content.rendered
                      .replace(/style=".*"/g, '')
                      .replace(/<h1>/g, '')
                      .replace(/<\/h1>/g, '')
                      .replace(/<li>/g, '<li><span>' )
                      .replace(/<\/li>/g, '</span></li>')
                      .replace(/<\/ul>/, '</ul> <hr />')
                  }}
                />
                <div className="float-left-right text-center mt-40 mt-sm-20">
                  <ul className="mb-30 list-li-mt-10 list-li-mr-5 list-a-plr-15 list-a-ptb-7 list-a-bg-grey list-a-br-2 list-a-hvr-primary ">
                    <li>
                      <Link href="/[sectionSlug]" as={`/${categorySlug}`}>
                        {categoryName}
                      </Link>
                    </li>
                  </ul>
                  <ul className="mb-30 list-a-bg-grey list-a-hw-radial-35 list-a-hvr-primary list-li-ml-5">
                    <li className="mr-10 ml-0">Share</li>
                    <li>
                      <a href="">
                        <i className="ion-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="ion-social-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="ion-social-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="ion-social-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="brdr-ash-1 opacty-5"></div>
                {relatedarticles.length > 0 && (
                  <RelatedContent postIds={relatedarticles} />
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
      </>
    </Page>
  );
}

ArticlePage.propTypes = {
  article: PropTypes.shape({}).isRequired,
  popularPosts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  relatedarticles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  section: PropTypes.shape({}).isRequired
};

ArticlePage.getInitialProps = async props => {
  const {
    query: { articleSlug, sectionSlug }
  } = props;

  const section = config.menus.find(sec => sec.slug === sectionSlug);
  const article = await getArticle(articleSlug);
  const relatedarticles = article ? await getRelatedArticles(article.id) : [];
  const popularPosts = await getPopularPosts();

  return {
    article,
    popularPosts,
    relatedarticles,
    section
  };
};

export default ArticlePage;
