import {
  CalendarPicker,
  LocalizationProvider,
  PickersDay,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Avatar, Badge, Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { BookCard } from '@/components';
import { useAuth, useBook } from '@/hooks';
import { Lend, PrivateRoutes, Role } from '@/models';
import dummyImage from '../../../assets/dummy_book_img.png';

const StyledCalendar = styled(CalendarPicker)`
  margin: 0;
`;

export const BookDetail = () => {
  const [date] = useState<Date>(new Date());
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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StyledCalendar
            date={date}
            readOnly
            onChange={() => {}}
            renderDay={(day, _value, DayComponentProps) => {
              const renderDay = day as Date;
              const hasLend = lends.some(
                (lend: Lend) => lend.from <= renderDay && renderDay <= lend.to
              );
              return (
                <Badge
                  key={renderDay.toString()}
                  overlap="circular"
                  badgeContent={
                    hasLend ? (
                      <Avatar
                        alt="Remy Sharp"
                        src={dummyImage}
                        sx={{ width: 15, height: 15 }}
                      />
                    ) : undefined
                  }
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
