import axios from 'axios';
import {
  CREATE_POST,
  RETRIEVE_POST_LIST,
  RETRIEVE_POST_BY_ID,
  UPDATE_POST,
  DELETE_POST,
} from './types';

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
  } catch (err) {
    console.log(err);
  }
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
  } catch (err) {
    console.log(err);
  }
};
