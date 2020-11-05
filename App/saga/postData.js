import { call, takeLatest } from 'redux-saga/effects'
import { addContact } from '../api';
import { POST_DATA } from '../redux/action';

function* addNewContact(action) {
  try {
    yield call(addContact(action.payload));
  } catch (e) {
    console.log(e);
  }
}

export default function* newContact() {
  yield takeLatest(POST_DATA, addNewContact);
}
