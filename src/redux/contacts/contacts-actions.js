import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
}));

export const deleteContact = createAction("contacts/delete");

export const changeFilter = createAction("contacts/filter");
