import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/models';

type Props = {
  resetErrorBoundary: (...args: Array<unknown>) => void;
};

export const NotFound = ({ resetErrorBoundary }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '80vh',
      }}
    >
      <Typography variant="h1" color="gray">
        404
      </Typography>
      <Typography variant="h6" color="gray" marginBottom={2}>
        {t("The page you're looking for doesn't exist.")}
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          resetErrorBoundary();
          navigate(PrivateRoutes.HOME);
        }}
      >
        {t('Back to home')}
      </Button>
    </Box>
  );
};

export default NotFound;
