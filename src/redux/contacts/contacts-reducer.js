import { combineReducers } from "redux";
import * as actionTypes from "./contacts-types";

const doesContactExist = (contacts, name) => {
  if (contacts) return contacts.find((contact) => contact.name === name);
};

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      if (!doesContactExist(state, payload.name)) return [...state, payload];
      else {
        alert(`${payload} is already in contacts`);
        return state;
      }
    case actionTypes.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
