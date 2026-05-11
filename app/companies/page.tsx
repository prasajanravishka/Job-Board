import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Post a Job - Ravishka Job Board',
  description: 'Hire top tech talent by posting your job on the Ravishka Job Board.',
};

export default function CompaniesLandingPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Hire Top Tech Talent Faster</h1>
          <p className={styles.subtitle}>
            Join hundreds of innovative companies finding their next great hire on the Ravishka Job Board.
          </p>
          <div className={styles.ctaWrapper}>
            <Link href="/companies/post-job" className={styles.ctaButton}>
              Post a Job Now
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Post With Us?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🎯</div>
              <h3 className={styles.cardTitle}>Targeted Audience</h3>
              <p className={styles.cardText}>
                Reach a highly qualified pool of software engineering students, recent graduates, and experienced professionals.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>⚡</div>
              <h3 className={styles.cardTitle}>Quick Setup</h3>
              <p className={styles.cardText}>
                Create and publish your job posting in minutes. No complex onboarding or hidden fees.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📈</div>
              <h3 className={styles.cardTitle}>High Visibility</h3>
              <p className={styles.cardText}>
                Our clean, modern interface ensures your job listing stands out and attracts the right candidates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
