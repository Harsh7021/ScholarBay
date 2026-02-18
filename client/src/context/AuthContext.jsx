import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/axiosClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('sb_token', data.token);
      const { data: fullUser } = await api.get('/auth/me');
      setUser(fullUser);
    } catch (err) {
      throw err;
    }
  };

  const register = async (payload) => {
    try {
      const { data } = await api.post('/auth/register', payload);
      localStorage.setItem('sb_token', data.token);
      const { data: fullUser } = await api.get('/auth/me');
      setUser(fullUser);
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('sb_token');
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('sb_token');
    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get('/auth/me')
      .then((res) => setUser(res.data))
      .catch(() => logout())
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

