import Link from "next/link";
import React from "react";
import styles from "../styles/Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <span className={styles.logo}>Go Bars</span>
        <div className={styles.mainPart}>
          <Link href='/home'>
            <span className={styles.link}>Home</span>
          </Link>
          <Link href='/shop' className={styles.link}>
            <span className={styles.link}>Shop</span>
          </Link>
          <Link href='/about' className={styles.link}>
            <span className={styles.link}>About</span>
          </Link>
          <Link href='/where-to-buy' className={styles.link}>
            <span className={styles.link}>Where to buy</span>
          </Link>
          <div className={styles.accountContainer}>
            <FontAwesomeIcon icon={faUser} className={styles.accountIcon} />
            <span className={styles.logIn}>Log In</span>
          </div>
          <div className={styles.shoppingContainer}>
            <FontAwesomeIcon
              icon={faShoppingBag}
              className={styles.shoppingIcon}
            />
            <span className={styles.numberOfItems}>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
