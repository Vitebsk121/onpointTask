import styles from './Slider.module.scss';
import React, { useContext, useState } from 'react';
import { Context } from '../../context/context';

type SliderProps = {
  children: React.ReactNode;
};

const Slider: React.FC<SliderProps> = ({ children }: SliderProps) => {
  const minSwipeDistance = 50;
  const slideWidth = 1024;
  const { slidesTranslateX, setSlidesTranslateX } = useContext(Context);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const slidesCount = React.Children.count(children);

  const swipeToLeft = () => {
    const maxTranslateX = (slidesCount - 1) * slideWidth;
    if (setSlidesTranslateX) {
      setSlidesTranslateX((prevState) =>
        Math.abs(prevState) < maxTranslateX ? prevState - slideWidth : prevState,
      );
    }
  };
  const swipeToRight = () => {
    if (setSlidesTranslateX) {
      setSlidesTranslateX((prevState) => (prevState >= 0 ? prevState : prevState + slideWidth));
    }
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (touchStart === 0 || touchEnd === 0) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? swipeToLeft() : swipeToRight();
    }
  };

  return (
    <div
      className={styles.slider}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.slides_viewport}>
        <div className={styles.slides} style={{ transform: `translateX(${slidesTranslateX}px)` }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Slider;
