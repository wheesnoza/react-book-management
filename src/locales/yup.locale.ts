import * as yup from 'yup';
import { MessageParams } from 'yup/lib/types';

const label = (prm: MessageParams) => (prm.label ? `${prm.label}は` : '');

const config = {
  mixed: {
    default: (prm: MessageParams) => `${label(prm)}無効です`,
    required: (prm: MessageParams) => `${label(prm)}必須です`,
  },
  string: {
    length: (prm: MessageParams & { length: number }) =>
      `${label(prm)}${prm.length}文字でなければなりません`,
  },
};

yup.setLocale(config);

export default yup;
