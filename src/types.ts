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

export type BillingDuration = "mensual" | "semestral" | "anual";


export interface PlanPriceDetail {
  total: number;
  monthlyEq: number;
  original: number | null;
  badge: string | null;
  discount: string | null;
}


