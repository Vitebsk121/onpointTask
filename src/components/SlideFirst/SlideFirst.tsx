import styles from './SlideFirst.module.scss';

import React, { useContext } from 'react';
import { Context } from '../../context/context';

const SlideFirst = () => {
  const { setSlidesTranslateX } = useContext(Context);
  type TImageData = {
    url: string;
    alt: string;
    cls: string[];
  };

  const imagesData: TImageData[] = [
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

  return (
    <div className={styles.slide}>
      <p>Привет,</p>
      <h2>
        Это<span> не</span> коммерческое задание
        <button
          className={styles.slide_btn}
          onClick={() => (setSlidesTranslateX ? setSlidesTranslateX(-1024) : null)}
        >
          <div className={styles.btn_arrow} />
          Что дальше?
        </button>
      </h2>
      {imagesData.map(({ url, alt, cls }) => (
        <img key={url} src={url} alt={alt} className={cls.join(' ')} />
      ))}
    </div>
  );
};

export default SlideFirst;
