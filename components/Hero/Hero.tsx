import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeHighlight}>New</span> Platform for Software Students
          </div>
          <h1 className={styles.title}>
            Launch Your Tech Career with <span className={styles.textPrimary}>Ravishka Job Border</span>
          </h1>
          <p className={styles.subtitle}>
            Discover top opportunities, internships, and entry-level positions tailored for software engineering students and recent graduates.
          </p>
          
          <div className={styles.searchContainer}>
            <form action="/jobs" className={styles.searchForm}>
              <div className={styles.inputGroup}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" name="q" placeholder="Job title, keyword or company" className={styles.input} />
              </div>
              <div className={styles.divider}></div>
              <div className={styles.inputGroup}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <input type="text" name="location" placeholder="City, state, or remote" className={styles.input} />
              </div>
              <button type="submit" className={styles.searchButton}>Find Jobs</button>
            </form>
            <div className={styles.popularTags}>
              <span>Popular:</span>
              <a href="#">Frontend</a>
              <a href="#">Backend</a>
              <a href="#">React</a>
              <a href="#">Python</a>
            </div>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/hero-illustration.png" 
              alt="Software students searching for jobs" 
              width={600} 
              height={500} 
              className={styles.image}
              priority
            />
            <div className={styles.decorationCircle1}></div>
            <div className={styles.decorationCircle2}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
