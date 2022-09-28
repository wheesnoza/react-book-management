import { useReducer } from 'react';

export type Toggle = (value?: boolean | undefined) => void;
export type UseToggle = [boolean, Toggle];

const toggler = (
  currentValue: boolean,
  newValue: boolean | undefined = undefined
) => {
  return typeof newValue === 'boolean' ? newValue : !currentValue;
};

export const useToggle = (initialValue = false): UseToggle => {
  return useReducer(toggler, initialValue);
};
