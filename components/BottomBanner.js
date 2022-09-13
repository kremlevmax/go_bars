import Image from "next/image";
import React from "react";
import styles from "../styles/BottomBanner.module.css";

const BottomBanner = () => {
  return (
    <div className={styles.bottomBannerWrapper}>
      <div className={styles.bottomBanner}>
        <div className={styles.banner1}>
          <div className={styles.bottomBannerImage}>
            <Image
              src='/bottomBanner/banner_01.png'
              alt='Banner'
              layout='responsive'
              width={540}
              height={520}
            />
          </div>
          <div className={styles.bottomBannerText1}>
            <p className={styles.textFirstLine}>Order 2 Boxes</p>
            <p className={styles.textSecondLine}>SAVE 20%</p>
            <p className={styles.textSeparator}></p>
            <p className={styles.textParagraph}>
              I&apos;m a paragraph . Double click here or click Edit Text to add
              some text of your own or to change the font. Tell your visitors a
              bit about your services.
            </p>
          </div>
        </div>
        <div className={styles.banner2}>
          <div className={styles.bottomBannerText2}>
            <p className={styles.textFirstLine}>Try Our</p>
            <p className={styles.textSecondLine}>NEWEST FLAVOR</p>
            <p className={styles.textSeparator}></p>
            <p className={styles.textParagraph}>
              I&apos;m a paragraph . Double click here or click Edit Text to add
              some text of your own or to change the font. Tell your visitors a
              bit about your services.
            </p>
          </div>
          <div className={styles.bottomBannerImage}>
            <Image
              src='/bottomBanner/banner_02.png'
              alt='Banner'
              layout='responsive'
              width={540}
              height={520}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
