import { FieldErrors } from 'react-hook-form';
import { InputError } from '@/styled-components';

export const displayError = (errors: FieldErrors, errorKey: string) => {
  const error = errors[errorKey];
  return error && <InputError>{error.message?.toString()}</InputError>;
};

export const hasErrors = (
  errors: FieldErrors | undefined,
  errorKey: string
) => {
  return errors && !!errors[errorKey];
};
