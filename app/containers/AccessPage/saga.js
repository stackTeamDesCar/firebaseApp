/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectCredentials } from './selectors';
import { setLogout } from './actions';
import { setLogin } from 'containers/App/actions';

import firebase from 'firebase';
import { SIGNIN, LOGIN,  } from './constants';
import { push, replace } from 'connected-react-router';

// const db =  firebase.database();

function* login({ user }) {
  const db = yield firebase.database();
  try {
    const data = yield db.app.auth().signInWithEmailAndPassword(user.email, user.password);
    if (data) {
      const uid = yield db.app.auth().currentUser.uid;

      yield put(setLogin({ email: user.email, id: uid }))
      yield put(replace('/homepage'));
    }
  } catch (error) {
    console.log(error)
  }
}

function* signIn({ userData }) {
  const db = yield firebase.database();
  try {
    const rec = yield db.app.auth().createUserWithEmailAndPassword(userData.email, userData.password);
    if (rec) {//se la registrazione va bene, salvo i dati dell'utente in /users, con id come identificativo
    console.log(rec)
      const uid = rec.user.uid;
      db.ref('users/' + uid).set({
        email: userData.email,
        password: userData.password,
        id:  uid
      });
      yield put(replace('/homepage'));
    }
  }
  catch (error) {
    console.log(error)
  }
}

export default function* defaultSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(SIGNIN, signIn);

}

