import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(Boolean(user));
  }, []);

  return isAuthenticated;
};
