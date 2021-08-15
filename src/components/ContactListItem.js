import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Contact, DeleteButton } from "./FormStyled";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  width: 394px;

  & + & {
    margin-top: 20px;
  }
`;

const ContactListItem = ({ contact, deleteContact }) => {
  const { id, name, number } = contact;
  return (
    <Container>
      <Contact>
        {name} {number}
      </Contact>
      <DeleteButton onClick={() => deleteContact(id)}>Delete</DeleteButton>
    </Container>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
