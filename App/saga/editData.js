import { call, takeLatest } from 'redux-saga/effects'
import { updateContact } from '../api';
import { UPDATE_DATA } from '../redux/action';

function* editContact(action) {
  try {
    yield call(updateContact(action.payload));
  } catch (e) {
    console.log(e);
  }
}

export default function* updateData() {
  yield takeLatest(UPDATE_DATA, editContact);
}
