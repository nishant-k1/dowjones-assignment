import React from 'react';
import { retrievePostById } from 'services/features/posts/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/index';
import { useParams } from 'react-router-dom';

const ViewPost = () => {
  const { postId } = useParams();
  const { loading, retrievedPostById } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(retrievePostById(postId));
  }, [dispatch, postId]);

  return (
    <div>
      {loading && <h3>{retrievedPostById.title}</h3>}
      {!loading && <Loader height={'2rem'} width={'2rem'} color={'pink'} />}
    </div>
  );
};

export default ViewPost;
