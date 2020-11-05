import { combineReducers } from 'redux';
import { RECEIVE_DATA, POST_DATA, UPDATE_DATA } from '../action';

const contactList = (state = {}, { type, payload }) => {
  if (type === RECEIVE_DATA) {
    return payload;
  }
  return state;
};

const addContact = (state = {}, { type, payload }) => {
  if (type === POST_DATA) {
    return payload;
  }
  return state;
};

const updateData = (state = {}, { type, payload }) => {
  if (type === UPDATE_DATA) {
    return payload;
  }
  return state;
};

export default combineReducers({ contactList, addContact, updateData });
