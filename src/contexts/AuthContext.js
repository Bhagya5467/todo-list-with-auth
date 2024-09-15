import React, { useState, useEffect, createContext } from 'react';
import { Header } from '../components/Header';

const AuthContext = createContext({
  authUser: undefined,
  setAuthUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(undefined);

  useEffect(() => {
    const { pathname } = window.location;
    const localStorageAuthUser = localStorage.getItem('authUser');

    setAuthUser(localStorageAuthUser);

    if (!['/login', '/register'].includes(pathname) && !localStorageAuthUser) {
      window.location.replace('/login');
    } else if (
      ['/login', '/register'].includes(pathname) &&
      localStorageAuthUser
    ) {
      window.location.replace('/');
    }
  }, [authUser, window.location.pathname]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      <Header />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
