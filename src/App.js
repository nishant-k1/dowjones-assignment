import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { retrievePostList } from 'services/features/posts/actions';

function App() {
  const { loading, retrievedPostList } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(retrievePostList());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h1>POSTS</h1>
      <div>
        {loading && <div>{retrievedPostList.map((item) => item.title)}</div>}
      </div>
    </React.Fragment>
  );
}

export default App;
