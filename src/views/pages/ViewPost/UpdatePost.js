import React from 'react';
import Loader from '../../components/Loader/index';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updatePostByIdThunk } from 'services/features/posts/operations';
import { retrievePostById } from 'services/features/posts/actions';
import PostForm from 'views/components/PostForm';

const UpdatePost = ({ postId }) => {
  const { loading, retrievedPostById } = useSelector((state) => state.posts);
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

  const handleChange = (event) => {
    setPostValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(updatePostByIdThunk(postValues));
  };

  return (
    <div>
      {!loading && <Loader height={'2rem'} width={'2rem'} color={'pink'} />}
      {loading && (
        <PostForm
          value={postValues}
          onChange={handleChange}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default UpdatePost;
