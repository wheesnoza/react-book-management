import { values as lodashValues, filter } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onlyNumericValues = (enumObject: any): any[] => {
  return filter(lodashValues(enumObject), (value) => {
    return typeof value === 'number';
  });
};
