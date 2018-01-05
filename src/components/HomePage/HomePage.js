import React, { Component } from 'react';
import './HomePage.css';

import Header from '../Header/Header';
import ContentUpdates from '../ContentUpdates/ContentUpdates';
import RecentEpisodes from '../RecentEpisodes/RecentEpisodes';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <div className='description'>
            <h2>What is Oscars or Bust?</h2>
            <p>
              Finding good movies to watch can be a struggle. Critics might berate a new film while
              all your friends tell you it's amazing. Rotten Tomatoes might show a 95% Fresh score for 
              a movie that you end up finding completely boring. That's where we come in!
            </p>
            <p>
              On Oscars or Bust, we sit down and talk about the latest movies and whether you should
              go and see them. Some of us examine movies from a critic's perspective while others
              just want to be entertained. In each episode, we'll take one movie, discuss it from
              critical and entertainment perspectives, debate its Oscar potential, and more! In the end,
              we'll make a recommendation whether it is a movie worth seeing depending on your general
              movie tastes.
            </p>
          </div>
          <ContentUpdates />
          <RecentEpisodes />
        </main>
      </div>
    );
  }
}

export default HomePage;
