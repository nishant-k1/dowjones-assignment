import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const Error = () => {
  return (
    <React.Fragment>
      <div className={styles.section}>
        <div className={styles.container}>
          <h1>Error 404</h1>
          <hr />
          <h2>The page you are looking for could not be found</h2>
          <Link to="/">Go to the home page</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Error;
