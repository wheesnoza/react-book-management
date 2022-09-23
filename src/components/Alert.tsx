import { Alert as AlertModel } from '@/models';
import { alert as alertEvent } from '@/services/alert.service';
import { Alert, Zoom } from '@mui/material';
import { useEffect, useState } from 'react';

export const AlertWrap = () => {
  const [alert, setAlert] = useState<AlertModel>();

  useEffect(() => {
    alertEvent.alert$.subscribe((alert) => {
      setAlert(alert);
    });
  }, []);

  return (
    <Zoom in={!!alert}>
      <Alert severity={alert?.level}>{alert?.message}</Alert>
    </Zoom>
  );
};

export default AlertWrap;
