/* eslint-disable @typescript-eslint/no-explicit-any */
import { t } from 'i18next';
import { MessageParams } from 'yup/lib/types';

const label = (prm: MessageParams) => (prm.label ? `${prm.label}は` : '');

export const config = {
  mixed: {
    default: (prm: MessageParams) => `${label(prm)}無効です`,
    required: (prm: MessageParams) => `${label(prm)}必須です`,
    oneOf: (prm: MessageParams & { values: any }) => {
      return `${label(prm)}次の値のいずれかでなければなりません:${prm.values
        .replace(/\s/g, '')
        .split(',')
        .map((value: any) => t(`${prm.label}_${value}`))
        .join(', ')}`;
    },
  },
  string: {
    length: (prm: MessageParams & { length: number }) =>
      `${label(prm)}${prm.length}文字でなければなりません`,
    url: (prm: MessageParams & { regex: RegExp }) =>
      `${label(prm)}有効なURLでなければなりません`,
  },
  number: {
    min: (prm: MessageParams & { min: number }) =>
      `${label(prm)}${prm.min}以上である必要があります`,
  },
};

export default config;
