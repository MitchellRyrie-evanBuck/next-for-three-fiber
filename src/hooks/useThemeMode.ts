// hooks/useThemeMode.ts
import { useTheme } from 'next-themes';

export function useThemeMode() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const isDarkMode = currentTheme === 'dark';
  const isLightMode = currentTheme === 'light';

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return {
    currentTheme,
    isDarkMode,
    isLightMode,
    toggleTheme,
  };
}