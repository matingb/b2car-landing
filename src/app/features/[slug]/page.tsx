import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { FEATURES } from "@/constants";
import { Navbar, Footer } from "@/sections";
import { Button } from "@/components/UI";

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const feature = FEATURES.find((f) => f.id === resolvedParams.slug);

  if (!feature) {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center pt-24 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Funcionalidad no encontrada</h1>
          <Link href="/">
            <Button>Volver al inicio</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#características" className="inline-flex items-center text-accent hover:text-blue-700 transition-colors mb-8 font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Volver a características
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Detalles de la funcionalidad */}
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
                Funcionalidad Destacada
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                {feature.title}
              </h1>
              <p className="text-xl text-secondary mb-10 leading-relaxed">
                {feature.description}
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-6">¿Qué incluye?</h3>
                <ul className="space-y-4">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-secondary">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-accent" />
                      </div>
                      <span className="font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10">
                <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-accent/30 transition-all duration-300">
                  Agendar una demostración
                </Button>
              </div>
            </div>

            {/* Video Explicativo */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-[2rem] p-4 shadow-xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-blue-400/5 z-0"></div>
                
                <h3 className="text-center font-semibold text-gray-500 text-sm mb-4 relative z-10">
                  Video Demostrativo
                </h3>
                
                {/* Contenedor del Iframe de Loom (Proporción 16:9) */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-900 border border-gray-200 shadow-inner z-10">
                  {/* Placeholder de Loom */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                    <p className="font-medium text-lg text-white/90">
                      El video se cargará aquí.
                    </p>
                    <p className="text-sm text-white/60 mt-2">
                      (Reemplazar con el iframe de Loom)
                    </p>
                  </div>
                  
                  {/* Aquí iría el iframe real de Loom */}
                  {/* <iframe src="https://www.loom.com/embed/XXXXX" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen className="absolute top-0 left-0 w-full h-full"></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
