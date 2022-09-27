import { t } from 'i18next';
import { firstValueFrom, Observable, Subject, timer } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Alert, AlertLevel } from '@/models';

class AlertService {
  private state: Alert | undefined = {
    id: '',
    message: '',
    level: AlertLevel.Error,
    autoDismiss: false,
  };

  private alertSubject = new Subject<Alert | undefined>();

  private alert?: Observable<Alert | undefined>;

  getAlert(): Observable<Alert | undefined> {
    if (!this.alert) {
      this.alert = this.alertSubject.asObservable();
    }

    return this.alert;
  }

  dismiss(): void {
    this.remove();
  }

  displayError(message?: string): void {
    this.display(message || t('error'), AlertLevel.Error);
  }

  display(
    message: string,
    level: AlertLevel = AlertLevel.Error,
    autoDismiss = true
  ): void {
    const alert: Alert = {
      id: uuid(),
      message,
      level,
      autoDismiss,
    };

    if (autoDismiss) {
      firstValueFrom(timer(5000)).then(() => this.remove());
    }

    this.create(alert);
  }

  private create(alert: Alert): void {
    this.state = alert;
    this.alertSubject.next(this.state);
  }

  private remove(): void {
    this.state = undefined;
    this.alertSubject.next(this.state);
  }
}

export const alert = new AlertService();
