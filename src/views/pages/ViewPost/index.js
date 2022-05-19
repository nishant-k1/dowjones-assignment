import React from 'react';
import { retrievePostById } from 'services/features/posts/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/index';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

const ViewPost = () => {
  const { postId } = useParams();
  const { loading, retrievedPostById } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(retrievePostById(postId));
  }, [dispatch, postId]);

  return (
    <div>
      {!loading && <Loader height={'2rem'} width={'2rem'} color={'pink'} />}
      {loading && (
        <React.Fragment>
          <h2>{retrievedPostById.id}</h2>
          <h3>{retrievedPostById.title}</h3>
          <p>{retrievedPostById.body}</p>
          <FaEdit
            onClick={() => {
              navigate(`/posts/update/${postId}`, { replace: true });
            }}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default ViewPost;
