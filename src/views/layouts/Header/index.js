import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Header = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.startItems}>
          <Link className={styles.link} to={`/posts?page=${0}`}>
            ABOUT
          </Link>
          <Link className={styles.link} to="/create">
            ADVERTISE WITH US
          </Link>
        </div>

        <div className={styles.midItems}>
          <div>
            <Link className={styles.link} to={`/posts?page=${0}`}>
              ENGLISH
            </Link>
            <RiArrowDropDownLine className={styles.icon} />
          </div>
          <div>
            <Link className={styles.link} to="/create">
              $ USD
            </Link>
            <RiArrowDropDownLine className={styles.icon} />
          </div>
        </div>

        <div className={styles.endItem}>
          <Link className={styles.link} to="/create">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
