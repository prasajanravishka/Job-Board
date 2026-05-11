'use client';

import { useState } from 'react';
import { createJobAction } from './actions';
import styles from './page.module.css';

export default function PostJobForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form 
      className={styles.form} 
      action={async (formData) => {
        setIsSubmitting(true);
        await createJobAction(formData);
      }}
    >
      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.label}>Job Title *</label>
        <input type="text" id="title" name="title" required className={styles.input} placeholder="e.g. Senior Frontend Developer" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="company" className={styles.label}>Company Name *</label>
        <input type="text" id="company" name="company" required className={styles.input} placeholder="e.g. TechCorp Inc." />
      </div>

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="location" className={styles.label}>Location *</label>
          <input type="text" id="location" name="location" required className={styles.input} placeholder="e.g. Remote, New York" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="type" className={styles.label}>Job Type *</label>
          <select id="type" name="type" required className={styles.select}>
            <option value="">Select a type...</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="skills" className={styles.label}>Required Skills *</label>
        <input 
          type="text" 
          id="skills" 
          name="skills" 
          required 
          className={styles.input} 
          placeholder="e.g. React, TypeScript, Node.js (comma separated)" 
        />
        <span className={styles.helpText}>Separate skills with commas.</span>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>Job Description *</label>
        <textarea 
          id="description" 
          name="description" 
          required 
          className={styles.textarea} 
          placeholder="Describe the role, responsibilities, and requirements..."
          rows={6}
        ></textarea>
      </div>

      <div className={styles.formActions}>
        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? 'Posting...' : 'Post Job'}
        </button>
      </div>
    </form>
  );
}
