"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover focus:ring-accent shadow-sm hover:shadow-md",
    secondary:
      "bg-white text-primary border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:ring-gray-200 shadow-sm",
    ghost: "bg-transparent text-secondary hover:text-primary hover:bg-gray-100",
    outline: "border border-accent text-accent hover:bg-accent/5",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Reveal Animation Wrapper ---
interface RevealProps {
  children: React.ReactNode;
  delay?: number; // ms
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const transitionDelay = `${delay}ms`;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay }}
    >
      {children}
    </div>
  );
};

// --- Card ---
export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}> = ({ children, className = "", hoverEffect = false }) => {
  const hoverClasses = hoverEffect
    ? "hover:-translate-y-1 hover:shadow-lg hover:border-accent/30"
    : "";
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 transition-all duration-300 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};

// --- Badge ---
export const Badge: React.FC<{ children: React.ReactNode; icon?: React.ReactNode }> =
  ({ children, icon }) => (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </span>
  );

// --- Accordion Item ---
export const AccordionItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg font-medium transition-colors duration-200 ${isOpen ? "text-accent" : "text-primary group-hover:text-accent"}`}
        >
          {question}
        </span>
        <span
          className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : "text-gray-400"}`}
        >
          <ChevronDown size={20} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-5" : "max-h-0 opacity-0"}`}
      >
        <p className="text-secondary leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};
