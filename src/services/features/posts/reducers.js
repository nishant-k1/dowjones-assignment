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
  updatedPost: false,
  createdPost: false,
  deletedPost: false,
};

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_POST: {
      const newPostList = state.retrievedPostList.push(payload);
      return {
        ...state,
        loading: true,
        retrievedPostList: [...newPostList],
        createdPost: true,
      };
    }

    case UPDATE_POST_BY_ID: {
      const updateList = [...state.retrievedPostList, payload];
      return {
        ...state,
        loading: true,
        retrievedPostList: [...updateList],
        createdPost: true,
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
        deletedPost: true,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
