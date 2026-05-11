import Hero from '../components/Hero/Hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      
      {/* Placeholder sections for the rest of the landing page */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Popular Categories</h2>
            <p>Explore jobs across various tech domains</p>
          </div>
          
          <div className={styles.grid}>
            {[
              { title: 'Frontend Developer', count: '120+ Jobs', icon: '💻' },
              { title: 'Backend Developer', count: '90+ Jobs', icon: '⚙️' },
              { title: 'Full Stack Engineer', count: '150+ Jobs', icon: '🚀' },
              { title: 'UI/UX Designer', count: '50+ Jobs', icon: '🎨' },
            ].map((cat, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.icon}>{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Latest Opportunities</h2>
            <p>Recently posted jobs looking for fresh talent</p>
          </div>
          
          <div className={styles.jobList}>
            {[
              { title: 'Junior React Developer', company: 'TechCorp', type: 'Full-time', location: 'Remote' },
              { title: 'Software Engineering Intern', company: 'Innovate AI', type: 'Internship', location: 'San Francisco, CA' },
              { title: 'Entry-Level Python Dev', company: 'DataSystems', type: 'Full-time', location: 'New York, NY' },
            ].map((job, i) => (
              <div key={i} className={styles.jobCard}>
                <div className={styles.jobInfo}>
                  <h3>{job.title}</h3>
                  <p className={styles.company}>{job.company}</p>
                </div>
                <div className={styles.jobMeta}>
                  <span className={styles.tag}>{job.type}</span>
                  <span className={styles.tag}>{job.location}</span>
                </div>
                <button className={styles.applyBtn}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
