import React from 'react';
import { formUtils } from 'views/utils/constants';
import { createPost } from '../../../services/features/posts/actions';
import { useDispatch } from 'react-redux';

const CreatePost = () => {
  const dispatch = useDispatch();

  const [postValues, setPostValues] = React.useState({
    userId: '',
    title: '',
    article: '',
  });

  const { userId, title, article, submit } = formUtils;

  const handleChange = (event) => {
    setPostValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(createPost(postValues));
  };

  return (
    <div>
      <React.Fragment>
        <label htmlFor="userId">{userId}</label>
        <input
          type="text"
          name="userId"
          value={postValues.userId}
          onChange={handleChange}
        />
        <label htmlFor="title">{title}</label>
        <input
          type="text"
          name="title"
          value={postValues.title}
          onChange={handleChange}
        />
        <label htmlFor="article">{article}</label>
        <textarea
          name="article"
          value={postValues.article}
          onChange={handleChange}
          rows="4"
          cols="50"
        />
        <button onClick={handleClick} type="submit">
          {submit}
        </button>
      </React.Fragment>
    </div>
  );
};

export default CreatePost;
