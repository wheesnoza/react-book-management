import { Alert, AlertTitle, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '@/models';

type Props = {
  resetErrorBoundary: (...args: Array<unknown>) => void;
};

export const SomethinWentWrongError = ({ resetErrorBoundary }: Props) => {
  const { t } = useTranslation();
  return (
    <Alert severity="error">
      <AlertTitle>{t('Something went wrong')}</AlertTitle>
      <Typography variant="subtitle2">
        {t('An error ocurred')} — <strong>{t('please try later.')}</strong>
      </Typography>
      <Typography variant="body1">
        <Link to={PrivateRoutes.HOME} onClick={resetErrorBoundary}>
          {t('Back to home')}
        </Link>
      </Typography>
    </Alert>
  );
};

export default SomethinWentWrongError;
