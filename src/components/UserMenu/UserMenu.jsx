import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserName, Wrapper } from './UserMenu.styled';
import {Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Wrapper>
      <AccountCircle fontSize='large'/>
      <UserName> {user.email}</UserName>
      <Button variant="contained" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
