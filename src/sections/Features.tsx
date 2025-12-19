"use client";

import React from "react";
import Link from "next/link";
import { Car, CheckCircle2, Users, Wrench, ArrowRight } from "lucide-react";

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
    <section id="características" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight mb-4">
              Todo lo que tu taller necesita
            </h2>
            <p className="mt-4 text-lg md:text-xl text-secondary max-w-2xl mx-auto">
              Descubrí nuestras herramientas diseñadas para simplificar tu día a día y potenciar tu negocio.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {FEATURES.map((feature, idx) => {
            const getFeatureRoute = (id: string) => {
              switch (id) {
                case "clients": return "/clientes";
                case "vehicles": return "/vehiculos";
                case "repairs": return "/reparaciones";
                default: return `/${id}`;
              }
            };
            
            return (
            <Reveal key={feature.id} delay={idx * 150} className="flex h-full">
              <Link href={getFeatureRoute(feature.id)} className="w-full flex">
                <Card hoverEffect className="w-full h-full flex flex-col justify-between group cursor-pointer border-transparent hover:border-accent/30 transition-all duration-300">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {getIcon(feature.iconName)}
                        </div>
                        <h3 className="mt-6 text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                        <p className="mt-3 text-secondary leading-relaxed">{feature.description}</p>
                      </div>
                    </div>

                    <ul className="mt-8 space-y-3">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm font-medium text-secondary">
                          <CheckCircle2 size={18} className="text-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Ver en detalle <ArrowRight className="ml-2" size={18} />
                  </div>
                </Card>
              </Link>
            </Reveal>
          );
          })}
        </div>
      </div>
    </section>
  );
};
