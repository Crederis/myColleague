import { call, takeLatest } from 'redux-saga/effects'
import { deleteContact } from '../api';
import { DELETE_DATA } from '../redux/action';

function* deleteDataContact(action) {
  try {
    yield call(deleteContact(action.payload));
  } catch (e) {
    console.log(e);
  }
}

export default function* deleteData() {
  yield takeLatest(DELETE_DATA, deleteDataContact);
}
