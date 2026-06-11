import { IconCode, IconBulb, IconTrendingUp } from '@tabler/icons-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './About.module.css';

export default function About() {
  const ref = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          label="About"
          title="A developer who builds with purpose"
          description="I started coding because I wanted to build things that solve real problems. Every project I work on teaches me something new."
        />

        <div className={styles.grid}>
          <div ref={ref} className={`${styles.story} reveal`}>
            <p>
              My journey into programming started with curiosity about how websites work.
              What began as inspecting elements in a browser turned into building complete
              full-stack applications. I fell in love with the process of turning ideas
              into working software.
            </p>
            <p>
              I enjoy building practical applications — food ordering systems, reservation
              platforms, and tools that make everyday tasks easier. For me, the best code
              is the code that solves a real user problem.
            </p>
            <p>
              Currently, I'm deepening my understanding of backend architecture, database
              design, and deployment workflows. My goal is to join a team where I can
              contribute to meaningful projects while continuing to grow as an engineer.
            </p>
          </div>

          <div ref={cardsRef} className={`${styles.values} reveal`}>
            <div className={styles.card}>
              <div className={styles.iconWrap}>
                <IconCode size={22} />
              </div>
              <h3 className={styles.cardTitle}>Curiosity Driven</h3>
              <p className={styles.cardText}>
                I don't just use tools — I understand them. Every bug is a learning
                opportunity.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrap}>
                <IconBulb size={22} />
              </div>
              <h3 className={styles.cardTitle}>Consistent Builder</h3>
              <p className={styles.cardText}>
                I code every day. Small improvements compound into real engineering skill.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrap}>
                <IconTrendingUp size={22} />
              </div>
              <h3 className={styles.cardTitle}>Growth Mindset</h3>
              <p className={styles.cardText}>
                I actively seek feedback, embrace challenges, and measure progress by what
                I can build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
