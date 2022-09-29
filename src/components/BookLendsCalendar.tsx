import styled from '@emotion/styled';
import { Avatar, Badge } from '@mui/material';
import {
  CalendarPicker,
  LocalizationProvider,
  PickersDay,
} from '@mui/x-date-pickers';
import { startOfToday } from 'date-fns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import dummyImage from '../assets/dummy_book_img.png';
import { Lend } from '@/models';

const StyledCalendar = styled(CalendarPicker)`
  margin: 0;
`;

type Props = {
  lends: Lend[];
};

export const BookLendsCalendar = ({ lends }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledCalendar
        date={startOfToday()}
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
  );
};

export default BookLendsCalendar;
