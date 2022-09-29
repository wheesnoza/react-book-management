import { generatePath, useNavigate, useParams } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next';
import { Button, Grid, Typography } from '@mui/material';
import { BookCard, BookLendsCalendar } from '@/components';
import { useAuth, useBook } from '@/hooks';
import { PrivateRoutes, Role } from '@/models';

export const BookDetail = () => {
  const params = useParams<{ bookId: string }>();
  const { book, lends } = useBook(params.bookId ?? '');
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <BookCard book={book} />
      </Grid>
      <Grid item xs={12} md={8}>
        {[Role.ADMIN, Role.CORPORATE].includes(user.role) && (
          <Button
            variant="contained"
            onClick={() =>
              navigate(
                generatePath(PrivateRoutes.BOOK_EDIT, { bookId: book.id })
              )
            }
          >
            {t('book.edit')}
          </Button>
        )}
        <Typography variant="h3">{book.title}</Typography>
        <Typography variant="subtitle1">{book.description}</Typography>
        <BookLendsCalendar lends={lends} />
      </Grid>
    </Grid>
  );
};

export default BookDetail;
