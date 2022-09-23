import { InputBaseProps, TextField } from '@mui/material';
import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import { InputError, InputLabel, InputWrapper } from '@/styled-components';

const formValidation = (errors: FieldErrors, errorKey: string) => {
  const error = errors[errorKey];
  return error && <InputError>{error.message?.toString()}</InputError>;
};

export enum InputType {
  NUMBER = 'number',
  TEXT = 'text',
}

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  errors?: FieldErrors;
  label?: string;
  type: InputType;
  inputProps?: InputBaseProps['inputProps'];
  disabled?: boolean;
  trigger?: UseFormTrigger<any>;
  required?: boolean;
}

export const Input = ({
  register,
  name,
  errors,
  label = '',
  type,
  inputProps,
  disabled = false,
  trigger,
  required = false,
}: InputProps) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <TextField
        disabled={disabled}
        type={type}
        error={errors && !!errors[name]}
        id={name}
        variant="standard"
        {...register(name)}
        {...(inputProps && { inputProps })}
        onChange={() => trigger && trigger()}
        fullWidth
        {...(required && { required })}
      />
      {errors && formValidation(errors, name)}
    </InputWrapper>
  );
};

export default Input;
