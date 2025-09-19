import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AuthAPI } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setLoading(false);
      return;
    }
    AuthAPI.me()
      .then((res) => {
        setUser(res.data);
        setRole(res.data?.role || 'viewer');
      })
      .catch(() => {
        localStorage.removeItem('authToken');
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (credentials) => {
    const res = await AuthAPI.login(credentials);
    const token = res.data?.access || res.data?.token;
    if (token) localStorage.setItem('authToken', token);
    const me = await AuthAPI.me();
    setUser(me.data);
    setRole(me.data?.role || 'viewer');
    return me.data;
  };

  const signup = async (payload) => {
    return AuthAPI.signup(payload);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setRole(null);
  };

  const value = useMemo(() => ({ user, role, loading, login, signup, logout, isAuthenticated: !!user }), [user, role, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);


