import React from "react";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";
import { Subtitle } from "../components/FormStyled";

const ContactsView = () => {
  return (
    <>
      <Subtitle>Phonebook</Subtitle>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;
