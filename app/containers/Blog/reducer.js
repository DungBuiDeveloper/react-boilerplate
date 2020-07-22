/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  FETCH_BLOG,
  LOADING_BLOG,
  ERROR_BLOG,
  LOADING_REMOVE_BLOG,
  REMOVE_BLOG,
  ADD_BLOG,
  LOADING_ADD_BLOG,
  LOADING_BLOG_ID,
  FETCH_BLOG_ID,
  EDIT_BLOG,
  LOADING_EDIT_BLOG,
} from './constants';

// The initial state of the App
export const initialState = {
  blogs: null,
  loading: false,
  blog: null,
  error: null,
};

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i].id === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

/* eslint-disable default-case, no-param-reassign */
const blogReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_BLOG:
        draft.loading = false;
        draft.blogs = action.data;
        break;
      case LOADING_REMOVE_BLOG:
        draft.loading = true;
        break;
      case REMOVE_BLOG:
        draft.blogs = removeItemAll(state.blogs, action.id);
        draft.loading = false;
        break;
      case LOADING_BLOG:
        draft.loading = true;
        draft.error = false;
        break;
      case ERROR_BLOG:
        draft.loading = false;
        draft.error = action.error;
        break;
      case ADD_BLOG:
        draft.loading = false;
        break;
      case LOADING_ADD_BLOG:
        draft.loading = true;
        break;
      case LOADING_BLOG_ID:
        draft.loading = true;
        break;
      case FETCH_BLOG_ID:
        draft.blog = action.data;
        draft.loading = false;
        break;
      case LOADING_EDIT_BLOG:
        draft.loading = true;
        break;
      case EDIT_BLOG:
        draft.loading = false;
        break;
    }
  });
export default blogReducer;
