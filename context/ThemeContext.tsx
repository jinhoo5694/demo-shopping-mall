'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark'; // Only dark mode now

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void; // Keep for compatibility but will do nothing
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'diary-shop-theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isClient, setIsClient] = useState(false);

  // Always use dark mode
  useEffect(() => {
    setIsClient(true);
    // Always set to dark mode regardless of saved preference
    setTheme('dark');
    document.documentElement.classList.add('dark');
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');
  }, []);

  // Keep effect for consistency but always ensure dark mode
  useEffect(() => {
    if (isClient) {
      localStorage.setItem(THEME_STORAGE_KEY, 'dark');
      document.documentElement.classList.add('dark');
      // Remove light class if it exists
      document.documentElement.classList.remove('light');
    }
  }, [isClient]);

  const toggleTheme = () => {
    // Do nothing - dark mode only
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
