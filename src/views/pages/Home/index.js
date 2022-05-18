import React from 'react';
import { retrievePostList } from 'services/features/posts/actions';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../components/List/index';
import Loader from '../../components/Loader/index';

const Home = () => {
  const { loading, retrievedPostList } = useSelector((state) => state.posts);
  const descendingOrderSortedretrievedPostList = retrievedPostList.sort(
    (a, b) => b.id - a.id,
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(retrievePostList());
  }, [dispatch]);

  return (
    <div>
      {loading && <List list={descendingOrderSortedretrievedPostList} />}
      {!loading && <Loader height={'2rem'} width={'2rem'} color={'pink'} />}
    </div>
  );
};

export default Home;
