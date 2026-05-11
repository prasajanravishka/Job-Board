import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandInfo}>
            <Link href="/" className={styles.logo}>
              Ravishka <span className={styles.highlight}>JOB Board</span>
            </Link>
            <p className={styles.description}>
              Connecting passionate software engineering students with top tech companies worldwide. Build your career with us.
            </p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>For Students</h3>
              <ul>
                <li><Link href="/jobs">Browse Jobs</Link></li>
                <li><Link href="/companies">Explore Companies</Link></li>
                <li><Link href="/salary-guide">Salary Guide</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>For Employers</h3>
              <ul>
                <li><Link href="/post-job">Post a Job</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/resources">Resources</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>Legal</h3>
              <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Ravishka Job Board. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="GitHub">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
