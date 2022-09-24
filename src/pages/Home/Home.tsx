import { Button, Grid } from '@mui/material';
import { generatePath, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useAuth from '@/hooks/useAuth';
import { PrivateRoutes, Role } from '@/models';
import { books } from '@/data';
import { BookCard } from '@/components';

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useTranslation();

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
        {books.map((book) => (
          <Grid key={book.id} item xs={6} md={2}>
            <BookCard
              book={book}
              onClick={() =>
                navigate(
                  generatePath(PrivateRoutes.BOOK_DETAIL, { bookId: book.id })
                )
              }
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
