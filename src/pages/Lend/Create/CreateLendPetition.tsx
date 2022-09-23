import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ja from 'date-fns/locale/ja';

export const CreateLendPetition = () => {
  const [value, setValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <DatePicker
        label="Start"
        value={value}
        onChange={setValue}
        inputFormat="yyyy年MM月dd日"
        mask="____年__月__日"
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default CreateLendPetition;
