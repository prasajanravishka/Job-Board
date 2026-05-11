import { generateJobId } from '../utils/idGenerator';

export interface Job {
  id: string;
  title: string;
  company: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  location: string;
  postedAt: string;
  salary?: string;
  skills: string[];
  description: string;
}

const rawJobs: Omit<Job, 'id'>[] = [
  {
    title: 'Junior React Developer',
    company: 'TechCorp',
    type: 'Full-time',
    location: 'Remote',
    postedAt: '2026-05-10',
    salary: '$70k - $90k',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Git'],
    description: 'TechCorp is looking for a passionate Junior React Developer to join our growing team. You will be responsible for developing new user-facing features, determining the structure and design of web pages, and building reusable code and libraries for future use.'
  },
  {
    title: 'Software Engineering Intern',
    company: 'Innovate AI',
    type: 'Internship',
    location: 'San Francisco, CA',
    postedAt: '2026-05-09',
    salary: '$40/hr',
    skills: ['Python', 'C++', 'Data Structures', 'Algorithms'],
    description: 'Join Innovate AI as a Software Engineering Intern and work on cutting-edge artificial intelligence projects. You will collaborate with senior engineers to design, test, and implement scalable software solutions.'
  },
  {
    title: 'Entry-Level Python Dev',
    company: 'DataSystems',
    type: 'Full-time',
    location: 'New York, NY',
    postedAt: '2026-05-08',
    salary: '$80k - $100k',
    skills: ['Python', 'Django', 'SQL', 'REST APIs'],
    description: 'DataSystems is seeking an Entry-Level Python Developer. The ideal candidate will have a strong foundation in Python programming and an interest in building robust backend services.'
  },
  {
    title: 'Frontend Engineer (Vue)',
    company: 'WebSolutions',
    type: 'Full-time',
    location: 'Austin, TX',
    postedAt: '2026-05-07',
    skills: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Webpack'],
    description: 'WebSolutions is looking for a skilled Frontend Engineer specializing in Vue.js. You will translate UI/UX design wireframes to actual code that will produce visual elements of the application.'
  },
  {
    title: 'Backend Node.js Developer',
    company: 'ServerTech',
    type: 'Contract',
    location: 'Remote',
    postedAt: '2026-05-06',
    salary: '$50/hr',
    skills: ['Node.js', 'Express', 'MongoDB', 'AWS'],
    description: 'ServerTech needs a Backend Node.js Developer on a contract basis to help scale our microservices architecture. Experience with cloud deployments is a major plus.'
  },
  {
    title: 'Full Stack Web Intern',
    company: 'StartupHub',
    type: 'Internship',
    location: 'Boston, MA',
    postedAt: '2026-05-05',
    skills: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    description: 'Get hands-on experience as a Full Stack Web Intern at StartupHub. You will work across the entire stack, from database design to frontend implementation.'
  },
  {
    title: 'Junior UI/UX Designer',
    company: 'CreativeSpace',
    type: 'Full-time',
    location: 'Seattle, WA',
    postedAt: '2026-05-04',
    salary: '$65k - $85k',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    description: 'CreativeSpace is hiring a Junior UI/UX Designer to create intuitive and aesthetically pleasing user interfaces. You will work closely with product managers and engineers.'
  },
  {
    title: 'DevOps Associate',
    company: 'CloudNet',
    type: 'Full-time',
    location: 'Denver, CO',
    postedAt: '2026-05-03',
    skills: ['Linux', 'Docker', 'CI/CD', 'Bash'],
    description: 'CloudNet is looking for a DevOps Associate to assist in automating and streamlining our operations and processes. Build and maintain tools for deployment, monitoring, and operations.'
  },
  {
    title: 'Machine Learning Intern',
    company: 'AI Research Labs',
    type: 'Internship',
    location: 'Remote',
    postedAt: '2026-05-02',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Analysis'],
    description: 'AI Research Labs offers a Machine Learning Internship for students passionate about deep learning. Contribute to research projects and help build proof-of-concept models.'
  },
  {
    title: 'Junior Mobile App Developer',
    company: 'AppWorks',
    type: 'Full-time',
    location: 'Chicago, IL',
    postedAt: '2026-05-01',
    salary: '$75k - $95k',
    skills: ['React Native', 'iOS', 'Android', 'Swift'],
    description: 'AppWorks is searching for a Junior Mobile App Developer to build cross-platform applications using React Native. Bring innovative mobile solutions to life.'
  },
  {
    title: 'QA Engineer',
    company: 'TestMasters',
    type: 'Contract',
    location: 'Remote',
    postedAt: '2026-04-30',
    skills: ['Selenium', 'Cypress', 'Manual Testing', 'Jira'],
    description: 'TestMasters needs a detail-oriented QA Engineer to ensure the quality of our software releases. You will create and execute test plans, report bugs, and verify fixes.'
  },
  {
    title: 'Data Analyst Intern',
    company: 'MetricsInc',
    type: 'Internship',
    location: 'Atlanta, GA',
    postedAt: '2026-04-29',
    skills: ['SQL', 'Excel', 'Tableau', 'Python'],
    description: 'MetricsInc is looking for a Data Analyst Intern to help interpret data, analyze results using statistical techniques, and provide ongoing reports.'
  },
  {
    title: 'Junior Cybersecurity Analyst',
    company: 'SecureNet',
    type: 'Full-time',
    location: 'Washington, D.C.',
    postedAt: '2026-04-28',
    salary: '$85k - $105k',
    skills: ['Network Security', 'Ethical Hacking', 'Splunk', 'Linux'],
    description: 'SecureNet is hiring a Junior Cybersecurity Analyst to monitor our network for security breaches and investigate violations. Help protect our infrastructure from threats.'
  },
  {
    title: 'Cloud Support Engineer',
    company: 'TechGiants',
    type: 'Full-time',
    location: 'Remote',
    postedAt: '2026-04-27',
    skills: ['AWS', 'Azure', 'Troubleshooting', 'Networking'],
    description: 'TechGiants is seeking a Cloud Support Engineer to provide technical assistance to our cloud customers. Resolve complex issues and ensure high availability.'
  },
  {
    title: 'Technical Writer Intern',
    company: 'DocuTech',
    type: 'Internship',
    location: 'Remote',
    postedAt: '2026-04-26',
    skills: ['Technical Writing', 'Markdown', 'Git', 'Communication'],
    description: 'DocuTech needs a Technical Writer Intern to produce high-quality documentation that contributes to the overall success of our products. Work with engineering teams to make products easier to use.'
  }
];

export const jobs: Job[] = (() => {
  const existingIds = new Set<string>();
  return rawJobs.map((job) => ({
    ...job,
    id: generateJobId(job.title, job.company, existingIds),
  }));
})();
