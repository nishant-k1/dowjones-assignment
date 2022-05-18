import axios from 'axios';
import { RETRIEVE_POST_LIST } from './types';

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
