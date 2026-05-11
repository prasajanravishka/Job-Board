import Link from 'next/link';
import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      {currentPage > 1 ? (
        <Link href={`/?page=${currentPage - 1}`} className={styles.button}>
          Previous
        </Link>
      ) : (
        <span className={`${styles.button} ${styles.disabled}`}>Previous</span>
      )}
      
      <span className={styles.info}>
        Page {currentPage} of {totalPages}
      </span>
      
      {currentPage < totalPages ? (
        <Link href={`/?page=${currentPage + 1}`} className={styles.button}>
          Next
        </Link>
      ) : (
        <span className={`${styles.button} ${styles.disabled}`}>Next</span>
      )}
    </div>
  );
}
