import {
  CREATE_POST,
  RETRIEVE_POST_LIST,
  RETRIEVE_POST_BY_ID,
  UPDATE_POST_BY_ID,
  DELETE_POST_BY_ID,
} from './types';

const initialState = {
  loading: false,
  retrievedPostList: [],
  updatedPostList: [],
  retrievedPostById: {},
  updatedPost: null,
  createdPost: null,
  deletedPost: null,
};

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_POST: {
      const updatedList = [...state.retrievedPostList, payload];

      return {
        ...state,
        loading: true,
        updatedPostList: [...updatedList],
        createdPost: { ...payload },
      };
    }

    case UPDATE_POST_BY_ID: {
      const updatedList = state.retrievedPostList.filter(
        (item) => item.id !== payload.id,
      );

      return {
        ...state,
        loading: true,
        updatedPostList: [...updatedList, payload],
        updatedPost: { ...payload },
      };
    }

    case RETRIEVE_POST_LIST: {
      return {
        ...state,
        loading: true,
        retrievedPostList: [...payload],
        updatedPostList: [...payload],
      };
    }

    case RETRIEVE_POST_BY_ID: {
      return {
        ...state,
        loading: true,
        retrievedPostById: { ...payload },
      };
    }

    case DELETE_POST_BY_ID: {
      const updatedList = state.retrievedPostList.filter(
        (item) => item.id !== payload.postId,
      );

      return {
        ...state,
        loading: true,
        retrievedPostList: [...updatedList],
        updatedPostList: [...updatedList],
        deletedPost: { ...payload },
      };
    }

    default:
      return {
        ...state,
      };
  }
};
