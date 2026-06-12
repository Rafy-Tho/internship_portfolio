import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
} from "@tabler/icons-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const ref = useScrollReveal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      console.log({ serviceId, templateId, publicKey });
      await emailjs.send(
        serviceId,
        templateId,
        { name, email, message },
        publicKey,
      );
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setErrors({ form: "Failed to send. Please try again later." });
    } finally {
      setSubmitting(false);
    }
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
            {sent && (
              <div className={styles.success}>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {errors.form && <div className={styles.error}>{errors.form}</div>}
            <div className={styles.field}>
              <label htmlFor="name" className={styles.labelText}>
                Name
              </label>
              <input
                id="name"
                type="text"
                className={`${styles.input}${errors.name ? ` ${styles.inputError}` : ""}`}
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <span className={styles.fieldError}>{errors.name}</span>
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.labelText}>
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`${styles.input}${errors.email ? ` ${styles.inputError}` : ""}`}
                placeholder="your@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <span className={styles.fieldError}>{errors.email}</span>
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.labelText}>
                Message
              </label>
              <textarea
                id="message"
                className={`${styles.textarea}${errors.message ? ` ${styles.inputError}` : ""}`}
                rows={5}
                placeholder="Your message..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <span className={styles.fieldError}>{errors.message}</span>
              )}
            </div>
            <button
              type="submit"
              className={styles.submit}
              disabled={submitting}
            >
              <IconSend size={18} />
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
