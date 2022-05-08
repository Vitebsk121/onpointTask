import styles from './SlideFirst.module.scss';

import React, { useContext } from 'react';
import { Context } from '../../context/context';
import MyButton from '../UI/MyButton/MyButton';
import { IimagesData } from '../../../interfaces/IimagesData';

const SlideFirst = () => {
  const { setSlidesTranslateX } = useContext(Context);

  const imagesData: IimagesData[] = [
    {
      url: '../../assets/images/slide1/molecule.png',
      alt: 'molecule',
      cls: [styles.pic, styles.molecule],
    },
    {
      url: '../../assets/images/slide1/bacteria.png',
      alt: 'bacteria',
      cls: [styles.pic, styles.bacteria],
    },
    {
      url: '../../assets/images/slide1/bacteria1.png',
      alt: 'bacteria',
      cls: [styles.pic, styles.bacteria1],
    },
    {
      url: '../../assets/images/slide1/bacteria2.png',
      alt: 'bacteria',
      cls: [styles.pic, styles.bacteria2],
    },
    {
      url: '../../assets/images/slide1/bacteria3.png',
      alt: 'bacteria',
      cls: [styles.pic, styles.bacteria3],
    },
    {
      url: '../../assets/images/slide1/bacteria4.png',
      alt: 'bacteria',
      cls: [styles.pic, styles.bacteria4],
    },
    {
      url: '../../assets/images/slide1/bacteria5.png',
      alt: 'bacteria',
      cls: [styles.pic, styles.bacteria5],
    },
    {
      url: '../../assets/images/slide1/pink_sperm.png',
      alt: 'pink sperm',
      cls: [styles.pic, styles.sperm],
    },
    {
      url: '../../assets/images/slide1/pink_sperm_1.png',
      alt: 'pink sperm',
      cls: [styles.pic, styles.sperm1],
    },
  ];

  const moveToNextSlide = () => {
    if (setSlidesTranslateX) {
      setSlidesTranslateX(-1024);
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
