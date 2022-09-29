import yup from '@/locales/yup.locale';
import { onlyNumericValues } from '@/utilities';
import { Book } from './book.model';
import { User } from './user.model';

export enum LendReceivingMethod {
  SEND_BY_POST,
  GET_IT_BY_SELF,
}

export interface Lend {
  id: string;
  from: Date;
  to: Date;
  book: Book;
  user: User;
  receivingMethod: LendReceivingMethod;
}

export const lendSchema = yup.object().shape({
  range: yup.array().of(yup.date()).length(2),
  receivingMethod: yup.number().oneOf(onlyNumericValues(LendReceivingMethod)),
});
