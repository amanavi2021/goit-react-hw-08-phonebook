import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';


const Login = () => (
<div>
    <Helmet>
    <title>Registration</title>
    </Helmet>
   <LoginForm />
</div>
);

export default Login;