import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ label, title, description }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`${styles.header} reveal`}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
