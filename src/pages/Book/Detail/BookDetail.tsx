import {
  CalendarPicker,
  LocalizationProvider,
  PickersDay,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Badge, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { BookCard } from '@/components';
import { AlertLevel, Book, BookStatus, Lend } from '@/models';
import { alert } from '@/services';

const StyledCalendar = styled(CalendarPicker)`
  margin: 0;
`;

export const BookDetail = () => {
  const [date] = useState<Date>(new Date());
  const [book, setBook] = useState<Book>({
    id: '',
    title: '',
    description: '',
    stock: 0,
    status: BookStatus.AVAILABLE,
    thumbnail: '',
  });
  const [lends, setLends] = useState<Lend[]>([]);
  const params = useParams<{ bookId: string }>();

  useEffect(() => {
    fetch(`/api/book/${params.bookId}`)
      .then((data) => data.json())
      .then((bookData) => {
        setBook(bookData);
        setLends(bookData.lends);
      })
      .catch(() => {
        alert.display('Something was wrong.', AlertLevel.Error);
      });
  }, [params.bookId]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <BookCard book={book} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h3">{book.title}</Typography>
        <Typography variant="subtitle1">{book.description}</Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StyledCalendar
            date={date}
            readOnly
            onChange={() => {}}
            renderDay={(day, _value, DayComponentProps) => {
              const hasLend = lends.some(
                (lend) => lend.from <= day && day <= lend.to
              );
              return (
                <Badge
                  key={day.toString()}
                  overlap="circular"
                  badgeContent={hasLend ? '・' : undefined}
                >
                  <PickersDay {...DayComponentProps} disabled={hasLend} />
                </Badge>
              );
            }}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
};

export default BookDetail;
