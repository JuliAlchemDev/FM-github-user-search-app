import styles from "./ThemeToogle.module.css";
import SunIcon from "./Icons/SunIcon";
import MoonIcon from "./Icons/MoonIcon";
import { useState } from "react";

interface ThemeToggleProps {
    defaultDark?:boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({defaultDark = false}) => {
  const [isDark, setIsDark] = useState(defaultDark);

  const themeLabel = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };
  return (
    <button type="button" className={styles.themeToggle} onClick={toggleTheme}>
      {themeLabel}
      <ThemeIcon />
    </button>
  );
};

export default ThemeToggle;
