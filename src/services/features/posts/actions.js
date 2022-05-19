import {
  retrievePostListThunk,
  retrievePostByIdThunk,
  deletePostByIdThunk,
  createPostThunk,
  updatePostByIdThunk,
} from './operations';

export const retrievePostList = () => retrievePostListThunk();

export const retrievePostById = (postId) => retrievePostByIdThunk(postId);

export const createPost = (postValues) => createPostThunk(postValues);

export const updatePost = (postValues) => updatePostByIdThunk(postValues);

export const deletePost = (postId) => deletePostByIdThunk(postId);
