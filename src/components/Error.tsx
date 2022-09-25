import { Alert, AlertTitle, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PrivateRoutes } from '@/models';

export const Error = () => {
  const { t } = useTranslation();
  return (
    <Alert severity="error">
      <AlertTitle>{t('Something went wrong')}</AlertTitle>
      <Typography variant="subtitle2">
        {t('An error ocurred')} — <strong>{t('please try later.')}</strong>
      </Typography>
      <Link href={PrivateRoutes.HOME}>{t('Back to home')}</Link>
    </Alert>
  );
};

export default Error;
