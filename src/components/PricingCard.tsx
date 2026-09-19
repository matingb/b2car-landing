"use client";

import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

import { formatCurrency } from "../constants";
import type { BillingDuration, PlanPriceDetail } from "../types";

export interface PricingCardProps {
  title: string;
  priceDetail: PlanPriceDetail;
  duration: BillingDuration;
  features: string[];
  ctaText: string;
  onSelect: () => void;
  isPopular?: boolean;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  priceDetail,
  duration,
  features,
  ctaText,
  onSelect,
  isPopular = false,
  className = "",
}) => {
  const periodLabel =
    duration === "semestral" ? "semestre" : "año";

  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
        isPopular
          ? "bg-gradient-to-b from-accent/[0.04] via-white to-white shadow-xl shadow-gray-200/50 relative border-2 border-accent"
          : "bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300"
      } ${className}`}
    >
      {/* Popular tag on top if applicable */}
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Más elegido
        </div>
      )}

      <div>
        <div className="mb-6">
          <h3
            className={`text-2xl font-bold mb-2 ${
              isPopular ? "text-accent" : "text-primary"
            }`}
          >
            {title}
          </h3>
        </div>

        {/* Price section */}
        <div
          className={`mb-6 pb-6 border-b ${
            isPopular ? "border-accent/15" : "border-gray-100"
          }`}
        >
          <div className="flex items-baseline gap-1">
            <span className="text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
              {formatCurrency(priceDetail.monthlyEq)}
            </span>
            <span className="text-secondary font-medium">/mes</span>
          </div>

          {duration !== "mensual" ? (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {priceDetail.badge && (
                <span className="inline-flex items-center text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {priceDetail.badge}
                </span>
              )}
              {priceDetail.original && (
                <span className="text-sm text-secondary/60 line-through font-medium">
                  {formatCurrency(priceDetail.original)}
                </span>
              )}
              <span className="w-full text-xs text-secondary mt-1">
                Total de{" "}
                <strong className="text-primary font-bold">
                  {formatCurrency(priceDetail.total)}
                </strong>{" "}
                el {periodLabel}
              </span>
            </div>
          ) : (
            <div className="mt-3 text-xs text-secondary">
              Sin permanencia, cancelá cuando quieras
            </div>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3.5 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-primary/90 text-sm leading-relaxed font-normal">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onSelect}
        className={`w-full font-bold py-3.5 rounded-xl transition-all ${
          isPopular
            ? "bg-accent hover:bg-accent-hover text-white shadow-md shadow-accent/20 hover:shadow-lg"
            : "bg-accent/10 hover:bg-accent/15 text-accent border border-accent/20 hover:border-accent/40"
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
};
