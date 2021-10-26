import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/ADD', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/DELETE');
const changeFilter = createAction('contacts/FILTER');

export default { addContact, deleteContact, changeFilter };
