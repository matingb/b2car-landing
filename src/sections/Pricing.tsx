"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

import { PRICING_FEATURES, PRICING_PLANS, formatCurrency } from "../constants";
import { Badge, Button, Reveal } from "../components/UI";

export const Pricing: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("anual");

  const selectedPlan = PRICING_PLANS.find((p) => p.id === selectedPlanId) || PRICING_PLANS[0];

  const handleCheckout = () => {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Copy & Features */}
          <Reveal>
            <div>
              <div className="mb-4">
                <Badge icon={<Sparkles size={14} />}>
                  Planes transparentes
                </Badge>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight mb-6 leading-tight">
                Invertí en el crecimiento de tu negocio
              </h2>

              <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed">
                B2Car te ofrece todas las herramientas en una única plataforma fácil de usar. Sin costos ocultos, sin sorpresas.
              </p>
              
              <ul className="space-y-4 sm:space-y-5">
                {PRICING_FEATURES.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-primary/90 font-medium text-base sm:text-lg">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right: Pricing Options */}
          <Reveal delay={150}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xl shadow-gray-200/40">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary">Elegí el plan ideal para tu taller</h3>
                <p className="text-sm text-secondary mt-1">Todos los planes incluyen acceso completo y soporte.</p>
              </div>

              <div className="space-y-3.5">
                {PRICING_PLANS.map((plan) => {
                  const isSelected = selectedPlanId === plan.id;

                  return (
                    <label 
                      key={plan.id}
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`relative flex items-center justify-between p-5 sm:p-6 rounded-2xl cursor-pointer border-2 transition-all duration-200 ${
                        isSelected 
                          ? "border-accent bg-accent/[0.02] ring-4 ring-accent/15 shadow-md" 
                          : "border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50/50"
                      }`}
                    >
                      {/* Popular tag on top right if applicable */}
                      {plan.popular && (
                        <div className="absolute -top-3 right-5 bg-accent text-white text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow-sm">
                          Más Elegido
                        </div>
                      )}

                      <div className="flex items-center gap-3.5 sm:gap-4">
                        {/* Radio Checkmark */}
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected ? "border-accent bg-accent" : "border-gray-300 bg-white"
                        }`}>
                          {isSelected && <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white rounded-full" />}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-base sm:text-lg font-bold text-primary">
                              {plan.name}
                            </h4>
                          </div>

                          {plan.savings && (
                            <span className="inline-block text-accent text-xs font-bold uppercase tracking-wider mt-0.5">
                              {plan.savings}
                            </span>
                          )}

                          {plan.description && (
                            <p className="text-xs text-secondary mt-0.5 hidden sm:block">
                              {plan.description}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-right pl-2">
                        <div className="flex items-baseline justify-end gap-1">
                          <span className="text-2xl sm:text-3xl font-black text-primary tracking-tight">
                            {formatCurrency(plan.price)}
                          </span>
                          {plan.period && (
                            <span className="text-xs text-secondary font-semibold">
                              {plan.period}
                            </span>
                          )}
                        </div>
                        {plan.originalPrice && (
                          <div className="text-xs sm:text-sm text-secondary/60 line-through font-medium mt-0.5">
                            {formatCurrency(plan.originalPrice)}
                          </div>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
              
              <div className="pt-6">
                <Button 
                  size="lg" 
                  fullWidth 
                  onClick={handleCheckout}
                  className="py-4 text-base sm:text-lg font-bold shadow-lg shadow-accent/25 hover:shadow-accent/40"
                >
                  <span>Continuar con {selectedPlan.name}</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <div className="flex items-center justify-center gap-1.5 text-secondary text-xs sm:text-sm font-medium mt-4">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Pago seguro. Cancelá o cambiá de plan cuando quieras.</span>
                </div>
              </div>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
};
