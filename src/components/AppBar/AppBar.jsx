import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Toolbar, Typography } from '@mui/material';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Navigation />
      </Typography>

      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      ></Typography>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Toolbar>
  );
};
