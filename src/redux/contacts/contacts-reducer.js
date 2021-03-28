import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";

const doesContactExist = (contacts, name) => {
  if (contacts) return contacts.find((contact) => contact.name === name);
};

const addContact = (state, payload) => {
  if (!doesContactExist(state, payload.name)) return [...state, payload];
  else {
    alert(`${payload.name} is already in contacts`);
    return state;
  }
};

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => addContact(state, payload),
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contacts,
  filter: filter,
});
