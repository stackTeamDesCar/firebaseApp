/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { editPhotoUrl } from 'containers/App/actions';
import { setLoading } from 'containers/App/actions';
import { EDIT_PHOTO } from './constants';

import firebase from 'firebase';


function* editPhoto({user}) {
  yield put(setLoading(true));
  const db = yield firebase.database();
  try {
    yield db.app.storage().ref('avatar/' + user.uid).put(user.photo);
    const url = yield db.app.storage().ref('avatar/' + user.uid).getDownloadURL();
    yield put(editPhotoUrl(url));
    yield db.ref('users/' + user.uid).update({
      photo: url
    });
  }
  catch (error) {
    console.log(error)
  } finally {
    yield put(setLoading(false));
  }
}

export default function* defaultSaga() {
  yield takeLatest(EDIT_PHOTO, editPhoto);

}

