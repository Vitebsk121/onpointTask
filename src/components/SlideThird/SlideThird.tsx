import styles from './SlideThird.module.scss';

import React, { useState } from 'react';
import MyButton from '../UI/MyButton/MyButton';
import BenefitList from '../BenefitList/BenefitList';
import benefits from '../../data/benefits';
import { imagesData } from '../../data/imagesThirdSlide';
import BtnPlusPic from '../../assets/images/btnPlus.png';

type SlideThirdProps = {};

const SlideThird: React.FC<SlideThirdProps> = () => {
  const [backDropIsOpen, setBackDropIsOpen] = useState(false);

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
            btnIconUrl={BtnPlusPic}
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
