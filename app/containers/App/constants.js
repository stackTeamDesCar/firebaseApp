/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'App/LOAD_REPOS_ERROR';
export const AUTO_LOGIN = 'App/AUTO_LOGIN';
export const SET_LOGIN = 'App/SET_LOGIN';
export const SET_LOGOUT = 'App/SET_LOGOUT';
export const SET_LOADING = 'App/SET_LOADING';
export const EDIT_PHOTO_URL = 'App/EDIT_PHOTO_URL';
