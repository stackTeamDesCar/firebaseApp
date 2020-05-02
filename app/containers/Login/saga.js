/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectCredentials } from './selectors';
import { setLogin, setLogout } from './actions';

import firebase from 'firebase';
import { SET_LOGOUT, LOGIN, AUTO_LOGIN } from './constants';

function* autoLogin() {
const db = yield firebase.database();

  // db.app.auth().currentUser.email;
  const userData = yield select(makeSelectCredentials());
  yield console.log('userData', userData);
  try {
    if (userData) {
       db.app.auth().signInWithEmailAndPassword(userData.email, userData.password)
        .then(user => console.log(user))
        .catch(err => console.log(err));
    } else return;
  } catch (error) {
    yield console.log(error);
  }
}

function* login({ email, password }) {
const db = yield firebase.database();

  
   yield db.app.auth().signInWithEmailAndPassword(email, password)
    .then(user => put(setLogin({ email: email, password: password, id: user.user.uid })))
    .catch(err => console.log(err));
}

function* logout() {
const db = yield firebase.database();

  yield db.app.auth().signOut();
  yield put(setLogout())
}


export default function* defaultSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(AUTO_LOGIN, autoLogin);
  yield takeLatest(SET_LOGOUT, logout);
}

