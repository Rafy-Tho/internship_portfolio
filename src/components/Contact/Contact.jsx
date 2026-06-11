import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
} from "@tabler/icons-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const ref = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref} className={`${styles.inner} reveal`}>
          <div className={styles.info}>
            <span className={styles.label}>Contact</span>
            <h2 className={styles.heading}>Let's Connect</h2>
            <p className={styles.text}>
              Open to internship opportunities, collaboration, and learning
              experiences. If you have a project in mind or just want to say hi,
              feel free to reach out.
            </p>

            <div className={styles.links}>
              <a href="mailto:rafytho30@gmail.com" className={styles.link}>
                <IconMail size={18} />
                rafytho30@gmail.com
              </a>
              <a
                href="https://github.com/Rafy-Tho"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <IconBrandGithub size={18} />
                github.com/rafy
              </a>
              <a
                href="https://www.linkedin.com/in/rafy-tho-bb874a347/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <IconBrandLinkedin size={18} />
                linkedin.com/in/rafy
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.labelText}>
                Name
              </label>
              <input
                id="name"
                type="text"
                className={styles.input}
                placeholder="Your name"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.labelText}>
                Email
              </label>
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.labelText}>
                Message
              </label>
              <textarea
                id="message"
                className={styles.textarea}
                rows={5}
                placeholder="Your message..."
                required
              />
            </div>
            <button type="submit" className={styles.submit}>
              <IconSend size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
