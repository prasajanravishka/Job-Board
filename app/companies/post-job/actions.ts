'use server';

import { addJob } from '../../../data/jobs';
import { Job } from '../../../data/jobs';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createJobAction(formData: FormData) {
  const title = formData.get('title')?.toString().trim() ?? '';
  const company = formData.get('company')?.toString().trim() ?? '';
  const location = formData.get('location')?.toString().trim() ?? '';
  const type = formData.get('type')?.toString().trim() as Job['type'] | '';
  const skillsString = formData.get('skills')?.toString().trim() ?? '';
  const description = formData.get('description')?.toString().trim() ?? '';
  const salary = formData.get('salary')?.toString().trim() || undefined;

  if (!title || !company || !location || !type || !skillsString || !description) {
    throw new Error('All required fields must be completed.');
  }

  const skills = skillsString
    .split(',')
    .map((skill) => skill.trim())
    .filter(Boolean);

  if (skills.length === 0) {
    throw new Error('Please provide at least one required skill.');
  }

  const newJobData: Omit<Job, 'id'> = {
    title,
    company,
    location,
    type,
    skills,
    description,
    salary,
    postedAt: new Date().toISOString().split('T')[0],
  };

  addJob(newJobData);

  revalidatePath('/jobs');
  redirect('/jobs');
}
