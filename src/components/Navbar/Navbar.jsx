import { useState, useEffect } from 'react';
import { IconHome, IconUser, IconCode, IconBriefcase, IconSchool, IconMail, IconMenu2, IconX } from '@tabler/icons-react';
import { useActiveSection } from '../../hooks/useActiveSection';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

const links = [
  { href: '#home', label: 'Home', icon: IconHome },
  { href: '#about', label: 'About', icon: IconUser },
  { href: '#skills', label: 'Skills', icon: IconCode },
  { href: '#projects', label: 'Projects', icon: IconBriefcase },
  { href: '#learning', label: 'Learning', icon: IconSchool },
  { href: '#contact', label: 'Contact', icon: IconMail },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.inner} container`}>
        <a href="#home" className={styles.logo} onClick={handleClick}>
          <span className={styles.logoText}>R</span>
        </a>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className={`${styles.link} ${active === href.slice(1) ? styles.active : ''}`}
              onClick={handleClick}
            >
              <Icon size={16} />
              <span>{label}</span>
            </a>
          ))}
          <div className={styles.mobileTheme}>
            <ThemeToggle />
          </div>
        </div>

        <div className={styles.actions}>
          <span className={styles.desktopToggle}><ThemeToggle /></span>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && <div className={styles.overlay} onClick={handleClick} />}
    </header>
  );
}
