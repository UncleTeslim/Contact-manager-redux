import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';
import axios from 'axios';


let url = 'https://jsonplaceholder.typicode.com/users';

export const getContacts = () => async dispatch => {
  const res = await axios.get(url);
  dispatch ({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  await axios.delete(url+'/'+id);
  dispatch ({
    type: DELETE_CONTACT,
    payload:id
  });
};

export const addContact = contact => async dispatch => {
  const res =  await axios.post(url, contact)
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};