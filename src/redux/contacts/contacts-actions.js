import * as actionTypes from "./contacts-types";
import { v4 as uuidv4 } from "uuid";

export const addContact = (name, number) => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
});

export const deleteContact = (id) => ({
  type: actionTypes.DELETE,
  payload: id,
});

export const changeFilter = (value) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
