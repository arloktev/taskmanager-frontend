import { useCallback, useEffect } from 'react';

export const useEscape = (onEscape: () => void) => {
  const handleEsc = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' || event.code === 'Escape') {
      onEscape();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);
  }, []);
};
