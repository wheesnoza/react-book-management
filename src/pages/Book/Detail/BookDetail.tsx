import {
  CalendarPicker,
  LocalizationProvider,
  PickersDay,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Badge, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { BookCard } from '@/components';
import { useBook } from '@/hooks';

const StyledCalendar = styled(CalendarPicker)`
  margin: 0;
`;

export const BookDetail = () => {
  const [date] = useState<Date>(new Date());
  const params = useParams<{ bookId: string }>();
  const { book, lends } = useBook(params.bookId ?? '');

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
