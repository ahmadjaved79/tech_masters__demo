export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  duration?: string;
  topics?: string[];
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  college: string;
  company?: string;
  rating: number;
  text: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AudienceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RegistrationData {
  fullName: string;
  mobile: string;
  email: string;
  college: string;
  branch: string;
  year: string;
}
