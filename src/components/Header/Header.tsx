import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle/ThemeToggle";


type HeaderProps = {
  defaultDark?: boolean;
}
const Header: React.FC<HeaderProps> = ({defaultDark}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>devfinder</h1>
      <ThemeToggle defaultDark={defaultDark}/>
    </header>
  );
};

export default Header;
