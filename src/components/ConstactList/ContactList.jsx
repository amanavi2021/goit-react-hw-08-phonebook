import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
   
   const filtredContacts = useSelector(selectVisibleContacts);

   return (
  <ul className='ContactList'>
    {filtredContacts.map(contact => 
    <ContactListItem
    key={contact.id}
    contact={contact}
    />
    )}
  </ul>
  )
};

