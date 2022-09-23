import useAuth from '@/hooks/useAuth';
import { Button, Card, CardMedia, Grid } from '@mui/material';
import bookImg from '@/assets/dummy_book_img.jpeg';
import { generatePath, useNavigate } from 'react-router-dom';
import { PrivateRoutes, Role } from '@/models';
import styled from '@emotion/styled';
import { books } from '@/data';
import { t } from 'i18next';

const StyledCard = styled(Card)`
  cursor: pointer;
`;

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
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
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={bookImg}
                alt="Live from space album cover"
              />
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
