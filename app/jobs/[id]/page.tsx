import { notFound } from 'next/navigation';
import Link from 'next/link';
import { jobs } from '../../../data/jobs';
import styles from './page.module.css';

type Props = {
  params: Promise<{ id: string }>
}



export default async function JobDetailPage(props: Props) {
  const params = await props.params;
  const job = jobs.find(j => j.id === params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.headerBanner}>
        <div className={styles.container}>
          <Link href="/jobs" className={styles.backLink}>
            &larr; Back to Jobs
          </Link>
          <div className={styles.headerContent}>
            <div className={styles.titleSection}>
              <h1>{job.title}</h1>
              <p className={styles.companyName}>{job.company}</p>
            </div>
            <div className={styles.applySectionDesktop}>
              <button className={styles.primaryApplyBtn}>Apply Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.mainLayout}>
          <div className={styles.content}>
            <div className={styles.overviewCard}>
              <h2>Job Overview</h2>
              <div className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Location</span>
                  <span className={styles.metaValue}>{job.location}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Job Type</span>
                  <span className={styles.metaValue}>{job.type}</span>
                </div>
                {job.salary && (
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Salary</span>
                    <span className={styles.metaValue}>{job.salary}</span>
                  </div>
                )}
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Date Posted</span>
                  <span className={styles.metaValue}>{new Date(job.postedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className={styles.descriptionSection}>
              <h2>Job Description</h2>
              <p>{job.description}</p>
            </div>

            <div className={styles.skillsSection}>
              <h2>Required Skills</h2>
              <div className={styles.tagsContainer}>
                {job.skills.map(skill => (
                  <span key={skill} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Ready to apply?</h3>
              <p>Don't miss out on this opportunity at {job.company}.</p>
              <button className={styles.fullWidthApplyBtn}>Apply Now</button>
              <button className={styles.saveBtn}>Save Job</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
