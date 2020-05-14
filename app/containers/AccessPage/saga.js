/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectCredentials } from './selectors';
import { setLogout } from './actions';
import { setLogin } from 'containers/App/actions';

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
      yield put(replace('/homepage'));
    }
  } catch (error) {
    console.log(error)
  }
}

export default function* defaultSaga() {
  yield takeLatest(LOGIN, login);
}
