import React from 'react';
import CreatePostUI from 'views/components/CreatePostUI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const { loading, createdPost } = useSelector((state) => state.posts);

  if (loading && createdPost) {
    navigate('/', { replace: true });
  }
  return (
    <div>
      <CreatePostUI />
    </div>
  );
};

export default CreatePost;
