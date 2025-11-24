import { EventItem, EventType, CircleItem, ArticleItem, TestimonialItem, FAQItem, NotificationItem, JobItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Events', href: '#events' },
  { name: 'Community', href: '#circles' },
  { name: 'Hackathons', href: '#hackathon' },
  { name: 'Open Roles', href: '#open-roles' },
  { name: 'Blogs', href: '#news' },
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 1,
    type: EventType.EVENT,
    date: 'Nov 19',
    day: '19',
    month: 'Nov',
    title: 'The DF All Hands',
    description: 'Global Townhalls to Local Workshops.',
    time: '10:00 AM EST',
    location: 'Online',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    type: EventType.EVENT,
    date: 'Nov 27',
    day: '27',
    month: 'Nov',
    title: 'Town Hall #75',
    description: 'Monthly meetup to discuss governance.',
    time: '1 Hrs 30 Mins',
    location: 'Discord',
    imageUrl: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    type: EventType.EVENT,
    date: 'Dec 03',
    day: '03',
    month: 'Dec',
    title: 'DF Open All Hands',
    description: 'Building the future of AI together.',
    time: '1 Hrs 30 Mins',
    location: 'Youtube Live',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    type: EventType.EVENT,
    date: 'Dec 15',
    day: '15',
    month: 'Dec',
    title: 'Governance Vote Close',
    description: 'Final day to cast your vote for Round 4.',
    time: '23:59 UTC',
    location: 'Snapshot',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  }
];

export const NOTIFICATIONS_DATA: NotificationItem[] = [
  {
    id: 1,
    title: 'Reflections from BGI Event',
    type: 'Highlight',
    message: 'Highlights from our time in Istanbul engaging with the global developer community.',
    linkText: 'Read more',
    date: '2 days ago',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    title: 'South-South Region Hackathon',
    type: 'Update',
    message: 'Nigeria National AI Hackathon 2025 is now accepting applications.',
    linkText: 'Apply now',
    date: '1 week ago',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    title: 'ASI: Cloud Launch Announcement',
    type: 'Alert',
    message: 'Unlocking Next-Gen AI: ASI Alliance & SNA Elevate ASI:Cloud.',
    linkText: 'View details',
    date: 'Yesterday',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80'
  }
];

export const CIRCLES_DATA: CircleItem[] = [
  {
    id: 1,
    title: 'Development',
    tagline: 'Core tech & infrastructure',
    iconName: 'Code2',
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Ideas & Innovation',
    tagline: 'Brainstorming new use cases',
    iconName: 'Lightbulb',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Project Voting',
    tagline: 'Governance & decision making',
    iconName: 'Vote',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Marketing & Outreach',
    tagline: 'Spreading the word globally',
    iconName: 'Megaphone',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80'
  }
];

export const JOBS_DATA: JobItem[] = [
  {
    id: 1,
    role: 'BizDev Team Member',
    type: 'Marketing Circle',
    description: 'We are seeking strategic members for Deep Fundings Business Development Circle.',
    tags: ['Remote', 'Part-Time', 'Hour base pay']
  },
  {
    id: 2,
    role: 'Technical Lead',
    type: 'Technical Role',
    description: 'Person Background: Around 2 years of experience in their technical field.',
    tags: ['Remote', 'Part-Time', 'Hour base pay']
  },
  {
    id: 3,
    role: 'Open Application',
    type: 'Community',
    description: 'While there are currently no open positions, we are always interested in meeting new candidates.',
    tags: ['Remote', 'Part-Time', 'Hour base pay']
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 1,
    title: 'Nigeria National AI Hackathon 2025',
    summary: 'Nigeria\'s AI Future Starts Now. Artificial Intelligence is the engine of global progress.',
    imageUrl: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80',
    category: 'Marketing Circle',
    readTime: '5 Min Read',
    date: 'Oct 24, 2023'
  },
  {
    id: 2,
    title: 'BGI Nexus 2025: Converging Innovation',
    summary: 'From decentralized ideas to collective impact, this is what the future of AI looks like.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    category: 'Marketing Circle',
    readTime: '5 Min Read',
    date: 'Oct 18, 2023'
  },
  {
    id: 3,
    title: 'AI for Peace: Powering Solutions',
    summary: 'The world faces conflicts, climate disasters, and humanitarian crises that demand new solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    category: 'Governance',
    readTime: '6 Min Read',
    date: 'Oct 10, 2023'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    name: 'John M.',
    role: 'AI Researcher',
    quote: 'I’ve learned so much and met amazing people here. The collaborative spirit is unmatched.',
    imageUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 2,
    name: 'Laura P.',
    role: 'Startup Founder',
    quote: 'This community helped me launch and grow my project! The funding process was transparent.',
    imageUrl: 'https://picsum.photos/100/100?random=11'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How do I participate?',
    answer: 'Just click ‘Join Community’ and jump into our Discord or Forum.'
  },
  {
    question: 'Can I contribute?',
    answer: 'Yes! Whether you code, write, or design, there is a Circle for you.'
  },
  {
    question: 'How do project votes work?',
    answer: 'Token holders vote on proposals every cycle to allocate funding.'
  }
];