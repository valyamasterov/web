import React from "react";
import styles from "./FooterContainer.module.css";

const FooterContainer = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src="images/logo.png"></img>
        </div>
        <div>
          <span className={styles.columntitle}>Help</span>
          <div className={styles.footerlinks}>
            <a href="">FAQ</a>
            <a href="">Contact us</a>
            <a href="">Terms of use</a>
            <a href="">Privacy policy</a>
          </div>
        </div>
        <div>
          <span className={styles.columntitle}>Our offices</span>
          <div className={styles.footerlinks}>
            <span>Kronvalda bulvāris 4</span>
            <span>Centra rajons, Rīga, LV-1010</span>
          </div>
        </div>
        <div>
          <span className={styles.columntitle}>Our email</span>
          <div className={styles.footerlinks}>
            <a href="">info@carculator.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContainer;
