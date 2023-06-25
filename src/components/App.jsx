import { useDispatch } from 'react-redux';
import { useEffect, lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { updateUser } from 'redux/auth/operations';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from './RedirectedRoute';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


export const App = () => {
  const dispatch = useDispatch();
  const {isUpdating} = useAuth();

  useEffect(()=> {
    dispatch(updateUser())
  },[dispatch]);

  return (
    !isUpdating &&
    (
<Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>} />
      <Route path='/register' element = {
      <RestrictedRoute redirectTo='/contacts' component={<RegisterPage/>} />
      }
/>
      <Route path='/login' element = {
      <RestrictedRoute redirectTo='/contacts' component= {<LoginPage/>} />
      }
      />
    <Route path='/contacts' element = {
    <PrivateRoute redirectTo='/login' component ={<ContactsPage/>} />
    } 
    />
    </Route>
    </Routes>
    )

    )
}




