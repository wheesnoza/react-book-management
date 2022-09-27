/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { displayError } from '@/utilities';

export interface AutocompleteOptions {
  label: string;
  id: string | number;
}

interface Props {
  name: string;
  label: string;
  options: AutocompleteOptions[];
  defaultValue: AutocompleteOptions;
  control: Control<any, any>;
  errors?: FieldErrors;
}

export const Autocomplete = ({
  name,
  label,
  options,
  defaultValue,
  control,
  errors,
}: Props) => {
  return (
    <>
      <Controller
        render={({ field }) => (
          <MuiAutocomplete
            {...field}
            options={options}
            renderInput={(params) => <TextField {...params} label={label} />}
            onChange={(_, data) => field.onChange(data)}
            isOptionEqualToValue={(option, value) => option.id === value?.id}
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

export default Autocomplete;
