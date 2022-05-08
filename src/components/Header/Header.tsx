import styles from './Header.module.scss';

import React, { useContext } from 'react';
import { Context } from '../../context/context';

const Header = () => {
  const { setPickedSlideNum } = useContext(Context);
  return (
    <div className={styles.header}>
      <button
        onClick={() => (setPickedSlideNum ? setPickedSlideNum(1) : null)}
        className={styles.homeBtn}
      />
      <div />
      <h3>project</h3>
    </div>
  );
};

export default Header;
