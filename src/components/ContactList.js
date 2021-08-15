import React, { useEffect, useCallback } from "react";
import {
  contactsFetch,
  contactsDelete,
} from "../redux/services/contactsApiService";
import { useSelector, useDispatch } from "react-redux";
import ContactListItem from "./ContactListItem";
import {
  getFilteredArray,
  getLoading,
} from "../redux/selectors/contactsSelectors";
import Loading from "./Loading";

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredArray);
  const loading = useSelector(getLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsFetch());
  }, [dispatch]);

  const deleteItem = useCallback(
    (id) => {
      dispatch(contactsDelete(id));
    },
    [dispatch]
  );

  if (loading) return <Loading>Loading...</Loading>;

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactListItem
          contact={contact}
          key={contact.id}
          deleteContact={deleteItem}
        />
      ))}
    </ul>
  );
};

export default ContactList;
