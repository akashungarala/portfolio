import type { ProfileContent } from '@/lib/types';

export const mockContent: ProfileContent = {
  name: 'Akash Ungarala',
  email: 'akash.ungarala@gmail.com',
  location: 'Los Angeles, CA',
  profileImage: '/assets/profile.jpg',
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/akashungarala',
    linkedin: 'https://linkedin.com/in/akashungarala',
  },
  headline: {
    badge: 'Available for opportunities',
    tagline:
      'Senior Software Engineer with 9+ years building high-scale distributed systems. Python and TypeScript expertise, architecting real-time platforms processing billions of events.',
    highlights: ['Senior Software Engineer', 'distributed systems', 'Python', 'TypeScript'],
  },
  about: {
    heading: 'Building systems that scale with confidence',
    intro:
      "I'm a Senior Backend Engineer with over 10 years of experience building and scaling distributed systems across diverse industries including gaming, fintech, media, and ad-tech.",
    philosophy:
      'My technical philosophy centers on three core principles: reliability, performance, and scale. I believe that great backend systems are invisible to users—they just work, fast and consistently, regardless of load.',
    currentFocus:
      "Currently, I'm focused on designing high-throughput platforms and real-time data pipelines. I have a deep interest in distributed systems architecture, service mesh patterns, and building infrastructure that empowers teams to ship faster with confidence.",
    coreValues: ['reliability', 'performance', 'scale'],
  },
  expertise: [
    { icon: 'server', label: 'Distributed Systems Architecture' },
    { icon: 'zap', label: 'High-Throughput Data Pipelines' },
    { icon: 'database', label: 'Real-Time Processing Systems' },
    { icon: 'cloud', label: 'Platform Engineering' },
  ],
  technologies: [
    { category: 'Languages', items: ['Go', 'Python', 'Node.js', 'Java'] },
    { category: 'Infrastructure', items: ['Kubernetes', 'Docker', 'Terraform'] },
    { category: 'Data', items: ['PostgreSQL', 'Redis', 'Kafka'] },
    { category: 'Cloud', items: ['AWS', 'GCP', 'Azure'] },
  ],
  workExperience: [
    {
      id: 'fox',
      company: 'Fox Corporation',
      title: 'Senior Software Engineer',
      location: 'Los Angeles, CA',
      startDate: '2022',
      endDate: 'Present',
      description:
        'Building real-time broadcast captioning systems and distributed media pipelines at scale.',
      highlights: [
        'Architected microservices platform handling live broadcast caption delivery for major TV networks',
        'Implemented WebSocket-based real-time communication infrastructure with sub-100ms latency',
        'Led development of multi-tenant caption exchange system supporting 100+ concurrent broadcasts',
      ],
    },
    {
      id: 'fidelity',
      company: 'Fidelity Investments',
      title: 'Senior Software Engineer',
      location: 'Boston, MA',
      startDate: '2020',
      endDate: '2022',
      description: 'Developed high-throughput trading systems and financial data pipelines.',
      highlights: [
        'Built real-time market data processing systems handling millions of events per second',
        'Designed SLO-based monitoring platform tracking 500+ microservices with intelligent alerting',
        'Optimized batch processing jobs reducing portfolio analytics computation time by 60%',
      ],
    },
  ],
  education: [
    {
      id: 'masters',
      school: 'University of Southern California',
      degree: 'Master of Science',
      field: 'Computer Science',
      location: 'Los Angeles, CA',
      startDate: '2011',
      endDate: '2013',
      description: 'Specialized in distributed systems and database systems.',
      highlights: [
        'Graduate coursework in distributed computing and algorithms',
        'Research focus on scalable data processing systems',
        'Teaching Assistant for database systems course',
      ],
    },
    {
      id: 'bachelors',
      school: 'Jawaharlal Nehru Technological University',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      location: 'Hyderabad, India',
      startDate: '2007',
      endDate: '2011',
      description: 'Foundation in computer science fundamentals and software engineering.',
      highlights: [
        'Strong foundation in data structures and algorithms',
        'Coursework in operating systems and computer networks',
        'Senior project on distributed file systems',
      ],
    },
  ],
  workProjects: [
    {
      id: 'caption-exchange',
      title: 'CaptionExchange Platform',
      description:
        'Real-time broadcast captioning system handling live caption delivery for major TV networks.',
      longDescription:
        'Multi-tenant platform enabling real-time caption exchange between broadcasters, supporting WebSocket-based communication and multiple transcription providers.',
      techStack: ['Node.js', 'TypeScript', 'WebSocket', 'Redis', 'Docker', 'Kubernetes'],
      featured: true,
      metrics: [
        'Sub-100ms latency for live captions',
        '99.99% uptime for broadcast operations',
        'Supporting 100+ concurrent broadcasts',
      ],
    },
    {
      id: 'slo-platform',
      title: 'SLO Monitoring Platform',
      description:
        'Service Level Objective monitoring and alerting platform for financial trading systems.',
      longDescription:
        'Built end-to-end SLO platform with custom metrics collection, anomaly detection, and intelligent alerting for high-frequency trading systems.',
      techStack: ['Python', 'Go', 'Prometheus', 'Grafana', 'Kafka', 'PostgreSQL'],
      featured: true,
      metrics: [
        'Monitoring 500+ microservices',
        'Processing 1M+ metrics per second',
        'Reduced incident response time by 60%',
      ],
    },
  ],
  personalProjects: [
    {
      id: 'portfolio-site',
      title: 'Personal Portfolio',
      description:
        'Modern portfolio website built with Next.js, featuring dark mode and smooth animations.',
      longDescription:
        'Production-grade portfolio showcasing modern web development practices with CI/CD, Docker, and comprehensive testing.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      featured: false,
      links: {
        github: 'https://github.com/akashungarala/portfolio',
        live: 'https://akashungarala.com',
      },
    },
  ],
  contact: {
    heading: "Let's work together",
    description:
      "I'm always interested in hearing about new opportunities, challenging projects, or just connecting with fellow engineers.",
    availability: 'Currently open to senior backend and platform engineering roles.',
  },
};

export const mockProjects = [
  {
    id: 'caption-exchange',
    title: 'CaptionExchange Platform',
    description:
      'Real-time broadcast captioning system handling live caption delivery for major TV networks.',
    longDescription:
      'Multi-tenant platform enabling real-time caption exchange between broadcasters, supporting WebSocket-based communication and multiple transcription providers.',
    techStack: ['Node.js', 'TypeScript', 'WebSocket', 'Redis', 'Docker', 'Kubernetes'],
    featured: true,
    category: 'work' as const,
    metrics: [
      'Sub-100ms latency for live captions',
      '99.99% uptime for broadcast operations',
      'Supporting 100+ concurrent broadcasts',
    ],
  },
  {
    id: 'slo-platform',
    title: 'SLO Monitoring Platform',
    description:
      'Service Level Objective monitoring and alerting platform for financial trading systems.',
    longDescription:
      'Built end-to-end SLO platform with custom metrics collection, anomaly detection, and intelligent alerting for high-frequency trading systems.',
    techStack: ['Python', 'Go', 'Prometheus', 'Grafana', 'Kafka', 'PostgreSQL'],
    featured: true,
    category: 'work' as const,
    metrics: [
      'Monitoring 500+ microservices',
      'Processing 1M+ metrics per second',
      'Reduced incident response time by 60%',
    ],
  },
];
