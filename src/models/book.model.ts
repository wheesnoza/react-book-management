import { t } from 'i18next';
import yup from '@/locales/yup.locale';

export enum BookStatus {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
}

export interface Book {
  id: string;
  title: string;
  description: string;
  stock: number;
  status: BookStatus;
  thumbnail: string;
}

export const bookSchema = yup.object().shape({
  title: yup.string().label(t('book.title')).required().max(80),
  description: yup.string().label(t('book.description')).required().max(250),
  stock: yup.number().label(t('book.stock')).required().min(1),
  status: yup
    .string()
    .oneOf(Object.values(BookStatus))
    .label(t('book.status'))
    .required(),
});
