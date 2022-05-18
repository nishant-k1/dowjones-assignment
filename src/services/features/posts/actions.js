import {
  CREATE_POST,
  RETRIEVE_POST_LIST,
  RETRIEVE_POST_BY_ID,
  UPDATE_POST_BY_ID,
  DELETE_POST_BY_ID,
} from './types';

import {
  retrievePostListThunk,
  retrievePostByIdThunk,
  deletePostByIdThunk,
} from './operations';

export const retrievePostList = () => retrievePostListThunk();

export const retrievePostById = (postId) => retrievePostByIdThunk(postId);

export const createPost = (post) => ({});

export const updatePost = (postId) => ({
  type: UPDATE_POST_BY_ID,
  payload: {},
});

export const deletePost = (postId) => deletePostByIdThunk(postId);
