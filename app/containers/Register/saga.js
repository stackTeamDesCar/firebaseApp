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
    if (rec) {//se la registrazione va bene, salvo i dati dell'utente in /users, con id come identificativo
      const uid = yield db.app.auth().currentUser.uid;
      db.ref('users/' + uid).set({
        email: user.email,
        password: user.password
      });
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

