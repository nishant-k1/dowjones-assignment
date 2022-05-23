import React from 'react';
import { retrievePostById } from 'services/features/posts/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/index';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import styles from './index.module.css';
import { videoLink } from 'views/utils/constants';

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
          <div className={styles.section}>
            <iframe
              className={styles.post}
              src={videoLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className={`${styles.section} ${styles.midSection}`}>
            <div className={styles.container}>
              <h2>User Id: {retrievedPostById.id}</h2>
              <h3>{retrievedPostById.title}</h3>
              <p>{retrievedPostById.body}</p>
              <button
                onClick={() => {
                  // navigate(`/posts/update/${postId}`, { replace: true });
                  navigate(`/posts`, { replace: true });
                }}
              >
                Back
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ViewPost;
