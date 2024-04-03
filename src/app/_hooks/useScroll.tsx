import { useEffect, useState } from 'react';
import { IS_SCROLL_HEIGHT } from '../utils';

export function useScroll() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScroll(window.scrollY > IS_SCROLL_HEIGHT);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScroll;
}
