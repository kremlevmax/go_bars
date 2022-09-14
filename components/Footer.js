import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerConteiner}>
      <div className={styles.footer}>
        <div className={styles.footerSocials}>
          <h4>Follow us on:</h4>
        </div>
        <div className={styles.subscribe}>
          <h4>Subscribe to our newsletter</h4>
        </div>
        <div className={styles.contacts}>
          <h4>Contact Us:</h4>
          <span>123-456-7890 | info@mysite.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
