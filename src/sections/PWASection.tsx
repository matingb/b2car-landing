"use client";

import React from "react";
import { Clock, Smartphone, Zap } from "lucide-react";

import { Reveal } from "../components/UI";

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
              B2Car está optimizada con tecnología PWA. Instálala en tu celular o tablet sin pasar por la tienda de aplicaciones. Acceso instantáneo, notificaciones y rendimiento nativo.
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
            {/* Phone Mockup CSS */}
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-xl z-20"></div>
              <div className="w-full h-full bg-bg-main pt-12 px-4 pb-4 flex flex-col">
                 <div className="w-8 h-8 rounded bg-accent mb-6 self-start"></div>
                 <div className="w-32 h-6 bg-gray-200 rounded mb-2"></div>
                 <div className="w-48 h-4 bg-gray-200 rounded mb-8"></div>
                 
                 <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-3">
                       <div className="w-10 h-10 rounded-full bg-blue-100"></div>
                       <div className="flex-1 space-y-2">
                          <div className="w-24 h-3 bg-gray-200 rounded"></div>
                          <div className="w-full h-2 bg-gray-100 rounded"></div>
                       </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-3">
                       <div className="w-10 h-10 rounded-full bg-green-100"></div>
                       <div className="flex-1 space-y-2">
                          <div className="w-24 h-3 bg-gray-200 rounded"></div>
                          <div className="w-full h-2 bg-gray-100 rounded"></div>
                       </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-3 opacity-50">
                       <div className="w-10 h-10 rounded-full bg-orange-100"></div>
                       <div className="flex-1 space-y-2">
                          <div className="w-24 h-3 bg-gray-200 rounded"></div>
                          <div className="w-full h-2 bg-gray-100 rounded"></div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="mt-auto mx-auto w-32 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
