import styles from './MyButton.module.scss';
import React from 'react';
import BtnCirclePic from '../../../assets/images/btnCircle.png';

type MyButtonProps = {
  btnIconUrl: string;
  text: string;
  onClickFunc: () => void;
  cls?: string;
};

const MyButton: React.FC<MyButtonProps> = ({
  btnIconUrl,
  text,
  onClickFunc,
  cls = '',
}: MyButtonProps) => {
  return (
    <button className={styles.slide_btn + ' ' + cls} onClick={onClickFunc}>
      <div
        className={styles.btn_arrow}
        style={{ backgroundImage: `url(${btnIconUrl}), url(${BtnCirclePic})` }}
      />
      {text}
    </button>
  );
};

export default MyButton;
