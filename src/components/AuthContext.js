import React, { createContext, useState, useEffect } from 'react';
import { Header } from './Header';

// Create context
export const AuthContext = createContext();

// Auth provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email) => {
    setUser(email);
    localStorage.setItem('user', JSON.stringify(email));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Header />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
