import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, loginFailure } from '~/store/modules/auth/actions';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(user, token));
  } catch (err) {
    let dataIsWrong = false;
    const emailAlreadyExists = false;
    let serverIsDown = false;
    let message = '';

    switch (err.message) {
      case 'Request failed with status code 400':
      case 'Request failed with status code 401':
      case 'Request failed with status code 404':
        dataIsWrong = true;
        serverIsDown = false;
        message = 'Authentication failure! Please, check your data.';
        break;
      case 'Request failed with status code 500':
        dataIsWrong = false;
        serverIsDown = true;
        message = 'Server error. Please try again later';
        break;

      default:
        break;
    }
    yield put(
      loginFailure(emailAlreadyExists, dataIsWrong, serverIsDown, message)
    );
  }
}

function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, '/users', {
      name,
      email,
      password,
    });

    yield signIn({ payload: { email, password } });
  } catch (err) {
    let emailAlreadyExists = false;
    const dataIsWrong = false;
    let serverIsDown = false;
    let message = '';

    switch (err.message) {
      case 'Request failed with status code 400':
        emailAlreadyExists = true;
        serverIsDown = false;
        message =
          'This email has already been used! Please, choose another one.';
        break;
      case 'Request failed with status code 500':
        emailAlreadyExists = false;
        serverIsDown = true;
        message = 'Server error. Please try again later';
        break;

      default:
        break;
    }
    yield put(
      loginFailure(emailAlreadyExists, dataIsWrong, serverIsDown, message)
    );
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
