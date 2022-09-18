export const getLocalStorage = <T>(key: string): T | undefined => {
  const item = localStorage.getItem(key);

  if (item) {
    return JSON.parse(item as string) as T;
  }

  return undefined;
};

export const getOrDefaultLocalStorage = <T>(
  key: string,
  defaultValue: T
): T => {
  const item = localStorage.getItem(key);

  if (item) {
    return JSON.parse(item as string) as T;
  }

  return defaultValue;
};
