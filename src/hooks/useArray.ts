import { useCallback, useState } from 'react';

export const useArray = <T>(initialValue = []) => {
  const [value, setValue] = useState<T[]>(initialValue);

  const push = useCallback((element: T) => {
    setValue((oldValue) => [...oldValue, element]);
  }, []);

  const remove = useCallback((index: number) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  }, []);

  const isEmpty = () => !value.length;
  const isNotEmpty = () => !!value.length;

  return { value, setValue, push, remove, isEmpty, isNotEmpty };
};

export default useArray;
