import { api } from "../../api";
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
} from "../actions/contactsActions";

export const contactsFetch = () => async (dispatch) => {
  dispatch(contactsFetchRequest());

  try {
    const { data } = await api.get("/contacts");
    dispatch(contactsFetchSuccess(data));
  } catch (error) {
    dispatch(contactsFetchError(error));
  }
};

export const contactsAdd = ({ name, number }) => async (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(contactsAddRequest());

  try {
    const { data } = await api.post("/contacts", contact);

    dispatch(contactsAddSuccess(data));
  } catch (error) {
    dispatch(contactsAddError(error));
  }

  // axios
  //   .post("/contacts", contact)
  //   .then(({ data }) => dispatch(contactsAddSuccess(data)))
  //   .catch((error) => dispatch(contactsAddError(error)));
};

export const contactsDelete = (id) => async (dispatch) => {
  dispatch(contactsDeleteRequest());

  api
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsDeleteSuccess(id)))
    .catch((error) => dispatch(contactsDeleteError(error)));
};
