import Link from 'next/link';
import { Job } from '../../data/jobs';
import styles from './JobCard.module.css';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className={styles.jobCard}>
      <div className={styles.jobInfo}>
        <Link href={`/jobs/${job.id}`} className={styles.jobTitleLink}>
          <h3>{job.title}</h3>
        </Link>
        <p className={styles.company}>{job.company}</p>
      </div>
      <div className={styles.jobMeta}>
        <span className={styles.tag}>{job.type}</span>
        <span className={styles.tag}>{job.location}</span>
        {job.salary && <span className={styles.tag}>{job.salary}</span>}
        <span className={styles.tag}>{new Date(job.postedAt).toLocaleDateString()}</span>
      </div>
      <Link href={`/jobs/${job.id}`} className={styles.applyBtn}>
        View Details
      </Link>
    </div>
  );
}
