import { Alert, Zoom } from '@mui/material';
import { useEffect, useState } from 'react';
import { Alert as AlertModel } from '@/models';
import { alert as alertEvent } from '@/services';

export const AlertWrap = () => {
  const [alert, setAlert] = useState<AlertModel>();

  useEffect(() => {
    alertEvent.getAlert().subscribe((alertContent) => {
      setAlert(alertContent);
    });
  }, []);

  return (
    <Zoom in={!!alert}>
      <Alert severity={alert?.level}>{alert?.message}</Alert>
    </Zoom>
  );
};

export default AlertWrap;
