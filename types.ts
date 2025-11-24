export enum EventType {
  ALL = 'All',
  EVENT = 'Events',
  JOB = 'Jobs',
  HACKATHON = 'Hackathons'
}

export interface EventItem {
  id: number;
  type: EventType;
  date: string;
  month?: string;
  day?: string;
  title: string;
  description: string;
  time?: string;
  location?: string;
  imageUrl?: string;
}

export interface CircleItem {
  id: number;
  title: string;
  tagline: string;
  iconName: string;
  imageUrl?: string;
}

export interface ArticleItem {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
  readTime: string;
  author?: string;
  date?: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  quote: string;
  role?: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NotificationItem {
  id: number;
  title: string;
  type: 'Highlight' | 'Alert' | 'Update';
  message: string;
  linkText: string;
  date: string;
  imageUrl?: string;
}

export interface JobItem {
  id: number;
  role: string;
  type: string; // e.g. "Core Team", "Community", "Grant"
  description: string;
  tags: string[];
}