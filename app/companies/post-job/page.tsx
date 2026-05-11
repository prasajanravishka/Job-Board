import PostJobForm from './PostJobForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Create a Job Posting - Ravishka Job Board',
  description: 'Post a new job opening and reach thousands of developers.',
};

export default function PostJobPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Create a Job Posting</h1>
          <p className={styles.subtitle}>Fill out the details below to reach top tech talent.</p>
        </header>

        <main className={styles.main}>
          <PostJobForm />
        </main>
      </div>
    </div>
  );
}
