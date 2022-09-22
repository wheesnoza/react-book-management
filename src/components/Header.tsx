import useAuth from '@/hooks/useAuth';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export const Header = () => {
  const { user } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BM
          </Typography>
          {user.id ? <LogoutButton /> : <LoginButton />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
