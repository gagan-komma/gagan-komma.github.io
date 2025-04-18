import { useState, useEffect } from 'react';
import { ThemeMode } from '../types';

const useTheme = (): [ThemeMode, () => void] => {
  // Check localStorage and system preference
  const getInitialTheme = (): ThemeMode => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  };

  const [theme, setTheme] = useState<ThemeMode>('light'); // Default to light to avoid flashing

  // Set initial theme after mount to avoid hydration mismatch
  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  // Apply theme changes to document and localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
};

export default useTheme;