import {
  CREATE_POST,
  RETRIEVE_POST_LIST,
  RETRIEVE_POST_BY_ID,
  UPDATE_POST,
  DELETE_POST,
} from './types';

import { retrievePostListThunk, retrievePostByIdThunk } from './operations';

export const createPost = (post) => ({});

export const retrievePostList = () => retrievePostListThunk();

export const retrievePostById = (postId) => retrievePostByIdThunk(postId);

export const updatePost = (postId) => ({
  type: UPDATE_POST,
  payload: {},
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: {},
});
