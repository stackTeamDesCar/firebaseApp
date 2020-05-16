/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectCredentials } from './selectors';
import { setLogout, setError } from './actions';
import { setLogin, setLoading } from 'containers/App/actions';
import { setAccessMode } from 'containers/AccessPage/actions';
import firebase from 'firebase';
import { SIGNIN, LOGIN, } from './constants';
import { push, replace } from 'connected-react-router';

// const db =  firebase.database();

function* login({ user }) {
  const db = yield firebase.database();
  try {
    const data = yield db.app.auth().signInWithEmailAndPassword(user.email, user.password);
    if (data) {

      yield put(setError(false));

      const uid = yield db.app.auth().currentUser.uid;

      yield put(setLogin({ email: user.email, id: uid }))
      yield put(replace('/homepage'));
      yield put(setLoading(false));

    }
  } catch (error) {
    yield put(setError(true));
    yield put(setLoading(false));
    console.log(error)
  }
}

function* signIn({ userData }) {

  const db = yield firebase.database();
  try {
    const data = yield db.app.auth().createUserWithEmailAndPassword(userData.email, userData.password);
    if (data) {//se la registrazione va bene, salvo i dati dell'utente in /users, con id come identificativo
      yield put(setLoading(true));

      yield put(setError(false));

      const uid = data.user.uid;
      db.ref('users/' + uid).set({
        email: userData.email,
        password: userData.password,
        id: uid,
        city: userData.city,
        username: userData.username
      });
      yield db.app.auth().signOut();
      yield put(setAccessMode('login'));
    } 
  }
  catch (error) {
    console.log(error)
    yield put(setError(true));

  } finally {
    yield put(setLoading(false));
  }
}

export default function* defaultSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(SIGNIN, signIn);

}

