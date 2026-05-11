import Hero from '../components/Hero/Hero';
import Pagination from '../components/Pagination/Pagination';
import { jobs } from '../data/jobs';
import JobCard from '../components/JobCard/JobCard';
import styles from './page.module.css';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const ITEMS_PER_PAGE = 5;

export default async function Home(props: Props) {
  const searchParams = await props.searchParams;
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) : 1;
  const currentPage = isNaN(page) || page < 1 ? 1 : page;

  const totalItems = jobs.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentJobs = jobs.slice(startIndex, endIndex);

  return (
    <div className={styles.page}>
      <Hero />

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
            {currentJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </section>
    </div>
  );
}
