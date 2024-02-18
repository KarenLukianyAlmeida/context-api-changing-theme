import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Header() {
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <h1>Trybe</h1>
      <button onClick={() => themeContext.toogleTheme()}>
        {themeContext.theme === 'dark' ? '🌒' : '☀️'}
      </button>
    </div>
  );
}
