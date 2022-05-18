import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from 'services/features/posts/actions';

const ListItem = ({ title, body, postId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/posts/${postId}`, { replace: true });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deletePost(postId));
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={handleClick}>View</button>
      <MdDeleteSweep onClick={handleDelete} />
    </div>
  );
};

export default ListItem;
