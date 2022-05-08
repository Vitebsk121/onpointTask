import styles from './BenefitList.module.scss';

import React, { useState } from 'react';
import { Ibenefits } from '../../../interfaces/Ibenefits';

type BenefitListProps = {
  benefits: Ibenefits[];
};

const BenefitList: React.FC<BenefitListProps> = ({ benefits }: BenefitListProps) => {
  const visibleBenefitsCount = 3;
  const [pickedPage, setPickedPage] = useState(1);
  const firstBenefit = pickedPage * visibleBenefitsCount - visibleBenefitsCount;
  const lastBenefit = visibleBenefitsCount * pickedPage;
  const totalPages = Math.ceil(benefits.length / visibleBenefitsCount);

  const prevPage = () => {
    setPickedPage((prevState) => (prevState <= 1 ? 1 : prevState - 1));
  };
  const nextPage = () => {
    setPickedPage((prevState) => (prevState >= totalPages ? totalPages : prevState + 1));
  };
  return (
    <div className={styles.benefitList}>
      <ul>
        {benefits.map(({ id, title }, index) => {
          if (index >= firstBenefit && index < lastBenefit) {
            return (
              <li key={id} className={styles.benefitItem}>
                <p className={styles.benefitItem_id}>{id}</p>
                <p className={styles.benefitItem_title}>{title}</p>
              </li>
            );
          }
        })}
      </ul>
      <div className={styles.listPagination}>
        <button className={styles.listPagination_btn + ' ' + styles.left} onClick={prevPage} />
        <div className={styles.listPagination_markers}>
          {[...Array(totalPages).keys()].map((el) => (
            <div
              key={el}
              className={styles.markers_dot + ' ' + (pickedPage - 1 === el ? styles.active : '')}
            />
          ))}
        </div>
        <button className={styles.listPagination_btn + ' ' + styles.right} onClick={nextPage} />
      </div>
    </div>
  );
};

export default BenefitList;
