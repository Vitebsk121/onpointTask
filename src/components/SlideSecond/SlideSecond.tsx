import styles from './SlideSecond.module.scss';

import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../context/context';

const SlideSecond = () => {
  const textBoxEl = useRef<HTMLParagraphElement>(null);
  const viewBoxEl = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [range, setRange] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const { pickedSlideNum } = useContext(Context);

  const imagesData = [
    { cls: styles.sperm1 },
    { cls: styles.sperm2 },
    { cls: styles.sperm3 },
    { cls: styles.sperm4 },
    { cls: styles.sperm5 },
  ];

  useEffect(() => {
    const numberOfThisSlide = 2;
    pickedSlideNum === numberOfThisSlide ? setIsAnimated(true) : setIsAnimated(false);
  }, [pickedSlideNum]);

  useEffect(() => {
    const viewBoxSmogEffectHeight = 75;
    setRange(
      textBoxEl.current!.offsetHeight - (viewBoxEl.current!.offsetHeight - viewBoxSmogEffectHeight),
    );
  }, []);

  return (
    <div className={styles.slide}>
      <p>Текст сообщения</p>
      <div className={styles.slideInfo}>
        <input
          className={styles.slideInfo_range}
          type="range"
          min="0"
          max="100"
          step="1"
          value={scrollRange}
          name="range"
          onChange={(e) => setScrollRange(+e.target.value)}
        />
        <div className={styles.slideInfo_text_wrapper}>
          <div ref={viewBoxEl} className={styles.textViewport}>
            <p
              ref={textBoxEl}
              style={{
                transform: `translateY(${
                  range <= 0 ? '0px' : -Math.abs((scrollRange * range) / 100)
                }px)`,
              }}
            >
              <span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
              <br />
              tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget
              <br />
              felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
              <br />
              dignissim diam quis enim lobortis. Est sit amet facilisis magna.
              <br />
              Neque laoreet suspendisse interdum consectetur libero id.
              <br />
              Nec ullamcorper sit amet risus nullam eget felis eget.
              <br />
              Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.
              <br />
              Euismod quis viverra nibh cras pulvinar mattis nunc.
              <br />
              Massa massa ultricies mi quis. Sit amet massa vitae tortor
              <br />
              condimentum lacinia. Et malesuada fames ac turpis egestas
              <br />
              integer eget. Elementum pulvinar etiam non quam lacus suspendisse
              <br />
              faucibus interdum posuere.
              <br />
              <br />
              Amet justo donec enim diam vulputate ut pharetra sit.
              <br />
              Risus ultricies tristique nulla aliquet enim tortor at auctor.
              <br />
              Velit sed ullamcorper morbi tincidunt ornare massa.
              <br />
              Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim
              <br />
              diam quis enim. Gravida neque convallis a cras. Ut enim blandit
              <br />
              volutpat maecenas volutpat. Mauris sit amet massa vitae tortor
              <br />
              condimentum lacinia quis vel
              <br />
            </p>
          </div>
        </div>
      </div>
      {imagesData.map(({ cls }) => (
        <img
          key={cls}
          src="../../assets/images/slide2/pink_sperm.png"
          alt="sperm"
          className={styles.slidePic + ' ' + cls + ' ' + (isAnimated ? styles.animated : '')}
        />
      ))}
    </div>
  );
};

export default SlideSecond;
