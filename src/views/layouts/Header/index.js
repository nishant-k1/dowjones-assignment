import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <React.Fragment>
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
      <div className={styles.section}>
        <div className={`${styles.container} ${styles.midHeader}`}>
          <h1>
            mansion <span>global</span>
          </h1>
          <div>
            <Link className={styles.link} to={`/posts?page=${0}`}>
              NEWS
            </Link>
            <Link className={styles.link} to={`/posts?page=${0}`}>
              TOP MARKETS
            </Link>
            <Link className={styles.link} to={`/posts?page=${0}`}>
              NEW DEVELOPMENTS
            </Link>
            <Link className={styles.link} to={`/posts?page=${0}`}>
              MORE
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={`${styles.container} ${styles.bottomHeader}`}>
          <div>
            <select name="Buy" id="1">
              <option value="1">Buy</option>
              <option value="2">Rent</option>
            </select>
            <input placeholder="Select A Location" />
            <AiOutlineSearch className={styles.icon} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
