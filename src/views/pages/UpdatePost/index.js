import React from 'react';
import Loader from '../../components/Loader/index';
import { useSelector } from 'react-redux';

const UpdatePost = () => {
  const { loading, retrievedPostById } = useSelector((state) => state.posts);

  return (
    <div>
      {!loading && <Loader height={'2rem'} width={'2rem'} color={'pink'} />}
      {loading && (
        <React.Fragment>
          <label htmlFor="userId">User Id</label>
          <input name="userId" value={retrievedPostById.id} />
          <label htmlFor="title">Title</label>
          <input name="title" value={retrievedPostById.title} />
          <label htmlFor="body">Title</label>
          <input name="body" value={retrievedPostById.body} />
        </React.Fragment>
      )}
    </div>
  );
};

export default UpdatePost;
