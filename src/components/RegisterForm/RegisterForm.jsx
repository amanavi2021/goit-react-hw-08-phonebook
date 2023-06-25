import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { Form } from "./RegisterForm.styled";
import { TextField, Button } from "@mui/material";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password:  form.elements.password.value,
        }));
        form.reset();
    };

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">    
                <TextField label="Username" margin="normal" type="text" name="name" />
                <TextField label="Email" margin="normal" type="email" name="email" />
                <TextField label="Password" margin="normal" type="password" name="password" />
            <Button variant="contained" margin="normal" type="submit">Register</Button>
        </Form>
    );
};