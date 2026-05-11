export interface Job {
  id: string;
  title: string;
  company: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  location: string;
  postedAt: string;
  salary?: string;
}

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Junior React Developer',
    company: 'TechCorp',
    type: 'Full-time',
    location: 'Remote',
    postedAt: '2026-05-10',
    salary: '$70k - $90k',
  },
  {
    id: '2',
    title: 'Software Engineering Intern',
    company: 'Innovate AI',
    type: 'Internship',
    location: 'San Francisco, CA',
    postedAt: '2026-05-09',
    salary: '$40/hr',
  },
  {
    id: '3',
    title: 'Entry-Level Python Dev',
    company: 'DataSystems',
    type: 'Full-time',
    location: 'New York, NY',
    postedAt: '2026-05-08',
    salary: '$80k - $100k',
  },
  {
    id: '4',
    title: 'Frontend Engineer (Vue)',
    company: 'WebSolutions',
    type: 'Full-time',
    location: 'Austin, TX',
    postedAt: '2026-05-07',
  },
  {
    id: '5',
    title: 'Backend Node.js Developer',
    company: 'ServerTech',
    type: 'Contract',
    location: 'Remote',
    postedAt: '2026-05-06',
    salary: '$50/hr',
  },
  {
    id: '6',
    title: 'Full Stack Web Intern',
    company: 'StartupHub',
    type: 'Internship',
    location: 'Boston, MA',
    postedAt: '2026-05-05',
  },
  {
    id: '7',
    title: 'Junior UI/UX Designer',
    company: 'CreativeSpace',
    type: 'Full-time',
    location: 'Seattle, WA',
    postedAt: '2026-05-04',
    salary: '$65k - $85k',
  },
  {
    id: '8',
    title: 'DevOps Associate',
    company: 'CloudNet',
    type: 'Full-time',
    location: 'Denver, CO',
    postedAt: '2026-05-03',
  },
  {
    id: '9',
    title: 'Machine Learning Intern',
    company: 'AI Research Labs',
    type: 'Internship',
    location: 'Remote',
    postedAt: '2026-05-02',
  },
  {
    id: '10',
    title: 'Junior Mobile App Developer',
    company: 'AppWorks',
    type: 'Full-time',
    location: 'Chicago, IL',
    postedAt: '2026-05-01',
    salary: '$75k - $95k',
  },
  {
    id: '11',
    title: 'QA Engineer',
    company: 'TestMasters',
    type: 'Contract',
    location: 'Remote',
    postedAt: '2026-04-30',
  },
  {
    id: '12',
    title: 'Data Analyst Intern',
    company: 'MetricsInc',
    type: 'Internship',
    location: 'Atlanta, GA',
    postedAt: '2026-04-29',
  },
  {
    id: '13',
    title: 'Junior Cybersecurity Analyst',
    company: 'SecureNet',
    type: 'Full-time',
    location: 'Washington, D.C.',
    postedAt: '2026-04-28',
    salary: '$85k - $105k',
  },
  {
    id: '14',
    title: 'Cloud Support Engineer',
    company: 'TechGiants',
    type: 'Full-time',
    location: 'Remote',
    postedAt: '2026-04-27',
  },
  {
    id: '15',
    title: 'Technical Writer Intern',
    company: 'DocuTech',
    type: 'Internship',
    location: 'Remote',
    postedAt: '2026-04-26',
  }
];
