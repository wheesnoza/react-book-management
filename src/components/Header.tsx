import useAuth from '@/hooks/useAuth';
import { PrivateRoutes } from '@/models';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const pages = [
  { label: 'Home', url: PrivateRoutes.HOME },
  { label: 'Applications', url: PrivateRoutes.APPLICATIONS },
];

export const Header = () => {
  const { authenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {authenticated ? (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    onClick={() => navigate(page.url)}
                    key={page.label}
                    sx={{ color: 'white', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
