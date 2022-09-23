export enum AlertLevel {
  Error = 'error',
  Warning = 'warning',
  Success = 'success',
}

export interface Alert {
  id: string;
  message: string;
  level: AlertLevel;
  autoDismiss: boolean;
}
