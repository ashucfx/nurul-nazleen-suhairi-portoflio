export interface MetricItem {
  id: string;
  value: string;
  label: string;
  descriptor: string;
  context: string;
  sourceRef: string;
}

export interface CareerRole {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  startYear: number;
  endYear: number | 'Present';
  mandate: string;
  impactPoints: string[];
  technologies: string[];
  category: 'executive' | 'operations' | 'engineering';
}

export interface ExpertiseCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  competencies: string[];
  deliverables: string[];
  standards: string[];
}

export interface ImpactCard {
  id: string;
  category: string;
  metric: string;
  title: string;
  narrative: string;
  context: string;
  scope: string;
  tag: string;
}

export interface PhilosophyPillar {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  quote: string;
}

export interface InsightTopic {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'Executive Insight' | 'Featured Topic' | 'Strategic Blueprint' | 'Keynote Proceedings';
  badge: string;
  takeaways: string[];
}

export interface CredentialItem {
  id: string;
  title: string;
  institution: string;
  year?: string;
  category: 'education' | 'statutory' | 'technical' | 'affiliation';
  badge?: string;
  description?: string;
}
