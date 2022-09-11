import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/MainBanner.module.css";

const MainBanner = () => {
  return (
    <div className={styles.MainBannerContainer}>
      <div className={styles.mainBanner}>
        <div className={styles.textContainer}>
          <p className={styles.header}>EAT WELL</p>
          <p className={styles.header}>LIVE WELL</p>
          <div className={styles.separator}></div>
          <p className={styles.textParagraph}>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            I’m a great place for you to tell a story and let your users know a
            little more about you
          </p>
          <Link href=''>
            <div className={styles.button}>Shop Now</div>
          </Link>
        </div>
        <Image src='/main_banner.png' layout='fill' alt='Main Banner' />
      </div>
    </div>
  );
};

export default MainBanner;

//#F4EBE2
//#E6E6E6
