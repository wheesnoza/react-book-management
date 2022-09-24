import { Button, Card, CardMedia, Grid } from '@mui/material';
import { generatePath, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import useAuth from '@/hooks/useAuth';
import bookImg from '@/assets/dummy_book_img.png';
import { PrivateRoutes, Role } from '@/models';
import { books } from '@/data';

const StyledCard = styled(Card)`
  cursor: pointer;
`;

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
            <StyledCard
              sx={{ display: 'flex' }}
              onClick={() =>
                navigate(
                  generatePath(PrivateRoutes.BOOK_DETAIL, { bookId: book.id })
                )
              }
            >
              <CardMedia component="img" image={bookImg} alt={book.title} />
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
