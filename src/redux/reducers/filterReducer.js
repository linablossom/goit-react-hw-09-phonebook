import { contactsFilter, userLogoutRequest } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = "";

const filterReducer = createReducer(initialState, {
  [contactsFilter]: (state, { payload }) => payload,
  [userLogoutRequest]: () => "",
});

export default filterReducer;
