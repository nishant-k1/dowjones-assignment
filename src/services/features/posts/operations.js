import axios from 'axios';
import {
  CREATE_POST,
  RETRIEVE_POST_LIST,
  RETRIEVE_POST_BY_ID,
  UPDATE_POST_BY_ID,
  DELETE_POST_BY_ID,
} from './types';

export const createPostThunk = (postValues) => async (dispatch, getState) => {
  const postData = {
    userId: postValues.userId,
    title: postValues.title,
    body: postValues.article,
  };

  const requestConfig = {
    url: '/posts',
    method: 'POST',
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    responseType: 'json',
    data: { ...postData },
  };

  try {
    const res = await axios(requestConfig);
    if (res.status === 201) {
      dispatch({
        type: CREATE_POST,
        payload: { ...res.data },
      });
    }
  } catch (err) {}
};

export const updatePostByIdThunk =
  (postValues) => async (dispatch, getState) => {
    const postData = {
      id: postValues.postId,
      userId: postValues.userId,
      title: postValues.title,
      body: postValues.article,
    };

    const requestConfig = {
      url: `/posts/${postValues.postId}`,
      method: 'PUT',
      baseURL: 'https://jsonplaceholder.typicode.com',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      responseType: 'json',
      data: { ...postData },
    };

    try {
      const res = await axios(requestConfig);
      if (res.status === 200) {
        dispatch({
          type: UPDATE_POST_BY_ID,
          payload: { ...res.data },
        });
      }
    } catch (err) {}
  };

export const retrievePostListThunk = () => async (dispatch, getState) => {
  const requestConfig = {
    url: '/posts',
    method: 'GET',
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    responseType: 'json',
  };

  try {
    const res = await axios(requestConfig);
    if (res.status === 200) {
      dispatch({
        type: RETRIEVE_POST_LIST,
        payload: [...res.data],
      });
    }
  } catch (err) {}
};

export const retrievePostByIdThunk = (postId) => async (dispatch, getState) => {
  const requestConfig = {
    url: `/posts/${postId}`,
    method: 'GET',
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    responseType: 'json',
  };

  try {
    const res = await axios(requestConfig);
    if (res.status === 200) {
      dispatch({
        type: RETRIEVE_POST_BY_ID,
        payload: {
          ...res.data,
        },
      });
    }
  } catch (err) {}
};

export const deletePostByIdThunk = (postId) => async (dispatch, getState) => {
  const requestConfig = {
    url: `/posts/${postId}`,
    method: 'DELETE',
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    responseType: 'json',
  };

  try {
    const res = await axios(requestConfig);
    if (res.status === 200) {
      dispatch({
        type: DELETE_POST_BY_ID,
        payload: {
          postId,
        },
      });
    }
  } catch (err) {}
};
