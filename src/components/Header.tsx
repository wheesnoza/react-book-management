import useAuth from '@/hooks/useAuth';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Logout from './Logout';

export const Header = () => {
  const { user } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BM
          </Typography>
          {!!user.id && <Logout />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
