import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePostById } from 'services/features/posts/actions';
import { FaEdit } from 'react-icons/fa';
import styles from './index.module.css';
import { imageLink } from 'views/utils/constants';
import { videoLink } from 'views/utils/constants';

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
    <div className={styles.card}>
      {postId % 2 !== 0 && <img src={imageLink} alt="some_img" />}
      {postId % 2 === 0 && (
        <iframe
          src={videoLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      )}
      <div className={styles.subCard}>
        <h3>{title}</h3>
        <p>{body}</p>
        <div>
          <button onClick={handleView}>View More</button>
          <FaEdit className={styles.icon} onClick={handleUpdate} />
          <MdDeleteSweep className={styles.icon} onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
