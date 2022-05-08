import styles from './SlideFirst.module.scss';

import React, { useContext } from 'react';
import { Context } from '../../context/context';
import MyButton from '../UI/MyButton/MyButton';
import { imagesData } from '../../data/imagesFirstSlide';

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
          btnIconUrl={'../../../assets/images/btnArrow.png'}
          text={'Что дальше?'}
          onClickFunc={moveToNextSlide}
          cls={styles.nextBtn}
        />
      </h2>
      {imagesData.map(({ url, alt, cls }) => (
        <img key={url} src={url} alt={alt} className={cls.join(' ')} />
      ))}
    </div>
  );
};

export default SlideFirst;
