/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import {
  LOADING_BLOG,
  LOADING_REMOVE_BLOG,
  LOADING_ADD_BLOG,
  LOADING_BLOG_ID,
  LOADING_EDIT_BLOG,
} from './constants';
import request from 'utils/request';
import {
  postsLoaded,
  postsError,
  removedPost,
  addedPost,
  editedPost,
  postsLoadedId,
} from './actions';
import { API_ROOT } from 'containers/App/constants';

/**
 * Github repos request/response handler
 */
export function* getPost() {
  const requestURL = `${API_ROOT}/posts`;
  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);

    yield put(postsLoaded(data));
  } catch (err) {
    yield put(postsError(err.message));
  }
}

export function* getPostId(data) {
  const { id, initialize } = data;
  const requestURL = `${API_ROOT}/posts/${id}`;
  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);

    initialize(data);
    yield put(postsLoadedId(data));
  } catch (err) {
    yield put(postsError(err.message));
  }
}

export function* deletePost(action) {
  const requestURL = `${API_ROOT}/posts/${action.id}`;

  try {
    // Call our request helper (see 'utils/request')

    yield call(request, requestURL, { method: 'delete' });

    yield put(removedPost({ id: action.id }));
  } catch (err) {
    yield put(postsError(err.message));
  }
}

export function* addPost(action) {
  const requestURL = `${API_ROOT}/posts/`;
  const { history, data } = action;

  try {
    const res = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    yield put(editedPost({ res }));
    history.push('/blog');
  } catch (err) {
    yield put(postsError(err.message));
  }
}

export function* editPost(action) {
  const { history, data, id } = action;
  const requestURL = `${API_ROOT}/posts/${id}`;

  try {
    const res = yield call(request, requestURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    yield put(addedPost({ res }));
    history.push('/blog');
  } catch (err) {
    yield put(postsError(err.message));
  }
}

export default function* postData() {
  yield takeLatest(LOADING_BLOG, getPost),
    yield takeLatest(LOADING_ADD_BLOG, addPost),
    yield takeLatest(LOADING_EDIT_BLOG, editPost),
    yield takeLatest(LOADING_BLOG_ID, getPostId),
    yield takeLatest(LOADING_REMOVE_BLOG, deletePost);
}
