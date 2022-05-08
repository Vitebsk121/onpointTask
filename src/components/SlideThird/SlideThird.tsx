import styles from "./SlideThird.module.scss";

import React from "react";
import MyButton from "../UI/MyButton/MyButton";

type SlideThirdProps = {};

const SlideThird: React.FC<SlideThirdProps> = () => {
  return (
    <div className={styles.slide}>
      <div className={styles.slide_info}>
        <p>Ключевое сообщение</p>
        <h1>brend<span>xy</span></h1>
      </div>
      <div className={styles.slide_content_wrapper}>
        <div className={styles.slide_textBox1}>
          <p className={styles.textBox_title}>
            Ehicula ipsum a arcu
            cursus vitae. Eu non
            diam phasellus
            vestibulum lorem sed
            risus ultricies
          </p>
        </div>
        <div>
          <div className={styles.slide_textBox2}>
            <p className={styles.textBox_title}>
              A arcu
              cursus vitae
            </p>
          </div>
          <MyButton btnIconUrl={'../../assets/images/btnPlus.png'} text={'Подробнее'} onClickFunc={() => console.log('asdas')} />
        </div>
      </div>
    </div>
  );
};

export default SlideThird;
