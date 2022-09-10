import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/NewsLine.module.css";

const delay = 3000;

const phrases = [
  "FREE SHIPPING ON ORDERS OVER $40",
  "ORDER 2 BOXES AND SAVE 20%",
  "TRY OUR NEWEST FLAVOR",
];

const NewsLine = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={styles.newsLine}>
      <div className={styles.slideshow}>
        <div
          className={styles.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {phrases.map((phrase, index) => (
            <div className={styles.slide} key={index}>
              {phrase}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsLine;
