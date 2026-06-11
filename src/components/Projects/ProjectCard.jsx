import { IconBrandGithub, IconExternalLink, IconArrowRight } from '@tabler/icons-react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className={styles.card}>
      <div className={styles.banner}>
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} className={styles.bannerImg} />
        ) : (
          <div className={styles.bannerPlaceholder}>
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.shortDesc}</p>

        <div className={styles.tags}>
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
          {project.techStack.length > 4 && (
            <span className={styles.tag}>+{project.techStack.length - 4}</span>
          )}
        </div>

        <div className={styles.actions}>
          <button className={styles.details} onClick={() => onOpen(project)}>
            View Details
            <IconArrowRight size={16} />
          </button>
          <div className={styles.links}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.iconBtn}>
              <IconBrandGithub size={18} />
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className={styles.iconBtn}>
              <IconExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
