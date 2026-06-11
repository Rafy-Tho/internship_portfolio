import { IconSun, IconMoon } from '@tabler/icons-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />}
    </button>
  );
}
