import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import {Button, ListItem , ListItemText, ListItemIcon } from '@mui/material';
import { Phone } from '@mui/icons-material';

export const ContactListItem = ({ contact }) => {
    const dispatch = useDispatch();
    const { name, number, id } = contact;
    const handleDelete = () => dispatch(deleteContact(id));
    return (
        <ListItem>
            <ListItemIcon>
            <Phone fontSize='large' color='primary'/>
            </ListItemIcon>
            <ListItemText>
            <span>{name}</span>: <span>{number}</span>   
            </ListItemText>
            
             <Button 
             variant='outlined' 
             type='button' 
             className='ContactList_btn'
             onClick={handleDelete}
             >Delete</Button>   
        </ListItem>
    )
};

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired
    })
 
}



