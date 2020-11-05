import { call, put, takeLatest } from 'redux-saga/effects'
import { getContact } from '../api';
import { receiveData, REQUEST_DATA } from '../redux/action';

function* fetchData() {
  try {
    const response = yield call(getContact);
    yield put(receiveData(response.data));
  } catch (e) {
    console.log(e);
  }
}

export default function* getData() {
  yield takeLatest(REQUEST_DATA, fetchData);
}
