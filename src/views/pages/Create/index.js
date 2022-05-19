import React from 'react';
import CreatePostUI from 'views/pages/Create/CreatePost';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const { loading, createdPost } = useSelector((state) => state.posts);
  const [searchParams, setSearchParams] = useSearchParams();

  if (loading && createdPost) {
    navigate(-1, { replace: true });
  }
  return (
    <div>
      <CreatePostUI />
    </div>
  );
};

export default Create;
