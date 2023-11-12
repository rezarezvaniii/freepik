import React from 'react';
import TopHead from './components/TopHead';
import ExploreTrending from './components/ExploreTrending';
import Unlock from './components/Unlock';
import Header from '../Header';

const HomePage = () => {
  return (<>
    <Header />
    <TopHead />
    <ExploreTrending />
    <Unlock />
  </>);
}

export default HomePage;