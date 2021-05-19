import { createContext, ReactNode, useContext, useState } from 'react';

type LightDarkThemeContextData = {
  changeTheme: () => void;
  theme: 'dark' | 'light';
};

interface LightDarkThemeProviderProps {
  children: ReactNode;
}

const LightDarkThemeContext = createContext({} as LightDarkThemeContextData);

export function LightDarkThemeProvider({
  children,
}: LightDarkThemeProviderProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  function changeTheme() {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <LightDarkThemeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </LightDarkThemeContext.Provider>
  );
}

export const useLightDarkTheme = () => useContext(LightDarkThemeContext);
