import styles from './SlideFirst.module.scss';

import React, { useContext } from 'react';
import { Context } from '../../context/context';
import MyButton from '../UI/MyButton/MyButton';
import { imagesData } from '../../data/imagesFirstSlide';
import BtnArrowPic from '../../assets/images/btnArrow.png';

const SlideFirst = () => {
  const { setPickedSlideNum } = useContext(Context);

  const moveToNextSlide = () => {
    const numberOfThisSlide = 1;
    if (setPickedSlideNum) {
      setPickedSlideNum(numberOfThisSlide + 1);
    }
  };

  return (
    <div className={styles.slide}>
      <p>Привет,</p>
      <h2>
        Это<span> не</span> коммерческое задание
        <MyButton
          btnIconUrl={BtnArrowPic}
          text={'Что дальше?'}
          onClickFunc={moveToNextSlide}
          cls={styles.nextBtn}
        />
      </h2>
      {imagesData.map(({ url, alt, cls }, index) => (
        <img key={index} src={url} alt={alt} className={cls.join(' ')} />
      ))}
    </div>
  );
};

export default SlideFirst;
