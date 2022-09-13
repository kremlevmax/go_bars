import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/SignUpBanner.module.css";

const SignUpBanner = () => {
  return (
    <div className={styles.signUpBannerContainer}>
      <Image
        src='/signUpBanner/signUpBunner_01.png'
        layout='fill'
        alt='Sign Up Banner'
        objectFit='fill'
      />
      <div className={styles.signUpBanner}>
        <p className={styles.firstLine}>Sign up for Our Newsletter</p>
        <p className={styles.secondLine}>FOR SOME HEALTHY TIPS</p>
        <Link href=''>
          <div className={styles.button}>Sign Up</div>
        </Link>
      </div>
    </div>
  );
};

export default SignUpBanner;
