// import { CONTACTS_ADD, CONTACTS_DELETE } from "../actionTypes";
import { createAction } from "@reduxjs/toolkit";

export const contactsFetchRequest = createAction(
  "contacts/contactsFetchRequest"
);
export const contactsFetchSuccess = createAction(
  "contacts/contactsFetchSuccess"
);
export const contactsFetchError = createAction("contacts/contactsFetchError");

export const contactsAddRequest = createAction("contacts/contactsAddRequest");
export const contactsAddSuccess = createAction("contacts/contactsAddSuccess");
export const contactsAddError = createAction("contacts/contactsAddError");

export const contactsDeleteRequest = createAction(
  "contacts/contactsDeleteRequest"
);
export const contactsDeleteSuccess = createAction(
  "contacts/contactsDeleteSuccess"
);
export const contactsDeleteError = createAction("contacts/contactsDeleteError");

// export const contactsAdd = createAction(CONTACTS_ADD);

// export const contactsAdd = (contact) => ({
//   type: CONTACTS_ADD,
//   payload: contact,
// });

// export const contactsDelete = createAction(CONTACTS_DELETE);

// export const contactsDelete = (id) => ({
//   type: CONTACTS_DELETE,
//   payload: id,
// });
