import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Box, ThemeProvider } from '@mui/material';
import AppBarMenu from '@mui/material/AppBar';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#757de8',
      dark: '#002984',
    },
    secondary: {
      main: '#f44336',
    },
  },
});


export const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
      <AppBarMenu position="static" >
 <AppBar />
 </AppBarMenu>
 <Suspense fallback={null}>
        <Outlet />
      </Suspense>
        </ThemeProvider>

 
 </Box>
      
    
    </div>
  );
};
