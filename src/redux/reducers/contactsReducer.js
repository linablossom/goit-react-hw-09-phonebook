import {
  contactsAddRequest,
  contactsAddSuccess,
  contactsAddError,
  contactsDeleteRequest,
  contactsDeleteSuccess,
  contactsDeleteError,
  contactsFetchRequest,
  contactsFetchSuccess,
  contactsFetchError,
  userLogoutRequest,
} from "../actions";
import { createReducer, combineReducers } from "@reduxjs/toolkit";

const items = createReducer([], {
  [contactsFetchSuccess]: (state, { payload }) => {
    return payload;
  },
  [contactsAddSuccess]: (state, { payload }) => [...state, payload],
  [contactsDeleteSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
  [userLogoutRequest]: () => [],
});

const loading = createReducer(false, {
  [contactsFetchRequest]: (state) => true,
  [contactsFetchSuccess]: () => false,
  [contactsFetchError]: () => false,
  [contactsAddRequest]: () => true,
  [contactsAddSuccess]: () => false,
  [contactsAddError]: () => false,
  [contactsDeleteRequest]: () => true,
  [contactsDeleteSuccess]: () => false,
  [contactsDeleteError]: () => false,
});

export default combineReducers({ items, loading });
