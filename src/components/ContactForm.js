import React, { useState, useCallback } from "react";
import { contactsAdd } from "../redux/services/contactsApiService";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../redux/selectors/contactsSelectors";
import { Container, Label, Input, AddButton } from "./FormStyled";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const handleInputChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleInputChangeNumber = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onAddContact = useCallback(
    (e) => {
      e.preventDefault();

      const sameContact = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (sameContact) {
        alert(`${name} is already in contacts`);
        return;
      }

      dispatch(contactsAdd({ name, number }));
      setName("");
      setNumber("");
    },
    [name, number, contacts, dispatch]
  );

  return (
    <Container>
      <form onSubmit={onAddContact}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChangeName}
            pattern="^[A-ZA-ZА-ЯА-Я]+(([' -][A-ZA-ZА-ЯА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </form>
    </Container>
  );
};

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ).isRequired,
// };

export default ContactForm;
/*
class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onAddContact = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const sameContact = this.props.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (sameContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.props.addContact({ name, number });
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.onAddContact}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[A-ZA-ZА-ЯА-Я]+(([' -][A-ZA-ZА-ЯА-Я])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </Label>
          <AddButton type="submit">Add contact</AddButton>
        </form>
      </Container>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    contacts: getItems(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(contactsAdd(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
*/
