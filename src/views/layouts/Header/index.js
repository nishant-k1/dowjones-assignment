import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const Header = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div>
          <Link className={styles.link} to={`/posts?page=${0}`}>
            Home
          </Link>
        </div>
        <div>
          <Link className={styles.link} to="/create">
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
