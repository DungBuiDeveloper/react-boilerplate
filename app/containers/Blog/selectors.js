/**
 * Blogpage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBlog = state => state.blog || initialState;

const makeSelectBlogs = () =>
  createSelector(
    selectBlog,
    blogState => blogState.blogs,
  );
const makeSelectBlog = () =>
  createSelector(
    selectBlog,
    blogState => blogState.blog,
  );
const makeSelectLoading = () =>
  createSelector(
    selectBlog,
    blogState => blogState.loading,
  );
const makeSelectError = () =>
  createSelector(
    selectBlog,
    blogState => blogState.error,
  );

export {
  selectBlog,
  makeSelectBlogs,
  makeSelectLoading,
  makeSelectError,
  makeSelectBlog,
};
