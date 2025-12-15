export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "Users" | "Car" | "Wrench";
  bullets: string[];
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
