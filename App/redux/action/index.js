export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const POST_DATA = 'POST_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export const requestData = () => ({ type: REQUEST_DATA });

export const receiveData = (data) => ({
  type: RECEIVE_DATA,
  payload: data,
});

export const postData = (newContact) => ({
  type: POST_DATA,
  payload: newContact,
});

export const deleteData = (toDeleteId) => ({
  type: DELETE_DATA,
  payload: toDeleteId,
});

export const updateData = (data) => ({
  type: UPDATE_DATA,
  payload: data,
});
