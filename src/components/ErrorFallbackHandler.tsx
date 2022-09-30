import { ReactNode } from 'react';
import { FallbackProps } from 'react-error-boundary';
import axios from 'axios';
import SomethinWentWrongError from './SomethingWentWrongError';
import { NotFound } from '@/pages';

export type ErrorPageProps = {
  resetErrorBoundary: (...args: Array<unknown>) => void;
};

export const ErrorFallbackHandler = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const ErrorCases: { [key: number]: ReactNode } = {
    0: <SomethinWentWrongError resetErrorBoundary={resetErrorBoundary} />,
    404: <NotFound resetErrorBoundary={resetErrorBoundary} />,
  };

  return axios.isAxiosError(error) ? (
    ErrorCases[error.response?.status ?? 0]
  ) : (
    <SomethinWentWrongError resetErrorBoundary={resetErrorBoundary} />
  );
};

export default ErrorFallbackHandler;
