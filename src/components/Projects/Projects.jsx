import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../SectionHeader/SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          label="Projects"
          title="Applications I've built"
          description="Each project represents real work — planning, building, debugging, and deploying complete full-stack applications."
        />

        <div ref={ref} className={`${styles.grid} reveal`}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
