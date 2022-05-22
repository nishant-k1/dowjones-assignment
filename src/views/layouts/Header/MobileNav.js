import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './MobileNav.module.css';

const MobileNav = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <GiHamburgerMenu className={styles.icon} />
        <h1>Mansion Global</h1>
        <AiOutlineSearch className={styles.icon} />
      </div>
    </div>
  );
};

export default MobileNav;
