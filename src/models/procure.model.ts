import { t } from 'i18next';
import yup from '@/locales/yup.locale';
import { onlyNumericValues } from '@/utilities';

export enum ProcureType {
  BOOK_PROCURE,
  BOOK_REPOCURE,
}

export interface Procure {
  id: string;
  type: ProcureType;
  body: string;
  url: string;
}

export const procureSchema = yup.object().shape({
  type: yup
    .number()
    .oneOf(onlyNumericValues(ProcureType))
    .label(t('procure.type'))
    .required(),
  body: yup.string().label(t('procure.body')).required(),
  url: yup.string().url().label(t('procure.url')).required(),
});
