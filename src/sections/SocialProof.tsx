"use client";

import React from "react";
import { Wrench } from "lucide-react";

import { APP_NAME } from "../constants";
import { Card, Reveal } from "../components/UI";

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-primary mb-8">Resultados reales para talleres reales</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-12 mb-12">
             <div className="flex flex-col items-center">
                <div className="text-5xl font-extrabold text-accent mb-2">-40%</div>
                <div className="text-lg text-secondary font-medium">Tiempo administrativo</div>
             </div>
             <div className="hidden md:block w-px bg-gray-200 h-24"></div>
             <div className="flex flex-col items-center">
                <div className="text-5xl font-extrabold text-accent mb-2">100%</div>
                <div className="text-lg text-secondary font-medium">Trazabilidad de trabajos</div>
             </div>
          </div>
          
          <div className="hidden lg:relative lg:inline-block max-w-2xl">
             <span className="text-6xl text-accent/20 absolute -top-8 -left-8 font-serif">"</span>
             <p className="text-xl md:text-2xl text-primary font-light italic leading-relaxed">
               La herramienta que todo taller moderno necesita para escalar sin perder el control. Simplificamos tu operación para que puedas enfocarte en crecer.
             </p>
             <span className="text-6xl text-accent/20 absolute -bottom-16 -right-8 font-serif">"</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
