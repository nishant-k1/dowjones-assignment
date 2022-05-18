import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <React.Fragment>
      <div>Error 404</div>
      <div>The page you are looking for could not be found</div>
      <Link to="/">Go to the home page</Link>
    </React.Fragment>
  );
};

export default Error;
