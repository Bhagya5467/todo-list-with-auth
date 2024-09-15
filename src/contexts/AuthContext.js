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
    const lsAuthUser = localStorage.getItem('authUser');

    setAuthUser(lsAuthUser);

    if (!['/login', '/register'].includes(pathname) && !lsAuthUser) {
      window.location.replace('/login');
    } else if (['/login', '/register'].includes(pathname) && lsAuthUser) {
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
