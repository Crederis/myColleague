import { fork } from 'redux-saga/effects';
import getData from './getData';
import newContact from './postData';
import deleteData from './deleteData';
import updateData from './editData';

export function* rootSaga() {
  yield fork(getData);
  yield fork(newContact);
  yield fork(deleteData);
  yield fork(updateData);
}
