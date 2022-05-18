import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ title, body, postId }) => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/view/${postId}`);
  };

  return (
    <div onClick={handleClick}>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={handleClick}>View</button>
      <MdDeleteSweep />
    </div>
  );
};

export default ListItem;
