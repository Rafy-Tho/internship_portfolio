import { IconCode, IconServer, IconDatabase, IconTool } from '@tabler/icons-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Skills.module.css';

const categories = [
  {
    icon: IconCode,
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'CSS Modules', 'Responsive Design'],
  },
  {
    icon: IconServer,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT Authentication'],
  },
  {
    icon: IconDatabase,
    title: 'Database',
    skills: ['MongoDB', 'MySQL', 'Database Design', 'CRUD Operations'],
  },
  {
    icon: IconTool,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Vite'],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          label="Skills"
          title="Technologies I work with"
          description="Here are the tools and technologies I've used to build real applications."
        />

        <div ref={ref} className={`${styles.grid} reveal`}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className={styles.card}>
                <div className={styles.header}>
                  <div className={styles.iconWrap}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles.categoryTitle}>{cat.title}</h3>
                </div>
                <div className={styles.skills}>
                  {cat.skills.map((skill) => (
                    <span key={skill} className={styles.pill}>{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
