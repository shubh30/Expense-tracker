import { useCallback } from "react";

const useLocalStorage = () => {
  const setItems = useCallback((key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getItems = useCallback((key) => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }, []);

  return { setItems, getItems };
};

export default useLocalStorage;
