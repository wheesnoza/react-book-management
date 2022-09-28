import { useMemo } from 'react';
import { Toggle, useToggle } from './useToggle';

type UseBoolean = [
  boolean,
  {
    toggle: Toggle;
    on: () => void;
    off: () => void;
  }
];

function useBoolean(initialValue = false): UseBoolean {
  const [value, toggle] = useToggle(initialValue);

  const handlers = useMemo(
    () => ({
      toggle,
      on: () => toggle(true),
      off: () => toggle(false),
    }),
    [toggle]
  );

  return [value, handlers];
}

export default useBoolean;
