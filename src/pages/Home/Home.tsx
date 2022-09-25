import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useAuth from '@/hooks/useAuth';
import { PrivateRoutes, Role } from '@/models';
import BookPage from './components/BookPage';

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useTranslation();
  const [pageIndex, setPageIndex] = useState(1);
  const pages = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < pageIndex; i++) {
    pages.push(<BookPage index={i} key={i} />);
  }

  return (
    <>
      {[Role.ADMIN, Role.CORPORATE].includes(user.role) && (
        <Button
          variant="contained"
          onClick={() => navigate(PrivateRoutes.BOOK_CREATE)}
        >
          {t('book.creation')}
        </Button>
      )}
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {pages}
      </Grid>
      <Button onClick={() => setPageIndex(pageIndex + 1)} variant="contained">
        {t('book.page.more')}
      </Button>
    </>
  );
};

export default Home;
