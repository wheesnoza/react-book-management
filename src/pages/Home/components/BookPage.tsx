import { Grid } from '@mui/material';
import { generatePath, useNavigate } from 'react-router-dom';
import { BookCard } from '@/components';
import { Book, PrivateRoutes } from '@/models';

type Props = {
  books: Book[];
};

export const BookPage = ({ books }: Props) => {
  const navigate = useNavigate();

  return (
    <>
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
    </>
  );
};

export default BookPage;
