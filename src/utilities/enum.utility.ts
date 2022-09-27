import { values as lodashValues, filter } from 'lodash';

export const onlyNumericValues = (enumObject: any): any[] => {
  return filter(lodashValues(enumObject), (value) => {
    return typeof value === 'number';
  });
};
