import styles from './SlideThird.module.scss';

import React, { useState } from 'react';
import MyButton from '../UI/MyButton/MyButton';
import { IimagesData } from '../../../interfaces/IimagesData';
import BenefitList from '../BenefitList/BenefitList';
import benefits from '../../../Data/benefits';

type SlideThirdProps = {};

const SlideThird: React.FC<SlideThirdProps> = () => {
  const [backDropIsOpen, setBackDropIsOpen] = useState(true);
  const imagesData: IimagesData[] = [
    {
      url: '../../assets/images/slide3/bottle.png',
      alt: 'bottle',
      cls: [styles.pic, styles.bottle],
    },
    {
      url: '../../assets/images/slide3/bubble_blue.png',
      alt: 'blue bubble',
      cls: [styles.pic, styles.bubble1],
    },
    {
      url: '../../assets/images/slide3/bubble_blue.png',
      alt: 'blue bubble',
      cls: [styles.pic, styles.bubble2],
    },
    {
      url: '../../assets/images/slide3/bubble_red.png',
      alt: 'red bubble',
      cls: [styles.pic, styles.bubble3],
    },
    {
      url: '../../assets/images/slide3/bubble_pink.png',
      alt: 'pink bubble',
      cls: [styles.pic, styles.bubble4],
    },
    {
      url: '../../assets/images/slide3/bubble_blue.png',
      alt: 'blue bubble',
      cls: [styles.pic, styles.bubble5],
    },
    {
      url: '../../assets/images/slide3/bubble_pink.png',
      alt: 'pink bubble',
      cls: [styles.pic, styles.bubble6],
    },
    {
      url: '../../assets/images/slide3/bubble_blue.png',
      alt: 'blue bubble',
      cls: [styles.pic, styles.bubble7],
    },
    {
      url: '../../assets/images/slide3/bubble_darkBlue.png',
      alt: 'dark blue bubble',
      cls: [styles.pic, styles.bubble8],
    },
  ];

  return (
    <div className={styles.slide}>
      <div className={styles.slide_info}>
        <p>{backDropIsOpen ? 'Преимущества' : 'Ключевое сообщение'}</p>
        <h1>
          brend<span>xy</span>
        </h1>
      </div>
      <div className={styles.slide_content_wrapper}>
        <div className={styles.slide_textBox1}>
          <p className={styles.textBox_title}>
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus
            ultricies
          </p>
        </div>
        <div>
          <div className={styles.slide_textBox2}>
            <p className={styles.textBox_title}>A arcu cursus vitae</p>
          </div>
          <MyButton
            btnIconUrl={'../../assets/images/btnPlus.png'}
            text={'Подробнее'}
            onClickFunc={() => setBackDropIsOpen(true)}
          />
        </div>
      </div>
      {imagesData.map(({ url, alt, cls }, index) => (
        <img key={index} src={url} alt={alt} className={cls.join(' ')} />
      ))}
      {backDropIsOpen ? (
        <>
          <div className={styles.backdrop} onClick={() => setBackDropIsOpen(false)} />
          <div className={styles.textBox3}>
            <BenefitList benefits={benefits} />
            <button className={styles.closeBtn} onClick={() => setBackDropIsOpen(false)}>
              <div className={styles.closeBtn_line} />
              <div className={styles.closeBtn_line} />
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SlideThird;
