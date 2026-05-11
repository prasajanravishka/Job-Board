'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, FormEvent } from 'react';
import styles from './JobFilters.module.css';

export default function JobFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [q, setQ] = useState(searchParams.get('q') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [type, setType] = useState(searchParams.get('type') || '');
  const [skill, setSkill] = useState(searchParams.get('skill') || '');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (location) params.set('location', location);
    if (type) params.set('type', type);
    if (skill) params.set('skill', skill);
    // Reset page to 1 when searching
    params.set('page', '1');

    router.push(`/jobs?${params.toString()}`);
  };

  const handleClear = () => {
    setQ('');
    setLocation('');
    setType('');
    setSkill('');
    router.push('/jobs');
  };

  return (
    <div className={styles.filtersContainer}>
      <h3 className={styles.filtersTitle}>Filter Jobs</h3>
      <form onSubmit={handleSearch} className={styles.filtersForm}>
        
        <div className={styles.formGroup}>
          <label htmlFor="q">Search Term</label>
          <input
            type="text"
            id="q"
            placeholder="Job title or company..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="City, state, or remote..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="type">Job Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className={styles.select}
          >
            <option value="">Any Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="skill">Skill</label>
          <input
            type="text"
            id="skill"
            placeholder="e.g. React, Python..."
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.actions}>
          <button type="submit" className={styles.searchBtn}>Search Jobs</button>
          <button type="button" onClick={handleClear} className={styles.clearBtn}>Clear Filters</button>
        </div>
      </form>
    </div>
  );
}
