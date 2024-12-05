import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (newValue: T | ((prevValue: T) => T)) => void] {
  const getValue = (): T => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  const [value, setValueState] = useState<T>(getValue);

  const setValue = (newValue: T | ((prevValue: T) => T)) => {
    const valueToStore =
      newValue instanceof Function ? newValue(value) : newValue;
    localStorage.setItem(key, JSON.stringify(valueToStore));
    setValueState(valueToStore);
  };

  useEffect(() => {
    const handleStorageChange = () => setValueState(getValue());
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [value, setValue];
}
