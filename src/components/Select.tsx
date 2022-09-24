/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormControlProps,
  InputLabel,
  Select as MuiSelect,
} from '@mui/material';
import { ReactNode } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { displayError, hasErrors } from '@/utilities';

type Props = {
  name: string;
  label: string;
  control: Control<any, any>;
  defaultValue: any;
  children: ReactNode;
  errors?: FieldErrors;
} & FormControlProps;

export const Select = ({
  name,
  label,
  control,
  defaultValue,
  children,
  errors,
  ...props
}: Props) => {
  const labelId = `${name}-label`;

  return (
    <FormControl {...props} error={hasErrors(errors, name)}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        render={({ field }) => (
          <MuiSelect {...field} labelId={labelId} label={label}>
            {children}
          </MuiSelect>
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
      {errors && displayError(errors, name)}
    </FormControl>
  );
};

export default Select;
