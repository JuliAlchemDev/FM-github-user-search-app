import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle/ThemeToogle";


type HeaderProps = {
  defaultDark?: boolean;
}
const Header: React.FC<HeaderProps> = ({defaultDark = false}) => {
  return (
    <header>
      <h1 className={styles.logo}>devfinder</h1>
      <ThemeToggle defaultDark={defaultDark}/>
    </header>
  );
};

export default Header;
