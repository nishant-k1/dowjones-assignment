import React from 'react';
import styles from './index.module.css';

import { formUtils } from 'views/utils/constants';

const PostForm = ({ value, handleClick, onChange }) => {
  const { userId, title, article, submit } = formUtils;

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h3>Create A Post</h3>
        <div>
          <label htmlFor="userId">{userId}</label>
          <input
            type="text"
            name="userId"
            value={value.userId}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="title">{title}</label>
          <input
            type="text"
            name="title"
            value={value.title}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="article">{article}</label>
          <textarea
            name="article"
            value={value.article}
            onChange={onChange}
            rows="4"
            cols="50"
          />
        </div>
        <button onClick={handleClick} type="submit">
          {submit}
        </button>
      </div>
    </div>
  );
};

export default PostForm;
