import React from 'react';
import { retrievePostById } from 'services/features/posts/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/index';
import { useParams } from 'react-router-dom';
import UpdatePost from './UpdatePost';

const View = () => {
  const { postId } = useParams();
  const { loading, retrievedPostById } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(retrievePostById(postId));
  }, [dispatch, postId]);

  const [updatePageStatus, setUpdatePageState] = React.useState(false);

  return (
    <div>
      {!loading && <Loader height={'2rem'} width={'2rem'} color={'pink'} />}
      {loading && !updatePageStatus && (
        <React.Fragment>
          <h2>{retrievedPostById.id}</h2>
          <h3>{retrievedPostById.title}</h3>
          <p>{retrievedPostById.body}</p>
          <button
            onClick={() => {
              setUpdatePageState(true);
            }}
          >
            Edit
          </button>
        </React.Fragment>
      )}
      {loading && updatePageStatus && <UpdatePost postId={postId} />}
    </div>
  );
};

export default View;
