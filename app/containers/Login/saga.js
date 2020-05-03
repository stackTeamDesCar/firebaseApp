/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectCredentials } from './selectors';
import { setLogin, setLogout } from './actions';

import firebase from 'firebase';
import { SET_LOGOUT, LOGIN, AUTO_LOGIN } from './constants';
import { push, replace } from 'connected-react-router';

// const db =  firebase.database();


function* login({ user }) {
  const db = yield firebase.database();
  try {
    const signIn = yield db.app.auth().signInWithEmailAndPassword(user.email, user.password);
    console.log(signIn)
    if (signIn) {
      const uid = yield db.app.auth().currentUser.uid;

      yield put(setLogin({ email: user.email, password: user.password, id: uid }))
      yield put(replace('/'));
    }
  } catch (error) {
    console.log(error)
  }
}

function* logout() {
  const db = yield firebase.database();
  console.log('sagalogout')
  try {
    yield db.app.auth().signOut();
    yield put(replace('/login'));
  } catch (error) {
  }
}


export default function* defaultSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(SET_LOGOUT, logout);
}

