import { Alert as AlertModel } from '@/models';
import { alert } from '@/services/alert.service';
import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';

export const AlertWrap = () => {
  const [alertContent, setAlertContent] = useState<AlertModel>();

  useEffect(() => {
    alert.alert$.subscribe((alert) => {
      setAlertContent(alert);
    });
  }, []);

  if (alertContent) {
    return (
      <Alert severity={alertContent?.level}>{alertContent?.message}</Alert>
    );
  }

  return <></>;
};

export default AlertWrap;
