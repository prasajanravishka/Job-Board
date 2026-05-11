import { jobs } from '../../data/jobs';
import JobCard from '../../components/JobCard/JobCard';
import JobFilters from '../../components/JobFilters/JobFilters';
import Pagination from '../../components/Pagination/Pagination';
import styles from './page.module.css';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const ITEMS_PER_PAGE = 5;

export default async function JobsPage(props: Props) {
  const searchParams = await props.searchParams;
  
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) : 1;
  const currentPage = isNaN(page) || page < 1 ? 1 : page;

  const q = typeof searchParams.q === 'string' ? searchParams.q.toLowerCase() : '';
  const locationFilter = typeof searchParams.location === 'string' ? searchParams.location.toLowerCase() : '';
  const typeFilter = typeof searchParams.type === 'string' ? searchParams.type : '';
  const skillFilter = typeof searchParams.skill === 'string' ? searchParams.skill.toLowerCase() : '';

  // Filter the jobs based on searchParams
  const filteredJobs = jobs.filter((job) => {
    let matches = true;

    if (q) {
      const jobTitle = job.title.toLowerCase();
      const jobCompany = job.company.toLowerCase();
      if (!jobTitle.includes(q) && !jobCompany.includes(q)) matches = false;
    }

    if (locationFilter && !job.location.toLowerCase().includes(locationFilter)) {
      matches = false;
    }

    if (typeFilter && job.type !== typeFilter) {
      matches = false;
    }

    if (skillFilter) {
      const hasSkill = job.skills.some(skill => skill.toLowerCase().includes(skillFilter));
      if (!hasSkill) matches = false;
    }

    return matches;
  });

  const totalItems = filteredJobs.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

  // Pagination logic on filtered jobs
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1>Find Your Dream Job</h1>
          <p>Browse through our extensive list of opportunities</p>
        </div>
      </div>

      <div className={`${styles.container} ${styles.mainLayout}`}>
        <aside className={styles.sidebar}>
          <JobFilters />
        </aside>

        <main className={styles.jobListContainer}>
          <div className={styles.resultsHeader}>
            <p>Showing {totalItems} {totalItems === 1 ? 'job' : 'jobs'}</p>
          </div>

          <div className={styles.jobList}>
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <div className={styles.noResults}>
                <h3>No jobs found matching your criteria.</h3>
                <p>Try adjusting your filters or search term.</p>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className={styles.paginationWrapper}>
              <Pagination currentPage={currentPage} totalPages={totalPages} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
