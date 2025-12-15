"use client";

import React from "react";
import { Car, CheckCircle2, Users, Wrench } from "lucide-react";

import { FEATURES } from "../constants";
import { Card, Reveal } from "../components/UI";

export const Features: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Users":
        return <Users size={32} className="text-accent" />;
      case "Car":
        return <Car size={32} className="text-accent" />;
      case "Wrench":
        return <Wrench size={32} className="text-accent" />;
      default:
        return null;
    }
  };

  return (
    <section id="características" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
              Todo lo que tu taller necesita
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
              Un sistema simple, rápido y pensado para el día a día.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <Reveal key={feature.id} delay={idx * 100}>
              <Card hoverEffect>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      {getIcon(feature.iconName)}
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-primary">{feature.title}</h3>
                    <p className="mt-2 text-secondary">{feature.description}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-secondary">
                      <CheckCircle2 size={16} className="text-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
