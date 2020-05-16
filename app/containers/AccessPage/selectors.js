import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.login || initialState;
const selectGlobal = state => state.global || initialState;


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
    selectLoginDomain,
    loginState => loginState.error,
  );



export { selectLoginDomain, makeSelectCredentials, makeSelectErrorLogin };
