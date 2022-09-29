import DatePicker from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import 'react-datepicker/dist/react-datepicker.css';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { InputLabel } from '@/styled-components';
import { displayError } from '@/utilities';

interface Props {
  name: string;
  label: string;
  defaultValue?: Date[];
  control: Control<any, any>;
  errors?: FieldErrors;
}

export const DateRangePicker = ({
  name,
  label,
  defaultValue = [],
  control,
  errors,
}: Props) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field }) => (
          <DatePicker
            {...field}
            locale={ja}
            startDate={field.value[0]}
            endDate={field.value[1]}
            selectsRange
            inline
          />
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
      {errors && displayError(errors, name)}
    </>
  );
};

export default DateRangePicker;
