/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { REGISTRATION } from './constants';
import { push, replace } from 'connected-react-router';

import firebase from 'firebase';

function* registerUser({ userData }) {
  const db = yield firebase.database();
  try {
    const rec = yield db.app.auth().createUserWithEmailAndPassword(userData.email, userData.password);
    console.log(rec)
    if (rec) {
      yield put(replace('/login'));
    }
  }
  catch (error) {
    console.log(error)
  }
}

export default function* defaultSaga() {
  yield takeLatest(REGISTRATION, registerUser);
}

