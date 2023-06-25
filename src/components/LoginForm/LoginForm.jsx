import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form } from './LoginForm.styled';
import { TextField, Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField label="Email" margin="normal" type="email" name="email" />
      <TextField
        label="Password"
        margin="normal"
        type="password"
        name="password"
      />
      <Button variant="contained" type="submit">
        Log In
      </Button>
    </Form>
  );
};
