"use client";

import React from "react";
import { Clock, Smartphone, Zap } from "lucide-react";

import { Reveal } from "../components/UI";
import { PhoneMockup } from "../components/PhoneMockup";

export const PWASection: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tu taller en tu bolsillo.<br />Funciona como una App.</h2>
            <p className="text-gray-400 text-lg mb-8">
              Diseñada para acompañarte en el taller. Instalá B2Car directamente en tu celular o tablet. Disfrutá de acceso inmediato, notificaciones en tiempo real y la fluidez de una aplicación nativa.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Reveal delay={100}>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-lg p-4 border border-white/10">
                  <Smartphone className="text-accent" />
                  <div>
                    <div className="font-bold">Instalable</div>
                    <div className="text-xs text-gray-400">iOS & Android</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-lg p-4 border border-white/10">
                  <Zap className="text-yellow-400" />
                  <div>
                    <div className="font-bold">Ultrarrápida</div>
                    <div className="text-xs text-gray-400">Carga inmediata</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={300}>
                 <div className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-lg p-4 border border-white/10">
                  <Clock className="text-green-400" />
                  <div>
                    <div className="font-bold">Disponible 24/7</div>
                    <div className="text-xs text-gray-400">99.9% Uptime</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
          
          <Reveal delay={400} className="flex justify-center lg:justify-end">
            <PhoneMockup
              videoSrc="/screens/mobile-video.mp4"
              poster="/screens/mobile/screenMobile1.png"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
