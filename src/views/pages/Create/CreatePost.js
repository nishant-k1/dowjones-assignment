import React from 'react';
import { createPost } from '../../../services/features/posts/actions';
import { useDispatch } from 'react-redux';
import PostForm from '../../components/PostForm/index';

const CreatePost = () => {
  const dispatch = useDispatch();

  const [postValues, setPostValues] = React.useState({
    userId: '',
    title: '',
    article: '',
  });

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
    <PostForm
      value={postValues}
      onChange={handleChange}
      handleClick={handleClick}
    />
  );
};

export default CreatePost;
