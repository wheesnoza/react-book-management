import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, Role } from '@/models';
import { useAuth } from '@/hooks';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const pages = [
  { label: 'home', url: PrivateRoutes.HOME },
  { label: 'applications', url: PrivateRoutes.APPLICATIONS },
];

export const Header = () => {
  const { user, authenticated } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
                    {t(page.label)}
                  </Button>
                ))}
                {[Role.ADMIN, Role.CORPORATE].includes(user.role) && (
                  <Button
                    sx={{ color: 'white', display: 'block' }}
                    onClick={() => navigate(PrivateRoutes.BOOK_CREATE)}
                  >
                    {t('book.creation')}
                  </Button>
                )}
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
