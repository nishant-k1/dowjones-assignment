import {
  CREATE_POST,
  RETRIEVE_POST_LIST,
  RETRIEVE_POST_BY_ID,
  UPDATE_POST,
  DELETE_POST,
} from './types';

const initialState = {
  loading: false,
  retrievedPostList: [],
  retrievedPostById: {},
  updatedPost: {},
  createdPost: {},
  deletedPost: {},
};

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case RETRIEVE_POST_LIST: {
      return {
        ...state,
        loading: true,
        retrievedPostList: [...payload],
      };
    }

    case RETRIEVE_POST_BY_ID: {
      return {
        ...state,
        loading: true,
        retrievedPostById: { ...payload },
      };
    }

    default:
      return {
        ...state,
      };
  }
};
