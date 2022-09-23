import useAuth from '@/hooks/useAuth';
import { Card, CardMedia, Grid } from '@mui/material';
import bookImg from '@/assets/dummy_book_img.jpeg';
import { generatePath, useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/models';
import styled from '@emotion/styled';
import { books } from '@/data';

const StyledCard = styled(Card)`
  cursor: pointer;
`;

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
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
  );
};

export default Home;
