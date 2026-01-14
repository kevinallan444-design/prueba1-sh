export interface Testimonial {
  id: number;
  name: string;
  role: string;
  videoThumbnail: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}