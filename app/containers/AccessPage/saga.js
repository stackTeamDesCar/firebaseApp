/**
 * Gets the repositories of the user from Github
 */

import { call, put, take, select, takeLatest } from 'redux-saga/effects';
import { makeSelectCredentials } from './selectors';
import { setLogout, setError } from './actions';
import { setLogin, setLoading, autoLogin } from 'containers/App/actions';
import { setAccessMode } from 'containers/AccessPage/actions';
import firebase from 'firebase';
import { SIGNIN, LOGIN, } from './constants';
import { push, replace } from 'connected-react-router';
import { eventChannel } from 'redux-saga'
import { omit } from 'lodash';

function* login({ user }) {
  const db = yield firebase.database();
  try {
    const data = yield db.app.auth().signInWithEmailAndPassword(user.email, user.password);
    if (data) {

      yield put(setError(false));

      const uid = yield db.app.auth().currentUser.uid;
      yield put(autoLogin())

      // yield put(setLogin({ email: user.email, id: uid }))
      // yield put(replace('/homepage'));

    }
  } catch (error) {
    yield put(setError(true));
    console.log(error)
  } finally {
    yield put(setLoading(false));
  }
}

function* signIn({ userData }) {

  const db = yield firebase.database();
  try {
    const defaultPhoto = "https://www.securities-services.societegenerale.com/uploads/tx_bisgbio/default-profile.png";

    const data = yield db.app.auth().createUserWithEmailAndPassword(userData.email, userData.password);
    if (data) {
      yield put(setLoading(true));
      yield put(setError(false));

      const uid = data.user.uid;
      if (userData.photo) {
        yield db.app.storage().ref('avatar/' + uid).put(userData.photo);

      }

      const url = userData.photo ? yield db.app.storage().ref('avatar/' + uid).getDownloadURL() : defaultPhoto;
      yield db.ref('users/' + uid).set({
        name: userData.name,
        surname: userData.surname,
        email: userData.email,
        password: userData.password,
        id: uid,
        city: userData.city,
        username: userData.username,
        photo: url
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

