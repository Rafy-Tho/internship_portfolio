import {
  IconArrowRight,
  IconDownload,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./Hero.module.css";
import resume from "../../assets/resume.pdf";
export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section id="home" className={styles.hero}>
      <div className={`${styles.inner} container`}>
        <div ref={ref} className={`${styles.content} reveal`}>
          <span className={styles.greeting}>Hi, I'm</span>
          <h1 className={styles.name}>Tho Rafy</h1>
          <p className={styles.title}>Full Stack Developer</p>
          <p className={styles.description}>
            Full Stack Developer passionate about building practical web
            applications with modern technologies. Currently seeking internship
            opportunities to contribute, learn, and grow as a software engineer.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>
              View Projects
              <IconArrowRight size={18} />
            </a>
            <a href={resume} className={styles.secondary} download>
              <IconDownload size={18} />
              Download Resume
            </a>
          </div>

          <div className={styles.social}>
            <a
              href="https://github.com/Rafy-Tho"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IconBrandGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafy-tho-bb874a347/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={20} />
            </a>
            <a href="mailto:rafytho30@gmail.com" aria-label="Email">
              <IconMail size={20} />
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.codeBlock}>
            <div className={styles.codeLine}>
              <span className={styles.keyword}>const</span>
              <span className={styles.fn}> developer</span>
              <span> = </span>
              <span className={styles.string}>"Rafy"</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.keyword}>const</span>
              <span className={styles.fn}> role</span>
              <span> = </span>
              <span className={styles.string}>"Full Stack Developer"</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.keyword}>const</span>
              <span className={styles.fn}> status</span>
              <span> = </span>
              <span className={styles.string}>"Seeking Internship"</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.keyword}>const</span>
              <span className={styles.fn}> superpower</span>
              <span> = </span>
              <span className={styles.string}>"Building things that work"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
