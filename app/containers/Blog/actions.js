/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

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

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function loadingBlog() {
  return {
    type: LOADING_BLOG,
  };
}

export function postsLoaded(data) {
  return {
    type: FETCH_BLOG,
    data,
  };
}

export function loadingBlogId(id, initialize) {
  return {
    type: LOADING_BLOG_ID,
    id,
    initialize,
  };
}

export function postsLoadedId(data) {
  return {
    type: FETCH_BLOG_ID,
    data,
  };
}

export function postsError(error) {
  return {
    type: ERROR_BLOG,
    error,
  };
}

export function removePost(id) {
  return {
    type: LOADING_REMOVE_BLOG,
    id,
  };
}

export function removedPost(data) {
  return {
    type: REMOVE_BLOG,
    id: data.id,
  };
}

export function addPost(data, history) {
  return {
    type: LOADING_ADD_BLOG,
    data,
    history,
  };
}

export function addedPost(data) {
  return {
    type: ADD_BLOG,
    data: data.res,
  };
}

export function editPost(data, history, id) {
  return {
    type: LOADING_EDIT_BLOG,
    data,
    history,
    id,
  };
}

export function editedPost(data) {
  return {
    type: EDIT_BLOG,
    data: data.res,
  };
}
