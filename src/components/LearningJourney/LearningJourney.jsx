import { IconSchool, IconBulb, IconTrendingUp } from "@tabler/icons-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./LearningJourney.module.css";

const milestones = [
  {
    period: "Foundation",
    items: [
      "Learned HTML, CSS, and JavaScript fundamentals",
      "Built first static websites and interactive pages",
      "Understood the DOM and browser developer tools",
    ],
  },
  {
    period: "Frontend Development",
    items: [
      "Mastered React: components, hooks, state management",
      "Learned responsive design and CSS Modules",
      "Built single-page applications with routing",
    ],
  },
  {
    period: "Backend Development",
    items: [
      "Learned Node.js and Express for server-side development",
      "Built and consumed REST APIs",
      "Implemented JWT authentication and authorization",
    ],
  },
  {
    period: "Databases",
    items: [
      "Worked with MongoDB for document-based data",
      "Learned MySQL for relational database management",
      "Designed database schemas and wrote complex queries",
    ],
  },
  {
    period: "Full Stack Integration",
    items: [
      "Connected frontend to backend with API integration",
      "Implemented CRUD operations across the stack",
      "Deployed full-stack applications to production",
    ],
  },
];

const concepts = [
  "REST APIs",
  "JWT Authentication",
  "State Management",
  "Responsive Design",
  "Database Design",
  "Error Handling",
  "Debugging",
  "Clean Code",
  "Git Workflow",
  "API Integration",
];

export default function LearningJourney() {
  const timelineRef = useScrollReveal();
  const conceptsRef = useScrollReveal();

  return (
    <section id="learning" className="section">
      <div className="container">
        <SectionHeader
          label="Learning Journey"
          title="How I've grown as a developer"
          description="Every line of code taught me something. Here's a look at my learning path and the concepts I've mastered along the way."
        />

        <div className={styles.grid}>
          <div ref={timelineRef} className={`${styles.timeline} reveal`}>
            {milestones.map((m, idx) => (
              <div key={m.period} className={styles.milestone}>
                <div className={styles.milestoneDot} />
                {idx < milestones.length - 1 && (
                  <div className={styles.milestoneLine} />
                )}
                <div className={styles.milestoneContent}>
                  <h3 className={styles.period}>{m.period}</h3>
                  <ul className={styles.milestoneList}>
                    {m.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div ref={conceptsRef} className={`${styles.sidebar} reveal`}>
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarHeader}>
                <IconBulb size={18} />
                <h3>Key Concepts Learned</h3>
              </div>
              <div className={styles.conceptsGrid}>
                {concepts.map((c) => (
                  <span key={c} className={styles.conceptPill}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <div className={styles.sidebarHeader}>
                <IconTrendingUp size={18} />
                <h3>Growth Milestones</h3>
              </div>
              <ul className={styles.growthList}>
                <li>Built 2 complete full-stack applications</li>
                <li>Wrote clean, maintainable code</li>
                <li>Learned to debug systematically</li>
                <li>Developed project planning skills</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
