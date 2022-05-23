import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const Loader = ({ height, width, color }) => {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BiLoaderAlt style={{ height: height, width: width, color: color }} />
    </div>
  );
};

export default Loader;
