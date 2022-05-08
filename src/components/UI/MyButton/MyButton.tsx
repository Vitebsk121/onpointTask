import styles from './MyButton.module.scss';
import React from 'react';

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
  const backgroundImages = [`url("../../../assets/images/btnCircle.png")`];
  backgroundImages.unshift(`url(${btnIconUrl})`);
  return (
    <button className={styles.slide_btn + ' ' + cls} onClick={onClickFunc}>
      <div className={styles.btn_arrow} style={{ backgroundImage: backgroundImages.join(',') }} />
      {text}
    </button>
  );
};

export default MyButton;
