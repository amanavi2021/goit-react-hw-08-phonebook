import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ConstactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectIsLoading } from 'redux/contacts/selectors';
import {
  Container,
  PhonebookTitle,
  ContactsTitle,
} from 'components/App.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {isLoading && <b>Request in progress...</b>}
      <ContactList />
    </Container>
  );
};
export default Contacts;
