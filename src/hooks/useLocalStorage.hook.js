import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const getValue = () => JSON.parse(localStorage.getItem(key)) || initialValue;

  const [value, setValueState] = useState(getValue);

  const setValue = (newValue) => {
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
