import { useEffect, useRef } from 'react';
import { IconX, IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import styles from './ProjectModal.module.css';

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const handleOverlay = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={handleOverlay} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label="Close">
          <IconX size={20} />
        </button>

        <div className={styles.body}>
          <div className={styles.banner}>
            {project.image ? (
              <img src={project.image} alt={`${project.title} preview`} className={styles.bannerImg} />
            ) : (
              <div className={styles.bannerPlaceholder}>
                <span>{project.title.charAt(0)}</span>
              </div>
            )}
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.overview}>{project.overview}</p>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Features</h3>
              <ul className={styles.list}>
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Technical Highlights</h3>
              <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.techPill}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.columns}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Challenges</h3>
                <ul className={styles.list}>
                  {project.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Solutions</h3>
                <ul className={styles.list}>
                  {project.solutions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>What I Learned</h3>
              <p className={styles.lessonText}>{project.lessons}</p>
            </div>

            <div className={styles.actions}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                <IconBrandGithub size={18} />
                View Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                <IconExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
