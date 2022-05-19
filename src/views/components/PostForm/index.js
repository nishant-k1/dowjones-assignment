import React from 'react';

import { formUtils } from 'views/utils/constants';

const PostForm = ({ value, handleClick, onChange }) => {
  const { userId, title, article, submit } = formUtils;

  return (
    <div>
      <label htmlFor="userId">{userId}</label>
      <input
        type="text"
        name="userId"
        value={value.userId}
        onChange={onChange}
      />
      <label htmlFor="title">{title}</label>
      <input type="text" name="title" value={value.title} onChange={onChange} />
      <label htmlFor="article">{article}</label>
      <textarea
        name="article"
        value={value.article}
        onChange={onChange}
        rows="4"
        cols="50"
      />
      <button onClick={handleClick} type="submit">
        {submit}
      </button>
    </div>
  );
};

export default PostForm;
