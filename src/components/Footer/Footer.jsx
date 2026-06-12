import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.top}>
          <a href="#home" className={styles.logo}>
            <span className={styles.logoText}>R</span>
          </a>

          <nav className={styles.nav}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#learning">Learning</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className={styles.social}>
            <a
              href="https://github.com/Rafy-Tho"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IconBrandGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafy-tho-bb874a347/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={18} />
            </a>
            <a href="mailto:rafytho30@gmail.com" aria-label="Email">
              <IconMail size={18} />
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <p className={styles.copyright}>
          &copy; {year} Tho Rafy. Built with React and JavaScript.
        </p>
      </div>
    </footer>
  );
}
