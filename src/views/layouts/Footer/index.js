import React from 'react';
import styles from './index.module.css';

const Footer = ({ details }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>{details}</div>
    </div>
  );
};

export default Footer;
