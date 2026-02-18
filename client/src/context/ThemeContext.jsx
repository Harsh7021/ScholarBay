import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(
    () => localStorage.getItem('sb_theme') === 'dark'
  );

  useEffect(() => {
    localStorage.setItem('sb_theme', dark ? 'dark' : 'light');
    document.body.className = dark ? 'bg-dark text-light' : 'bg-light text-dark';
  }, [dark]);

  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

