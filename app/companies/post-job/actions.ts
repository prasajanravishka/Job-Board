'use server';

import { addJob } from '../../../data/jobs';
import { Job } from '../../../data/jobs';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createJobAction(formData: FormData) {
  const title = formData.get('title') as string;
  const company = formData.get('company') as string;
  const location = formData.get('location') as string;
  const type = formData.get('type') as Job['type'];
  const skillsString = formData.get('skills') as string;
  const description = formData.get('description') as string;
  
  const skills = skillsString.split(',').map(s => s.trim()).filter(Boolean);

  const newJobData: Omit<Job, 'id'> = {
    title,
    company,
    location,
    type,
    skills,
    description,
    postedAt: new Date().toISOString().split('T')[0], // YYYY-MM-DD
  };

  addJob(newJobData);

  // Revalidate the jobs page so the new job appears
  revalidatePath('/jobs');
  
  // Redirect to jobs page
  redirect('/jobs');
}
