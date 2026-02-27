import { useState, useEffect } from "react";

import styles from "./Header.module.css";
import "../../styles/theme.css"; // check this later!
import SunIcon from "./Icons/SunIcon";
import MoonIcon from "./Icons/MoonIcon";

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false); 

  const themeLabel = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  const toggleTheme = (): void => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };
  
  useEffect(()=> {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    if(prefersDark){
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
      <header>
        <h1 className={styles.logo}>devfinder</h1>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={toggleTheme}
        >
          {themeLabel}
          <ThemeIcon />
        </button>
      </header>
  );
};

export default Header;
