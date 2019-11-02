import React from 'react';
import styles from './Footer.module.css';
import SocBlock from "./socIcons/socBlock";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <span><h3>Никита Клепец</h3></span>
        <div className={styles.wrapper}>
          <SocBlock/>
          <SocBlock/>
          <SocBlock/>
          <SocBlock/>
        </div>
        <span><h3>@2019 Все права защищены</h3></span>
      </div>
    </div>
  );
}

export default Footer;
