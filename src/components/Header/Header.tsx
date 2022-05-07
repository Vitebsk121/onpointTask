import styles from './Header.module.scss';

import React, { useContext } from 'react';
import { Context } from '../../context/context';

const Header = () => {
  const { setSlidesTranslateX } = useContext(Context);
  return (
    <div className={styles.header}>
      <button
        onClick={() => (setSlidesTranslateX ? setSlidesTranslateX(0) : null)}
        className={styles.homeBtn}
      />
      <div />
      <h3>project</h3>
    </div>
  );
};

export default Header;
