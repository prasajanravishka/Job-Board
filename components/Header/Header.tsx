import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.logoIcon}>
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            Ravishka <span className={styles.highlight}>JOB Board</span>
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/jobs" className={styles.navLink}>Find Jobs</Link></li>
            <li><Link href="/companies" className={styles.navLink}>Companies</Link></li>
            <li><Link href="/about" className={styles.navLink}>About Us</Link></li>
          </ul>
        </nav>
        
        <div className={styles.actions}>
          <Link href="/login" className={styles.loginBtn}>Sign In</Link>
          <Link href="/companies/post-job" className={styles.postJobBtn}>Post a Job</Link>
        </div>
        
        {/* Mobile menu button (placeholder for actual interactive menu) */}
        <button className={styles.mobileMenuBtn} aria-label="Open Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
