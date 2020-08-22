import React from 'react';
import Page from '../components/Page';
import Title from '../components/Title.js';
import Subscribe from '../components/Subscribe.js';
import PopularList from '../components/PopularList';

import { getPopularPosts } from '../fetchAPIData';

function Data({ popularPosts }) {
  return (
    <Page title="Data Us">
      <div className="brdr-ash-1 opacty-5"></div>
      <div className="section pv-50 text-left">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <Title name="Data" />
              <ul className="nav nav-tabs list-a-pr-30">
                <li className="active">
                  <a data-toggle="tab" href="#home">
                    Hali ya Hewa
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#menu1">
                    Soko la Hisa Dar es Salaam
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#menu2">
                    Food Commodities
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade in active">
                  <h3>HOME</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div id="menu1" className="tab-pane fade">
                  <h3>Menu 1</h3>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div id="menu2" className="tab-pane fade">
                  <h3>Menu 2</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pl-20 pl-md-0">
                <Subscribe />
                <div className="mb-50">
                  <PopularList popularPosts={popularPosts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

Data.propTypes = {
  popularPosts: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

Data.getInitialProps = async () => {
  const popularPosts = await getPopularPosts();

  return {
    popularPosts
  };
};

export default Data;
