import React, { useState, useEffect } from "react";
import styles from "../styles/Carousel.module.css";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  console.log(length);
  console.log(currentIndex);
  const next = () => {
    if (currentIndex < length - 4) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <button onClick={prev} className={styles.leftArrow}>
          &lt;
        </button>
        <div className={styles.carouselContentWrapper}>
          <div
            className={styles.carouselContent}
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {children}
          </div>
        </div>
        <button onClick={next} className={styles.rightArrow}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
