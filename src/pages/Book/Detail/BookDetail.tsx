import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Grid, Typography } from '@mui/material';
import { BookCard, BookLendsCalendar } from '@/components';
import { useAuth, useBook } from '@/hooks';
import { PrivateRoutes, Role } from '@/models';

export const BookDetail = () => {
  const { bookId } = useParams<{ bookId: string }>();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { book, lends } = useBook(bookId!);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <BookCard book={book} sx={{ marginBottom: 5 }} />
        {[Role.ADMIN, Role.CORPORATE].includes(user.role) && (
          <Button
            sx={{ marginRight: 2 }}
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
        <Button
          variant="contained"
          onClick={() =>
            navigate(
              generatePath(PrivateRoutes.BOOK_LEND_PETITION, {
                bookId: book.id,
              })
            )
          }
        >
          {t('book.lend.petition')}
        </Button>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h3">{book.title}</Typography>
        <Typography variant="subtitle1">{book.description}</Typography>
        <BookLendsCalendar lends={lends} />
      </Grid>
    </Grid>
  );
};

export default BookDetail;
