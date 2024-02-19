import { useState } from "react";
import ThemeContext from "./ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({children}: ThemeProviderProps) {
  const [pageTheme, setPageTheme] = useState<'dark' | 'light'>('dark');

  function toogleTheme() {
    setPageTheme(pageTheme === 'dark' ? 'light' : 'dark');
  }

  <ThemeContext.Provider value={{ theme: pageTheme, toogleTheme}}>
    {children}
  </ThemeContext.Provider>

}
