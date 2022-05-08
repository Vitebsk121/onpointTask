import styles from './App.module.scss';

import React, { useState } from 'react';
import Logo from '../components/Logo/Logo';
import Header from '../components/Header/Header';
import SlideFirst from '../components/SlideFirst/SlideFirst';
import SlideSecond from '../components/SlideSecond/SlideSecond';
import Slider from '../components/Slider/Slider';
import { Context } from '../context/context';
import SlideThird from '../components/SlideThird/SlideThird';

const App = () => {
  const [slidesTranslateX, setSlidesTranslateX] = useState(0);
  return (
    <Context.Provider
      value={{
        slidesTranslateX,
        setSlidesTranslateX,
      }}
    >
      <div className={styles.app}>
        <Header />
        <Slider>
          <SlideFirst />
          <SlideSecond />
          <SlideThird />
        </Slider>
        <a href="https://onpoint.ru/" target="_blank" className={styles.logo}>
          <Logo />
        </a>
      </div>
    </Context.Provider>
  );
};

export default App;
