import styles from './Slider.module.scss';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/context';

type SliderProps = {
  children: React.ReactNode;
};

const Slider: React.FC<SliderProps> = ({ children }: SliderProps) => {
  const minSwipeDistance = 50;
  const slideWidth = 1024;
  const { pickedSlideNum, setPickedSlideNum } = useContext(Context);
  const [slidesTranslateX, setSlidesTranslateX] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    setSlidesTranslateX(-(pickedSlideNum! * slideWidth - slideWidth));
  }, [pickedSlideNum]);

  const swipeToLeft = () => {
    setPickedSlideNum?.((prevState) => (prevState < 3 ? prevState + 1 : prevState));
  };
  const swipeToRight = () => {
    setPickedSlideNum?.((prevState) => (prevState <= 1 ? prevState : prevState - 1));
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
