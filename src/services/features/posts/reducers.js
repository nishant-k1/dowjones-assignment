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
  retrievedPostById: {},
  updatedPost: null,
  createdPost: null,
  deletedPost: null,
};

export const postsReducer = (state = initialState, { type, payload }) => {
  const updatedList = [...state.retrievedPostList, payload];
  switch (type) {
    case CREATE_POST: {
      return {
        ...state,
        loading: true,
        retrievedPostList: [...updatedList],
        createdPost: { ...payload },
      };
    }

    case UPDATE_POST_BY_ID: {
      const updatedList = [...state.retrievedPostList, payload];
      return {
        ...state,
        loading: true,
        retrievedPostList: [...updatedList],
        updatedPost: { ...payload },
      };
    }

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

    case DELETE_POST_BY_ID: {
      const newPostList = state.retrievedPostList.filter(
        (item) => item.id !== payload.postId,
      );

      return {
        ...state,
        loading: true,
        retrievedPostList: [...newPostList],
        deletedPost: { ...payload },
      };
    }

    default:
      return {
        ...state,
      };
  }
};
