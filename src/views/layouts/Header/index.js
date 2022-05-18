import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>
        <Link to={`/posts?page=${0}`}>Home</Link>
      </div>
      <div>
        <Link to="/create">Create Post</Link>
      </div>
    </div>
  );
};

export default Header;
