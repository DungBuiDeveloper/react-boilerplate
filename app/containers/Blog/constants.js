/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const FETCH_BLOG = 'boilerplate/blog/FETCH_BLOG';
export const LOADING_BLOG = 'boilerplate/blog/LOADING_BLOG';
export const LOADING_REMOVE_BLOG = 'boilerplate/blog/LOADING_REMOVE_BLOG';
export const REMOVE_BLOG = 'boilerplate/blog/REMOVE_BLOG';
export const ERROR_BLOG = 'boilerplate/blog/ERROR_BLOG';
export const ADD_BLOG = 'boilerplate/blog/ADD_BLOG';
export const LOADING_ADD_BLOG = 'boilerplate/blog/LOADING_ADD_BLOG';
export const LOADING_BLOG_ID = 'boilerplate/blog/LOADING_BLOG_ID';
export const FETCH_BLOG_ID = 'boilerplate/blog/FETCH_BLOG_ID';

export const EDIT_BLOG = 'boilerplate/blog/EDIT_BLOG';
export const LOADING_EDIT_BLOG = 'boilerplate/blog/LOADING_EDIT_BLOG';
