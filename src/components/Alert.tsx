import { Alert as AlertModel } from '@/models';
import { alert } from '@/services/alert.service';
import { Alert, Zoom } from '@mui/material';
import { useEffect, useState } from 'react';

export const AlertWrap = () => {
  const [alertContent, setAlertContent] = useState<AlertModel>();

  useEffect(() => {
    alert.alert$.subscribe((alert) => {
      setAlertContent(alert);
    });
  }, []);

  return (
    <Zoom in={!!alertContent}>
      <Alert severity={alertContent?.level}>{alertContent?.message}</Alert>
    </Zoom>
  );
};

export default AlertWrap;
