"use client";

import React from "react";

import { STEPS } from "../constants";
import { Card, Reveal } from "../components/UI";

export const HowItWorks: React.FC = () => {
  return (
    <section id="cómo-funciona" className="py-20 bg-bg-main relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">Flujo de trabajo simple</h2>
            <p className="text-secondary mt-2">Pon en marcha tu taller en tres pasos</p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {STEPS.map((step, idx) => (
              <Reveal key={step.id} delay={idx * 150} className="relative">
                <div className="bg-bg-main md:bg-transparent p-4 md:p-0 rounded-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-accent text-accent font-bold text-xl flex items-center justify-center mb-6 shadow-md z-10">
                      {step.id}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
