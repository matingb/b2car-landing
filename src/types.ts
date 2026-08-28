export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "Users" | "Car" | "Wrench" | "Package" | "TrendingUp";
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

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  period?: string;
  savings?: string;
  popular?: boolean;
  description?: string;
}

