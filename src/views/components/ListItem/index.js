import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePostById } from 'services/features/posts/actions';
import { FaEdit } from 'react-icons/fa';
import ListItemStyels from './index.module.css';
import { imageLink } from 'views/utils/constants';

const ListItem = ({ title, body, postId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleView = (event) => {
    event.preventDefault();
    navigate(`/posts/view/${postId}`, { replace: true });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deletePostById(postId));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    navigate(`/posts/update/${postId}`, { replace: true });
  };

  return (
    <div className={ListItemStyels.card}>
      <div>
        <img src={imageLink} alt="some_img" />
      </div>
      <div className={ListItemStyels.subCard}>
        <h2>{title}</h2>
        <p>{body}</p>
        <div>
          <button onClick={handleView}>View</button>
          <FaEdit onClick={handleUpdate} />
          <MdDeleteSweep onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
