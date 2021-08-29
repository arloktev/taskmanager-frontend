import { useEffect, useRef } from 'react';

export const useOnClickOutside = <T extends HTMLElement>(handler: () => void) => {
  const ref = useRef<T>(null);

  useEffect(
    () => {
      const listener = (event: MouseEvent) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }

        handler();
      };

      document.addEventListener('mousedown', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
    [ref, handler],
  );

  return ref;
};
