import { Grid } from '@mui/material';
import { generatePath, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { BookCard } from '@/components';
import { Book, PrivateRoutes } from '@/models';

type Props = {
  index: number;
};

export const BookPage = ({ index }: Props) => {
  const { data } = useSWR(`/api/books?page=${index}`, { suspense: false });
  const navigate = useNavigate();

  if (!data) {
    return (
      <Grid item xs={6} md={2}>
        Loading...
      </Grid>
    );
  }

  return data.map((book: Book) => (
    <Grid key={book.id} item xs={6} md={2}>
      <BookCard
        book={book}
        onClick={() =>
          navigate(generatePath(PrivateRoutes.BOOK_DETAIL, { bookId: book.id }))
        }
      />
    </Grid>
  ));
};

export default BookPage;
