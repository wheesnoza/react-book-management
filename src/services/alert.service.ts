import { Alert, AlertLevel } from '@/models';
import { firstValueFrom, Observable, Subject, timer } from 'rxjs';
import { v4 as uuid } from 'uuid';

class AlertService {
  private _state: Alert | undefined = {
    id: '',
    message: '',
    level: AlertLevel.Error,
    autoDismiss: false,
  };
  private _alertSubject = new Subject<Alert | undefined>();
  private _alert$?: Observable<Alert | undefined>;

  get alert$(): Observable<Alert | undefined> {
    if (!this._alert$) {
      this._alert$ = this._alertSubject.asObservable();
    }

    return this._alert$;
  }

  dismiss(): void {
    this.remove();
  }

  display(
    message: string,
    level: AlertLevel = AlertLevel.Error,
    autoDismiss: boolean = true
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
    this._state = alert;
    this._alertSubject.next(this._state);
  }

  private remove(): void {
    this._state = undefined;
    this._alertSubject.next(this._state);
  }
}

export const alert = new AlertService();
