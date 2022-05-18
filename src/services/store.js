import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './features/posts/reducers';

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
