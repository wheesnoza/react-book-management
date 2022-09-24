import { User } from './user.model';

export interface Lend {
  from: Date;
  to: Date;
  user: User;
}
