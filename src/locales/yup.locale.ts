/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from 'yup';
import { validationTranslationsJA } from '.';
import i18n from './i18n';

const configs: { [key: string]: any } = {
  ja: validationTranslationsJA,
};

if (Object.keys(configs).includes(i18n.language)) {
  yup.setLocale(configs[i18n.language]);
}

export default yup;
