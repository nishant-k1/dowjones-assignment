import React from 'react';
import Loader from '../../components/Loader/index';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  retrievePostById,
  updatePostById,
} from 'services/features/posts/actions';
import PostForm from 'views/components/PostForm';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './index.module.css';

const UpdatePost = () => {
  const { loading, retrievedPostById } = useSelector((state) => state.posts);
  const { postId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(retrievePostById(postId));
  }, [dispatch, postId]);

  const [postValues, setPostValues] = React.useState({
    postId: retrievedPostById.id ? retrievedPostById.id : postId,
    userId: retrievedPostById.userId ? retrievedPostById.userId : '',
    title: retrievedPostById.title ? retrievedPostById.title : '',
    article: retrievedPostById.body ? retrievedPostById.body : '',
  });

  React.useEffect(() => {
    setPostValues({
      postId: retrievedPostById.id ? retrievedPostById.id : postId,
      userId: retrievedPostById.userId ? retrievedPostById.userId : '',
      title: retrievedPostById.title ? retrievedPostById.title : '',
      article: retrievedPostById.body ? retrievedPostById.body : '',
    });
  }, [retrievedPostById]);

  const handleChange = (event) => {
    setPostValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();

    dispatch(updatePostById(postValues));
    navigate('/', { replace: true });
  };

  return (
    <div>
      {!loading && <Loader height={'2rem'} width={'2rem'} color={'pink'} />}
      {loading && (
        <div className={styles.section}>
          <div className={styles.container}>
            <h3>Update A Post</h3>
            <PostForm
              value={postValues}
              onChange={handleChange}
              handleClick={handleClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePost;
