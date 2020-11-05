import { receiveData } from '../redux/action';

const CONTACT_API = 'https://simple-contact-crud.herokuapp.com/contact';

export const getContact = async () => {
  try {
    const response = await fetch(CONTACT_API).then((res) => res.json());
    return response;
  } catch (error) {
    return null;
  }
};

export const addContact = (data) => {
  try {
    fetch(CONTACT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        photo:
          'https://www.detectiveconanworld.com/wiki/images/thumb/9/96/Kaito_Kuroba_Profile.jpg/275px-Kaito_Kuroba_Profile.jpg',
      }),
    }).then(() => {
      fetch(CONTACT_API)
        .then((response) => response.json())
        .then((result) => {
          receiveData({
            payload: result.data,
          });
        });
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = (id) => {
  try {
    fetch(`${CONTACT_API}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = (data) => {
  try {
    fetch(`${CONTACT_API}/${data.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        photo:
          'https://www.detectiveconanworld.com/wiki/images/thumb/9/96/Kaito_Kuroba_Profile.jpg/275px-Kaito_Kuroba_Profile.jpg',
      }),
    }).then(() => {
      fetch(CONTACT_API)
        .then((response) => response.json())
        .then((result) => {
          receiveData({
            payload: result.data,
          });
        });
    });
  } catch (error) {
    console.log(error);
  }
};
