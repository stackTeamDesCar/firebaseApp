import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the login state domain
 */

// const selectLoginDomain = state => state.login || initialState;
const selectGlobal = state => state.global || initialState;
const selectAccessPage = state => state.accessPage;


/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const makeSelectCredentials = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData,
  );

const makeSelectErrorLogin = () =>
  createSelector(
    selectAccessPage,
    state => state.error,
  );

const makeSelectAccessMode = () =>
  createSelector(
    selectAccessPage,
    state => state.mode,
  );

export { 
  makeSelectCredentials, 
  makeSelectErrorLogin ,
  makeSelectAccessMode
};
