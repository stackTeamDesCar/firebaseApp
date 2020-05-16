/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, take, takeLatest } from 'redux-saga/effects';
import { GET_DATA_LIST } from 'containers/HomePage/constants';
import { AUTO_LOGIN, SET_LOGOUT } from 'containers/App/constants';
import { login } from 'containers/AccessPage/actions';
import { setLogin, setLoading } from './actions';
import { makeSelectCredentials } from './selectors';
import { eventChannel } from 'redux-saga'
import firebase from 'firebase';
import { replace } from 'connected-react-router';
import { omit } from 'lodash';

function* getData() {
  // yield database.ref('/utenti').on('value', function (snapshot) {
  //   console.log(snapshot.val());
  // });
}

function* autoLogin() {
  const auth = yield firebase.auth();
  const database = firebase.database();

  const getId = new eventChannel(emiter => {
    const listener1 = auth.onAuthStateChanged(function (user) {
      if (user) {
        emiter({ id: user.uid || '' });
      } else {
        emiter({ id: null })
      }
    });
    return () => {
      listener1.off();
    };
  });

  const { id } = yield take(getId);
  if (!id) { 
    yield put(replace('/')); 
  }
  else{
    yield put(setLoading(false));
    yield put(replace('/homepage'));
  } //se l'utente non è loggato reindirizzo al login

  const getData = new eventChannel(emiter => {
    const listener2 = database.ref('/users/' + id).on('value', function (snapshot) {
      emiter({ data: snapshot.val() || {} });
    });
    return () => {
      listener2.off();
    };
  });

  while (true) {
    const { data } = yield take(getData);
    yield put(setLogin(_.omit(data, 'password')));
  }
}

function* logout() {
  const db = yield firebase.database();
  console.log('logout')
  try {
    yield db.app.auth().signOut();
    yield put(replace('/'));
  } catch (error) {
  }
}


export default function* defaultSaga() {
  yield takeLatest(GET_DATA_LIST, getData);
  yield takeLatest(AUTO_LOGIN, autoLogin);
  yield takeLatest(SET_LOGOUT, logout);


}

