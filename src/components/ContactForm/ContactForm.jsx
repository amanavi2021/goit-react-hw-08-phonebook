import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  ContactsForm
} from './ContactForm.styled';
import {Button, TextField } from '@mui/material';


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactNames = contacts.map(contact => contact.name);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isExist = contactNames.includes(name);
    if (isExist) {
      return alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({name, number}));
    }
    form.reset();
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
        <TextField
        label="Name"
        variant='standard'
        margin='normal'
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
        label="Number"
        variant='standard'
        margin='normal'
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      <Button variant="contained" type="submit">Add contact</Button>
    </ContactsForm>
  );
};
