"use client";

import React, { useState } from "react";

import type { BillingDuration, PlanPriceDetail } from "../types";
import { Reveal } from "../components/UI";
import { PricingCard } from "../components/PricingCard";

const PRICING_FEATURES: string[] = [
  "Gestión ilimitada de clientes y vehículos",
  "Órdenes de trabajo, presupuestos y estados en tiempo real",
  "Control de inventario, catálogo y alertas de stock",
  "Métricas de ingresos, gastos y rentabilidad del taller",
  "Generación y envío de presupuestos por WhatsApp",
  "Soporte técnico prioritario y actualizaciones incluidas",
];

const PRO_PRICING_FEATURES: string[] = [
  "Todo lo incluido en el Plan Estándar",
  "Facturación electrónica con ARCA",
  "Usuarios con roles y permisos personalizados",
  "Formularios de arreglos a medida",
  "Desarrollo personalizado",
];

const PRICING_TIERS: Record<"estandar" | "pro", Record<BillingDuration, PlanPriceDetail>> = {
  estandar: {
    mensual: { total: 99999, monthlyEq: 99999, original: null, badge: null, discount: null },
    semestral: { total: 499999, monthlyEq: 83333, original: 599994, badge: "1 MES GRATIS", discount: "-17%" },
    anual: { total: 899999, monthlyEq: 74999, original: 1199988, badge: "3 MESES GRATIS", discount: "-25%" },
  },
  pro: {
    mensual: { total: 149999, monthlyEq: 149999, original: null, badge: null, discount: null },
    semestral: { total: 749999, monthlyEq: 124999, original: 899994, badge: "1 MES GRATIS", discount: "-17%" },
    anual: { total: 1349999, monthlyEq: 112499, original: 1799988, badge: "3 MESES GRATIS", discount: "-25%" },
  },
};


export const Pricing: React.FC = () => {
  const [duration, setDuration] = useState<BillingDuration>("anual");

  const durations: { id: BillingDuration; label: string; discount: string | null }[] = [
    { id: "mensual", label: "Mensual", discount: null },
    { id: "semestral", label: "Semestral", discount: "-17%" },
    { id: "anual", label: "Anual", discount: "-25%" },
  ];

  const handleCheckout = (_planName: string) => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "https://app.b2car.ar";
    }
  };

  return (
    <section id="precios" className="py-24 bg-bg-main border-t border-gray-100 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight mb-4 leading-tight">
              Invertí en el crecimiento de tu negocio
            </h2>
            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              B2Car te ofrece todas las herramientas en una única plataforma fácil de usar. Sin costos ocultos, sin sorpresas.
            </p>

            {/* Duration Switcher */}
            <div className="mt-8 inline-flex p-1.5 bg-white border border-accent/20 rounded-full shadow-sm">
              {durations.map((d) => {
                const isSelected = duration === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setDuration(d.id)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-accent text-white shadow-sm"
                        : "text-secondary hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    <span>{d.label}</span>
                    {d.discount && (
                      <span
                        className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-extrabold transition-colors ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {d.discount}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Pricing Cards Grid */}
        <Reveal delay={150}>
          <div className="grid md:grid-cols-2 gap-8 max-w-[936px] mx-auto items-stretch">
            <PricingCard
              title="Estándar"
              priceDetail={PRICING_TIERS.estandar[duration]}
              duration={duration}
              features={PRICING_FEATURES}
              ctaText="Comenzar con Estándar"
              onSelect={() => handleCheckout("Estándar")}
            />
            <PricingCard
              title="Pro"
              priceDetail={PRICING_TIERS.pro[duration]}
              duration={duration}
              features={PRO_PRICING_FEATURES}
              ctaText="Comenzar con Pro"
              isPopular
              onSelect={() => handleCheckout("Pro")}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};


