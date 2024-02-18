import { createContext } from "react";

type ThemeContextType = {
  theme: 'dark' | 'light';
  toogleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextType);

export default ThemeContext;
